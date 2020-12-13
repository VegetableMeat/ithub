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
import { Search } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import MediaQuery from "react-responsive";
import { useToggleTheme } from "@/context/theme";
import UseStyles from "./UseStyles";
import styles from "./style.module.css";

type Props = {
  noHeaderContents: boolean;
};

const Header: React.FC<Props> = (props) => {
  const { noHeaderContents } = props;
  const CssTextField = withStyles({
    root: {
      borderBox: "border-box",
      width: "inherit",
      height: "36px",
      "& input": {
        padding: "0 12px",
        height: "inherit",
        fontSize: "12px",
        color: "var(--accent-color);",
        border: "solid 1px var(--textfield-border-color);",
        borderRadius: "5px",
        "&:hover": {
          border: "solid 1px var(--textfield-border-hover-color);",
        },
        "&:focus": {
          border: "solid 2px var(--textfield-border-focus-color);",
          padding: "0 11px",
        },
      },
      "& input::placeholder": {
        color: "var(--accent-color);",
      },
      "& label.Mui-focused": {
        color: "var(--accent-color);",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "var(--accent-color);",
      },
      "& .MuiOutlinedInput-root": {
        height: "inherit",
        "&.Mui-focused fieldset": {
          borderColor: "var(--accent-color);",
        },
      },
      "& [class^='PrivateNotchedOutline-root']": {
        border: "0",
      },
    },
  })(TextField);

  const router = useRouter();
  const classes = UseStyles();
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

  const { theme } = useToggleTheme();
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContents}>
          <div className={styles.titleWrapper}>
            <img
              className={styles.title}
              src={theme === "light" ? "/logo.svg" : "/logo_dark.svg"}
              alt="備忘録"
              onClick={() => router.push("/")}
            />
          </div>
          {/* ログイン画面＆新規登録画面でタイトル以外のコンポーネントを隠す */}
          {noHeaderContents ? null : (
            <>
              <MediaQuery query="(min-width: 601px)">
                <div className={styles.searchFieldWrapper}>
                  <CssTextField
                    className={styles.searchField}
                    placeholder={"Search"}
                    variant="outlined"
                    inputProps={{ spellCheck: "false" }}
                  />
                </div>
              </MediaQuery>
              <div className={styles.contents}>
                {isLogin ? (
                  <>
                    <MediaQuery query="(max-width: 600px)">
                      <div className={styles.searchButtonWrapper}>
                        <Search className={classes.searchButton} />
                      </div>
                    </MediaQuery>
                    <div className={styles.writeButtonWrapper}>
                      <Button className={classes.button}>Write a memo</Button>
                    </div>
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
                                autoFocusItem={open}
                                id="menu-list-grow"
                                onKeyDown={handleListKeyDown}
                                onMouseEnter={handleOpen}
                                onMouseLeave={handleClose}
                              >
                                <MenuItem
                                  className={classes.menuItem}
                                  onClick={handleClose}
                                >
                                  Profile
                                </MenuItem>
                                <MenuItem
                                  className={classes.menuItem}
                                  onClick={handleClose}
                                >
                                  My account
                                </MenuItem>
                                <MenuItem
                                  className={classes.menuItem}
                                  onClick={handleClose}
                                >
                                  Logout
                                </MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
