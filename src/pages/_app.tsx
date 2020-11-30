import Layout from "@/components/organisms/layout";
import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import "sanitize.css";
import "@/styles/globals.css";

/**
 * noLayoutを受け取ると、そのページにはヘッダー等を適応しない
 */

const MyApp = ({ Component, pageProps }: AppProps) => {
  return pageProps.noLayout ? (
    <Component {...pageProps} />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
