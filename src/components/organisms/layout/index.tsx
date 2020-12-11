import React from "react";
import Head from "next/head";
import Header from "@/components/organisms/header";
import { useToggleTheme } from "@/context/theme";

type Props = {
  title?: string | string[];
  noHeaderContents?: boolean;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const { children, title, noHeaderContents } = props;
  const { toggleTheme } = useToggleTheme();
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <Header noHeaderContents={noHeaderContents} />
      {children}
      <button
        style={{ top: "calc(100% - 21px)", position: "fixed" }}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </>
  );
};

export default Layout;
