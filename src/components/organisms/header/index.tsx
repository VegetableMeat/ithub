import { useRouter } from "next/router";
import React from "react";
import { Button, Avatar, IconButton } from "@material-ui/core";
import { Search, Clear } from "@material-ui/icons";
import MediaQuery from "react-responsive";
import { useToggleTheme } from "@/context/theme";
import UserMenu from "@/components/organisms/user-menu";
import SearchField from "@/components/molecules/search-field";
import { useStyles } from "./material";
import styles from "./style.module.css";
import tagData from "@/fixtures/tag.json";

type Props = {
  noHeaderContents?: boolean;
};

const Header: React.FC<Props> = (props) => {
  const { noHeaderContents } = props;

  const router = useRouter();
  const classes = useStyles();
  /* 仮ログイン */
  const isLogin = true;
  const [visibleSearch, setVisibleSearch] = React.useState<boolean>(false);

  const handleVisibleSearch = () => {
    setVisibleSearch(true);
  };

  const handleHiddenSearch = () => {
    setVisibleSearch(false);
  };

  const { theme } = useToggleTheme();
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContents}>
          {visibleSearch ? (
            <>
              <SearchField tags={tagData} />
              <IconButton
                className={classes.clearButton}
                onClick={handleHiddenSearch}
              >
                <Clear style={{ cursor: "pointer" }} />
              </IconButton>
            </>
          ) : (
            <>
              <div className={styles.titleWrapper}>
                <img
                  className={styles.title}
                  src={theme === "light" ? "/logo.svg" : "/logo_dark.svg"}
                  alt="備忘録"
                  onClick={() => router.push("/")}
                />
              </div>
              {/* ログイン画面＆新規登録画面でタイトル以外のコンポーネントを隠す */}
              {noHeaderContents ? (
                <></>
              ) : (
                <>
                  <MediaQuery query="(min-width: 601px)">
                    <SearchField tags={tagData} />
                  </MediaQuery>
                  <div className={styles.contents}>
                    {isLogin ? (
                      <>
                        <MediaQuery query="(max-width: 600px)">
                          <div
                            className={styles.searchButtonWrapper}
                            onClick={handleVisibleSearch}
                          >
                            <Search className={classes.searchButton} />
                          </div>
                        </MediaQuery>
                        <div className={styles.writeButtonWrapper}>
                          <Button className={classes.button}>
                            Write a memo
                          </Button>
                        </div>
                        <UserMenu />
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
                </>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
