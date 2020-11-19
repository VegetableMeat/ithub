import React, { FC } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "../components/atoms/button/button";

const Top: FC = () => {
  const router = useRouter();
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button
        text={"GO!!"}
        btnFunc={() => router.push("/mochi/memo/mochi190")}
      />
    </div>
  );
};

export default Top;
