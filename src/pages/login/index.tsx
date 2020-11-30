import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import Button from "@/components/atoms/button";
import headerStyle from "@/components/organisms/header/style.module.css";
import style from "./style.module.css";

export const getServerSideProps = async (context) => ({
  props: {
    noLayout: true,
  },
});

const Login: React.FC = () => {
  const router = useRouter();
  return (
    <div className="noLayout">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        ></meta>
      </Head>
      <header>
        <div className={headerStyle.headerContainer}>
          <div className={headerStyle.headerContents}>
            <div className={headerStyle.titleWrapper}>
              <Image
                className={headerStyle.title}
                src="/icon/title.svg"
                alt="備忘録"
                width="120"
                height="60"
                onClick={() => router.push("/")}
              />
            </div>
          </div>
        </div>
      </header>
      <main className={style.main}>
        <span className={style.title}>ログイン</span>
        <span className={style.text}>
          下記のボタンで新規登録、ログインの両方を行うことができます。
        </span>
        {/* TODO: ログイン処理の実装 */}
        <Button className={style.google} func={() => router.push("/signUp")}>
          Google
        </Button>
      </main>
    </div>
  );
};

export default Login;
