import React from "react";
import {
  ClickAwayListener,
  Grow,
  IconButton,
  InputBase,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useStyles } from "./material";
import styles from "./style.module.css";
import { useRouter } from "next/router";

const SearchField: React.FC = () => {
  const router = useRouter();
  const classes = useStyles();
  // const [open, setOpen] = React.useState<boolean>(false);
  // const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [query, setQuery] = React.useState<string | string[]>(
    router.query.q || ""
  );

  const handleSearch = (key: string = "Enter") => {
    if (key === "Enter" && query !== "") {
      router.push({ pathname: "/search", query: { q: query } });
    } else {
      return;
    }
  };

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event: React.MouseEvent<EventTarget>) => {
  //   if (
  //     anchorRef.current &&
  //     anchorRef.current.contains(event.target as HTMLElement)
  //   ) {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // const prevOpen = React.useRef(open);
  // React.useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current!.focus();
  //   }

  //   prevOpen.current = open;
  // }, [open]);

  const test = [
    { title: "The Shawshank Redemption" },
    { title: "The Shawshank Redemption2" },
  ];
  return (
    <div className={styles.searchFieldWrapper}>
      <IconButton
        className={classes.iconButton}
        aria-label="menu"
        onClick={() => handleSearch()}
        children={<Search className={classes.searchIcon} />}
      />
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
        value={query}
        // onClick={handleOpen}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyPress={(e) => {
          handleSearch(e.key);
        }}
        spellCheck={false}
      />
      {/* <Popper
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
                  style={{
                    outline: "none",
                  }}
                >
                  <MenuItem className={classes.menuItem} onClick={handleClose}>
                    <div style={{ display: "block" }}>
                      <div style={{ fontWeight: "bold" }}>
                        {"VegetableMeat"}
                      </div>
                      <div style={{ fontSize: "12px" }}>
                        @{"vegetable_meat"}
                      </div>
                    </div>
                  </MenuItem>

                  <div className={classes.menuBorder} />

                  <MenuItem className={classes.menuItem} onClick={handleClose}>
                    Your memo
                  </MenuItem>

                  <MenuItem className={classes.menuItem} onClick={handleClose}>
                    Your saved memo
                  </MenuItem>

                  <div className={classes.menuBorder} />

                  <MenuItem className={classes.menuItem} onClick={handleClose}>
                    Settings
                  </MenuItem>

                  <MenuItem className={classes.menuItem} onClick={handleClose}>
                    Signout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper> */}
    </div>
  );
};

export default SearchField;
