import { NextSeo } from "next-seo";
import Web3Modal from "web3modal";
import { useEffect, useRef, useState } from "react";
import { providers } from "ethers";
import { useSnackbar } from "notistack";

// Components
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Home/Hero";
import Latest from "../components/Home/Latest";

export default function Home() {
  //* States
  const [walletConnected, setWalletConnected] = useState(false); // Is the wallet connected?
  const [loading, setLoading] = useState(false); // Is the App Loading?
  const [address, setAddress] = useState(""); // Whats the EOA address

  // Holds the wallet hook
  const web3ModalRef = useRef();

  // Used for notifications
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // Tries to connect wallet, with error handling
  const connectWallet = async () => {
    try {
      setLoading(true);
      web3ModalRef.current = new Web3Modal({
        network: "mumbai",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      const provider = await getProviderOrSigner();
      if (provider) {
        await getUserAddress();
        setWalletConnected(true);
        enqueueSnackbar("Successfully connected Wallet", {
          variant: "success",
          preventDuplicate: true,
        });
      }
      setLoading(false);
    } catch (err) {
      enqueueSnackbar(`Error connecting wallet : ${err.message}`, {
        variant: "error",
      });
      setLoading(false);
    }
  };

  // Disconnect wallet
  const disconnectWallet = () => {
    web3ModalRef.current = null;
    setWalletConnected(!walletConnected);
    enqueueSnackbar("Successfully disconnected Wallet", {
      variant: "success",
      preventDuplicate: true,
    });
  };

  // Gets a provider or signer and checks if user is in right network (Rinkeby)
  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    const { chainId, name } = await web3Provider.getNetwork();
    if (chainId !== 4) {
      enqueueSnackbar(
        `You are in the ${name.toUpperCase()} network. Please switch to Rinkeby Network`,
        {
          variant: "error",
          preventDuplicate: true,
        }
      );
      return;
    }

    if (needSigner) {
      return web3Provider.getSigner();
    }

    return web3Provider;
  };

  // Tries to get the address of the user
  const getUserAddress = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const address = await signer.getAddress();
      setAddress(address.toString().substring(0, 15) + "...");
    } catch (error) {
      enqueueSnackbar(`Error Getting user Address : ${error.message}`, {
        variant: "error",
      });
    }
  };

  // Render Navbar button based on Wallet connection
  const renderButton = () => {
    if (!walletConnected) {
      return (
        <button
          onClick={connectWallet}
          className="w-52 py-3 px-2 rounded-xl"
          data-theme="aqua"
        >
          Connect your wallet
        </button>
      );
    }

    return (
      <button
        onClick={disconnectWallet}
        className="w-52 py-3 px-2 rounded-xl"
        data-theme="aqua"
      >
        {address}
      </button>
    );
  };

  return (
    <div>
      <NextSeo
        title="Fat Tabbys"
        description="Decentralised Room Rental Service"
      />
      <Navbar renderButton={renderButton} />

      <Hero />
      <Latest />
    </div>
  );
}
