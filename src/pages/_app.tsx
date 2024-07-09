import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import {NextUIProvider} from "@nextui-org/react";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <div className={GeistSans.className}>
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  );
};

export default MyApp;
