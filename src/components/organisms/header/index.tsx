import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import { Search } from "@material-ui/icons";
import Image from "next/image";
import styles from "./style.module.css";

const useStyles = makeStyles(() => ({
  signUpButton: {
    width: "100%",
    color: "#FFF",
    backgroundColor: "#3e2924",
    "&:hover": {
      backgroundColor: "#3e2924c5",
    },
  },
  searchButton: {
    width: "30px",
    height: "30px",
    "&:hover": {
      cursor: "pointer",
      color: "#3e2924c5",
      transition:
        "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
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

  // テストデータ
  const options = [
    { title: "javascript" },
    { title: "Python" },
    { title: "PHP" },
    { title: "Java" },
  ];

  const pathname = router.pathname.replace(/\//g, "");

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContents}>
          <div className={styles.titleWrapper}>
            <Image
              className={styles.title}
              src="/icon/title.svg"
              alt="備忘録"
              width="120"
              height="60"
              onClick={() => router.push("/")}
            />
          </div>
          {/* ログイン画面＆新規登録画面でタイトル以外のコンポーネントを隠す */}
          {pathname === "login" || pathname === "signUp" ? null : (
            <div className={styles.contents}>
              {/* 画面サイズ600px以下で検索欄を隠す */}
              {window && window.width < 600 ? null : (
                <>
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
                  <div className={styles.searchButtonWrapper}>
                    <Search className={classes.searchButton} />
                  </div>
                </>
              )}

              <div className={styles.signUpButtonWrapper}>
                <Button
                  className={classes.signUpButton}
                  onClick={() => router.push("/login")}
                >
                  ログイン
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
