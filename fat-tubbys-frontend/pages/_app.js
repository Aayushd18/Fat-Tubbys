import "../styles/globals.css"; // Tailwindcss
import { SnackbarProvider } from "notistack"; // For Notifications
import { ThemeProvider } from "next-themes"; // For Easy theme switching

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
        <Component {...pageProps} />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
