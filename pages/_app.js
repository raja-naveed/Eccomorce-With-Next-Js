import Navigation from "@/components/Navigation";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from './../redux/store';
import { SnackbarProvider } from "notistack";
import GetVisitor from "@/components/GetVisitor";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
          <GetVisitor />
          <Navigation />
          <Component {...pageProps} />
        </SnackbarProvider>
      </Provider>
    </div>
  );
}
