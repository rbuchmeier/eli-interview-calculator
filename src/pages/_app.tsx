import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

import "~/styles/globals.css";
import { EligibilityProvider } from "~/contexts/eligibility";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <EligibilityProvider>
        <div className={GeistSans.className}>
          <Component {...pageProps} />
        </div>
      </EligibilityProvider>
    </NextUIProvider>
  );
};

export default MyApp;
