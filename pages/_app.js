import { ThemeProvider } from "theme-ui";
import theme from "../lib/theme/theme";

import Head from "next/head";

const color = theme.colors.background;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/**Fonts import*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        {/**Ubuntu*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />

        {/**Favicon*/}

        <meta key="theme_color" name="theme-color" content={color} />
        <meta key="tile_color" name="msapplication-TileColor" content={color} />
        <link
          key="safari_icon"
          rel="mask-icon"
          href="https://assets.hackclub.com/favicons/safari-pinned-tab.svg"
          color={color}
        />
        <link
          key="apple_icon"
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://assets.hackclub.com/favicons/apple-touch-icon.png"
        />
        <link
          key="favicon_32"
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://assets.hackclub.com/favicons/favicon-32x32.png"
        />
        <link
          key="favicon_16"
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://assets.hackclub.com/favicons/favicon-16x16.png"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
