import { useRouter } from "next/router";
import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Layout from "@/components/organisms/layout";
import styles from "./style.module.css";

const useStyles = makeStyles(() => ({
  textField: {
    width: "100%",
  },
  twitter: {
    width: "70%",
  },
  twitterImage: {
    width: "25%",
    height: "25%",
  },
  github: {
    width: "70%",
  },
  githubImage: {
    width: "25%",
    height: "25%",
  },
  readOnly: {
    width: "30%",
    verticalAlign: "bottom",
  },
  submitButton: {
    width: "100%",
    height: "40px",
    marginTop: "30px",
    color: "#FFF",
    backgroundColor: "#3e2924",
    "&:hover": {
      backgroundColor: "#3e2924c5",
    },
  },
}));

const signUp: React.FC = () => {
  const router = useRouter();
  const classes = useStyles();
  return (
    <Layout title="signUp">
      <div className={styles.signUpContainer}>
        <main className={styles.main}>
          <div className={styles.title}>ユーザー設定</div>
          <div className={styles.form}>
            <div className={styles.inputWrapper}>
              <TextField
                className={classes.textField}
                required
                id="user_name"
                label="ユーザー名"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
            </div>
            <div className={styles.inputWrapper}>
              <TextField
                className={classes.textField}
                required
                id="user_id"
                label="ユーザーID"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
            </div>
            <div className={styles.inputWrapper_}>
              <TextField
                className={classes.readOnly}
                defaultValue="https://github.com/"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                className={classes.github}
                id="github"
                label="GitHubのID"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
            </div>
            <div className={styles.inputWrapper_}>
              <TextField
                className={classes.readOnly}
                defaultValue="https://twitter.com/"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                className={classes.twitter}
                id="twitter"
                label="TwitterのID"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
            </div>
            <div className={styles.buttonWrapper}>
              <Button
                className={classes.submitButton}
                variant="contained"
                href="/"
              >
                登録
              </Button>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default signUp;
