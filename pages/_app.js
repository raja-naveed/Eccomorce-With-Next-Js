import Navigation from "@/components/Navigation";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from './../redux/store';
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
      <SnackbarProvider maxSnack={3}>

      <Navigation />
      <Component {...pageProps} />
      </SnackbarProvider>
      </Provider>
    </div>
  );
}
