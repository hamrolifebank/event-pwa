// ----------------------------------------------------------------------

import PropTypes from "prop-types";
import { CacheProvider } from "@emotion/react";
// next
import Head from "next/head";
// utils
import createEmotionCache from "../utils/createEmotionCache";
// theme
import ThemeProvider from "../theme";
import { SettingsProvider } from "@components/settings";
import store from "@redux/store";
import { Provider } from "react-redux";
import AuthGuard from "@guards/AuthGuard";
import Initializer from "@initializer/initializer";

const clientSideEmotionCache = createEmotionCache();

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  emotionCache: PropTypes.object,
};

export default function MyApp(props) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <SettingsProvider>
          <ThemeProvider>
            <AuthGuard>
              <Initializer>
                {getLayout(<Component {...pageProps} />)}
              </Initializer>
            </AuthGuard>
          </ThemeProvider>
        </SettingsProvider>
      </Provider>
    </CacheProvider>
  );
}
