import { useRouter } from "next/router";
import React from "react";
import {
  Button,
  TextField,
  Avatar,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import Material from "./material";
import { Search } from "@material-ui/icons";
import MediaQuery from "react-responsive";
import { useToggleTheme } from "@/context/theme";
import styles from "./style.module.css";

const Header: React.FC = () => {
  const router = useRouter();
  const classes = Material();
  const isLogin = true;

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

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
              <MediaQuery query="(min-width: 601px)">
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
              </MediaQuery>
              <MediaQuery query="(max-width: 600px)">
                <div className={styles.searchButtonWrapper}>
                  <Search className={classes.searchButton} />
                </div>
              </MediaQuery>
              {isLogin ? (
                <>
                  <button
                    className={classes.avatarButton}
                    ref={anchorRef}
                    aria-controls={open ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    onMouseEnter={handleOpen}
                  >
                    <div className={styles.avatarWrapper}>
                      <Avatar
                        className={classes.avatar}
                        src="https://avatars0.githubusercontent.com/u/41997570?s=460&u=d7609d3029ff5a356c7bb573c94a8f4664488e40&v=4"
                      />
                    </div>
                  </button>
                  <Popper
                    className={classes.popper}
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom"
                              ? "center top"
                              : "center bottom",
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              className={classes.menuList}
                              autoFocusItem={open}
                              id="menu-list-grow"
                              onKeyDown={handleListKeyDown}
                              onMouseEnter={handleOpen}
                              onMouseLeave={handleClose}
                            >
                              <MenuItem onClick={handleClose}>Profile</MenuItem>
                              <MenuItem onClick={handleClose}>
                                My account
                              </MenuItem>
                              <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                  <div className={styles.writeButtonWrapper}>
                    <Button className={classes.button}>write memo</Button>
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
