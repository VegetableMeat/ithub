import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Button, TextField, Avatar } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import { Search } from "@material-ui/icons";
import { useToggleTheme } from "@/context/theme";
import Image from "next/image";
import styles from "./style.module.css";

const useStyles = makeStyles(() => ({
  button: {
    textTransform: "capitalize",
    width: "100%",
    color: "#FFF",
    backgroundColor: "var(--accent-color);",
    "&:hover": {
      backgroundColor: "var(--accent-color);",
    },
  },
  searchButton: {
    width: "30px",
    height: "30px",
    "&:hover": {
      cursor: "pointer",
      color: "var(--accent-color);",
      transition:
        "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
  },
  avatar: {
    width: "35px",
    height: "35px",
    backgroundColor: "#FFF",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const useWindowDimensions = () => {
  const getWindowDimensions = () => {
    if (process.browser) {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height,
      };
    }
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return windowDimensions;
};

const Header: React.FC = () => {
  const router = useRouter();
  const classes = useStyles();
  const window = useWindowDimensions();
  const isLogin = true;

  // テストデータ
  const options = [
    { title: "javascript" },
    { title: "Python" },
    { title: "PHP" },
    { title: "Java" },
  ];

  const pathname = router.pathname.replace(/\//g, "");
  const { theme } = useToggleTheme();
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContents}>
          <div className={styles.titleWrapper}>
            <img
              className={styles.title}
              src={theme === "light" ? "/logo.png" : "/logo_dark.png"}
              alt="備忘録"
              onClick={() => router.push("/")}
            />
          </div>
          {/* ログイン画面＆新規登録画面でタイトル以外のコンポーネントを隠す */}
          {pathname === "login" || pathname === "signUp" ? null : (
            <div className={styles.contents}>
              {/* 画面サイズ600px以下で検索欄を隠す */}
              {window && window.width < 600 ? (
                <div className={styles.searchButtonWrapper}>
                  <Search className={classes.searchButton} />
                </div>
              ) : (
                <div className={styles.searchFieldWrapper}>
                  <Autocomplete
                    id={"search"}
                    options={options}
                    getOptionLabel={(option) =>
                      option.title ? option.title : ""
                    }
                    limitTags={1}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className={styles.searchField}
                        label={"タグ検索"}
                        variant="outlined"
                      />
                    )}
                  />
                </div>
              )}
              {isLogin ? (
                <>
                  <div className={styles.writeButtonWrapper}>
                    <Button className={classes.button}>write memo</Button>
                  </div>
                  <div className={styles.avatarWrapper}>
                    <Avatar
                      className={classes.avatar}
                      src="https://avatars0.githubusercontent.com/u/41997570?s=460&u=d7609d3029ff5a356c7bb573c94a8f4664488e40&v=4"
                    />
                  </div>
                </>
              ) : (
                <div className={styles.signUpButtonWrapper}>
                  <Button
                    className={classes.button}
                    onClick={() => router.push("/login")}
                  >
                    login
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
