import "../styles/globals.css";
import { SnackbarProvider } from "notistack";

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
      <Component {...pageProps} />
    </SnackbarProvider>
  );
}

export default MyApp;
