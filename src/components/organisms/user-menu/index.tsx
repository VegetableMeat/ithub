import Link from "next/link";
import React from "react";
import {
  Avatar,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";
import { EventNote, ExitToApp, Favorite, Settings } from "@material-ui/icons";
import { useStyles } from "./material";
import styles from "./style.module.css";

const UserMenu: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
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

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={styles.userMenu}>
      <button
        className={classes.avatarButton}
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        onMouseEnter={handleOpen}
      >
        <div className={styles.avatarWrapper}>
          {/* <Avatar
            className={classes.avatar}
            src="https://avatars0.githubusercontent.com/u/41997570?s=460&u=d7609d3029ff5a356c7bb573c94a8f4664488e40&v=4"
          /> */}
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
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper variant="outlined" className={classes.menuPaper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onMouseEnter={handleOpen}
                  onMouseLeave={handleClose}
                  style={{
                    outline: "none",
                  }}
                >
                  <Link href={{ pathname: "/" }}>
                    <MenuItem
                      className={classes.menuItem}
                      onClick={handleClose}
                    >
                      <div style={{ display: "block" }}>
                        <div style={{ fontWeight: "bold" }}>
                          {"VegetableMeat"}
                        </div>
                        <div style={{ fontSize: "12px" }}>
                          @{"vegetable_meat"}
                        </div>
                      </div>
                    </MenuItem>
                  </Link>
                  <div className={classes.menuBorder} />
                  <Link href={{ pathname: "/" }}>
                    <MenuItem
                      className={classes.menuItem}
                      onClick={handleClose}
                    >
                      <EventNote className={classes.menuIcon} />
                      Your memo
                    </MenuItem>
                  </Link>

                  <Link href={{ pathname: "/" }}>
                    <MenuItem
                      className={classes.menuItem}
                      onClick={handleClose}
                    >
                      <Favorite className={classes.menuIcon} />
                      Your saved memo
                    </MenuItem>
                  </Link>
                  <div className={classes.menuBorder} />
                  <Link href={{ pathname: "/" }}>
                    <MenuItem
                      className={classes.menuItem}
                      onClick={handleClose}
                    >
                      <Settings className={classes.menuIcon} />
                      Settings
                    </MenuItem>
                  </Link>
                  <Link href={{ pathname: "/" }}>
                    <MenuItem
                      className={classes.menuItem}
                      onClick={handleClose}
                    >
                      <ExitToApp className={classes.menuIcon} />
                      Signout
                    </MenuItem>
                  </Link>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default UserMenu;
