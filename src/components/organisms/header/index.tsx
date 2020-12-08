import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import Select from "@/components/atoms/select";
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
    { title: "A" },
    { title: "B" },
    { title: "C" },
    { title: "D" },
    { title: "E" },
    { title: "F" },
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
          {pathname === "login" || pathname === "signUp" ? null : (
            <div className={styles.contents}>
              {window && window.width < 600 ? null : (
                <div className={styles.searchFieldWrapper}>
                  <Select
                    className={styles.searchField}
                    id={"search"}
                    label={"タグ検索"}
                    options={options}
                    limit={1}
                  />
                </div>
              )}
              <div className={styles.searchButtonWrapper}>
                <Image
                  className={styles.searchButton}
                  src="/icon/search.svg"
                  alt="検索"
                  width="22"
                  height="22"
                  onClick={() => {}}
                />
              </div>
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
