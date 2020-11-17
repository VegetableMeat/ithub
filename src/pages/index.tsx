import React, { FC } from "react";
import Head from "next/head";
import Header from "../components/organisms/header";
import styles from "../styles/Home.module.css";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head   >
      <Header />
    </div>
  );
};

export default Home;
