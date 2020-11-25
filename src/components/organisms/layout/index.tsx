import React from "react"
import Head from "next/head";
import Header from "@/components/organisms/header"

type Props = {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"></meta>
      </Head>
      <Header />
      {children}
    </div>
  );
}

export default Layout;