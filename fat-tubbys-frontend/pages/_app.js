import "../styles/globals.css"; // Tailwindcss
import { SnackbarProvider } from "notistack"; // For Notifications
import { ThemeProvider } from "next-themes"; // For Easy theme switching
// import dotenv from "dotenv";

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

// dotenv.config({ path: ".env" })

const { chains, provider } = configureChains(
  [ chain.polygonMumbai ],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Fat Tubbys',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


function MyApp({ Component, pageProps }) {

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode chains={chains} showRecentTransactions={true} theme={darkTheme()}>
      <ThemeProvider>
        <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
