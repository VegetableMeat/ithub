import { useRouter } from "next/router";
import React from "react";
import { TextField } from "@material-ui/core";
import Layout from "@/components/organisms/layout";
import Input from "@/components/atoms/input";
import Button from "@/components/atoms/button";
import styles from "./style.module.css";

const signUp: React.FC = () => {
  const router = useRouter();
  return (
    <Layout title="signUp">
      <div className={styles.signUpContainer}>
        <main className={styles.main}>
          <div className={styles.title}>ユーザー設定</div>
          <div className={styles.form}>
            <div className={styles.inputWrapper}>
              <span>ユーザー名*</span>
              <TextField
                // className={className}
                id={"name"}
                label={"5文字以上で～"}
                type={"text"}
                variant={"standard"}
              />
            </div>
            <div className={styles.inputWrapper}>
              <span>ユーザーID*</span>
              <TextField
                // className={className}
                id={"id"}
                label={"5文字以上で～"}
                type={"text"}
                variant={"standard"}
              />
            </div>
            <div className={styles.inputWrapper}>
              <span>Github</span>
              <TextField
                // className={className}
                id={"github"}
                label={"GithubのID"}
                type={"text"}
                variant={"standard"}
              />
            </div>
            <div className={styles.inputWrapper}>
              <span>Twitter</span>
              <TextField
                // className={className}
                id={"twitter"}
                label={"TwitterのID"}
                type={"text"}
                variant={"standard"}
              />
            </div>
            <Button className={styles.submit} func={() => router.push("/")}>
              登録
            </Button>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default signUp;
