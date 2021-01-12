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
import { FaHashtag } from "react-icons/fa";
import { useStyles } from "./material";
import styles from "./style.module.css";
import { useRouter } from "next/router";
import { Tag as TagEntity } from "@/models/tag/entity";

type Props = {
  tags?: TagEntity[];
};

const SearchField: React.FC<Props> = (props) => {
  const { tags } = props;
  const router = useRouter();
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
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

  return (
    <div className={styles.searchFieldWrapper} ref={anchorRef}>
      <IconButton
        className={classes.iconButton}
        aria-label="menu"
        onClick={() => handleSearch()}
        children={<Search className={classes.searchIcon} />}
      />
      <InputBase
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        className={classes.input}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyPress={(e) => {
          handleSearch(e.key);
        }}
        spellCheck={false}
      />
      {tags ? (
        <IconButton
          className={classes.iconButton}
          aria-label="menu"
          onClick={handleToggle}
          children={<FaHashtag className={classes.searchIcon} />}
        />
      ) : (
        <></>
      )}

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
                  style={{
                    outline: "none",
                    padding: "0",
                    maxHeight: "165px",
                    overflow: "auto",
                  }}
                >
                  {tags ? (
                    tags.map((tag) => (
                      <MenuItem
                        key={tag.id}
                        className={classes.menuItem}
                        onClick={(e) => {
                          handleClose(e);
                          setQuery(tag.name);
                        }}
                      >
                        <FaHashtag key={tag.id} className={classes.menuIcon} />
                        {tag.name}
                      </MenuItem>
                    ))
                  ) : (
                    <></>
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default SearchField;
