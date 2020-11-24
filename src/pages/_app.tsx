import Layout from "@/components/organisms/layout";
import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import "sanitize.css"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return pageProps.layout ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
      <Component {...pageProps} />
    );
};

export default MyApp;
