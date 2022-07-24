import { NextSeo } from "next-seo";
import Web3Modal from "web3modal";
import { useEffect, useRef, useState } from "react";
import { providers } from "ethers";
import { useSnackbar } from "notistack";

// Components
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Home/Hero";

export default function Home() {
  //* States
  // Wallet Connection
  const [walletConnected, setWalletConnected] = useState(false);
  // Set Loading state when there a process running
  const [loading, setLoading] = useState(false);

  // Hold User EOA
  const [address, setAddress] = useState("");

  // Holds the wallet hook
  const web3ModalRef = useRef();

  // Used for notifications
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // Tries to connect wallet, with error handling
  const connectWallet = async () => {
    try {
      const provider = await getProviderOrSigner();
      setWalletConnected(true);
      if (provider)
        enqueueSnackbar("Successfully connected Wallet", {
          variant: "success",
          preventDuplicate: true,
        });
    } catch (err) {
      enqueueSnackbar(`Error connecting wallet : ${err.message}`, {
        variant: "error",
      });
      console.log(err);
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
    console.log("disconnected");
  };

  // Gets a provider or signer and checks if user is in right network
  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 80001) {
      enqueueSnackbar(
        `You are in the wrong network. Please switch to Mumbai Polygon Testnet`,
        {
          variant: "error",
        }
      );
      throw new Error("Please change the network to Mumbai Testnet");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }

    return web3Provider;
  };

  // Tries to get the address of the user
  const getUserAddress = async () => {
    try {
      const provider = await getProviderOrSigner(true);
      const address = await provider.getAddress();
      setAddress(address.toString().substring(0, 15) + "...");
    } catch (error) {
      enqueueSnackbar(`Error Getting user Address : ${error.message}`, {
        variant: "error",
      });
      throw new Error(error);
    }
  };

  // Runs connect wallet for network Mumbai
  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "mumbai",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
      getUserAddress();
    }
  }, [walletConnected]);

  // Render Navbar button based on Wallet connection
  const renderButton = () => {
    if (!walletConnected) {
      return (
        <button onClick={connectWallet} className="w-52 py-3 px-2 rounded-xl">
          Connect your wallet
        </button>
      );
    }

    return (
      <button
        onClick={disconnectWallet}
        className="w-52 py-3 px-2 rounded-xl"
        data-theme="night"
      >
        {address}
      </button>
    );
  };

  return (
    <div>
      <NextSeo title="Fat Tabbys" description="A NFT Marketplace" />
      <Navbar renderButton={renderButton} />
      <Hero />
    </div>
  );
}
