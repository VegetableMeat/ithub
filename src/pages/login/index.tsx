import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import Layout from "@/components/organisms/layout";
import Button from "@/components/atoms/button";
import headerStyle from "@/components/organisms/header/style.module.css";
import style from "./style.module.css";

const Login: React.FC = () => {
  const router = useRouter();
  return (
    <Layout title="login">
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
    </Layout>
  );
};

export default Login;
