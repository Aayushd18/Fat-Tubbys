import { NextSeo } from "next-seo";
import Web3Modal from "web3modal";
import { useEffect, useRef, useState } from "react";
import { providers } from "ethers";
import { useSnackbar } from "notistack";

// Components
import Navbar from "./Navbar";
import Hero from "../components/Home/Hero";

export default function Home() {
  //* States
  // Wallet Connection
  const [walletConnected, setWalletConnected] = useState(false);
  // Set Loading state when there a process running
  const [loading, setLoading] = useState(false);

  // Holds the wallet hook
  const web3ModalRef = useRef();

  // Used for notifications
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // Tries to connect wallet
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

  // Gets a provider or signer and checks if user is in right network
  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 80001) {
      window.alert("Please change the network to Mumbai Testnet");
      throw new Error("Please change the network to Mumbai Testnet");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }

    return web3Provider;
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
    }
  }, [walletConnected]);

  return (
    <div>
      <NextSeo title="Fat Tabbys" description="A NFT Marketplace" />
      {/* <Navbar web3ModalRef={web3ModalRef} /> */}
      <Hero />
    </div>
  );
}
