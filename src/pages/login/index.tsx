import { useRouter } from "next/router";
import React from "react";
import { Button, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import Layout from "@/components/organisms/layout";
import styles from "./style.module.css";

const useStyles = makeStyles(() => ({
  googleButton: {
    color: "#808080",
    width: "250px",
    height: "40px",
    fontWeight: "bold",
    marginBottom: "5px",
    textTransform: "none",
    padding: "6px",
  },
  googleImage: {
    width: "22px",
    height: "22px",
    marginRight: "5px",
  },
}));

const Login: React.FC = () => {
  const router = useRouter();
  const classes = useStyles();
  return (
    <Layout title="login">
      <div className={styles.loginContainer}>
        <main className={styles.main}>
          <span className={styles.title}>ログイン</span>
          <span className={styles.text}>
            下記のボタンで新規登録、ログインの両方を行うことができます。
          </span>
          {/* TODO: ログイン処理の実装 */}
          <Button
            className={classes.googleButton}
            variant="contained"
            href={`/signUp`}
          >
            <Avatar
              className={classes.googleImage}
              src="https://raw.githubusercontent.com/VegetableMeat/material-image/main/google-icon.svg"
            />
            Googleアカウントでログイン
          </Button>
        </main>
      </div>
    </Layout>
  );
};

export default Login;
