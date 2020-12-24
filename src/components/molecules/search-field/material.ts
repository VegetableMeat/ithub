import { makeStyles } from "@material-ui/styles";

export const useStyles = () => {
  const useStyles = makeStyles(() => ({
    // searchPaper: {
    //   padding: "2px 4px",
    //   display: "flex",
    //   alignItems: "center",
    //   width: "auto",
    //   height: "35px",
    //   borderColor: "var(--header-paper-border-color);",
    //   backgroundColor: "var(--header-paper-background-color);",
    // },
    iconButton: {
      width: "30px",
      height: "30px",
      padding: "10px",
      marginLeft: "2px",
      marginRight: "2px",
    },
    searchIcon: {
      width: "20px",
      height: "20px",
      color: "var(--accent-color);",
      cursor: "pointer",
      "&:hover": {
        color: "var(--button-hover-color);",
      },
    },
    input: {
      flex: 1,
      fontSize: "11px",
      color: "var(--placeholder-color);",
    },
    menuBorder: {
      height: "0",
      borderTop: "solid 1px var(--header-paper-border-color);",
      margin: "6px 0",
    },
    popper: {
      width: "calc(100% - 60px)",
      transform: "none !important",
      top: "33px !important",
      left: "30px !important",
    },
    menuPaper: {
      borderColor: "var(--header-paper-border-color);",
      backgroundColor: "var(--header-paper-background-color);",
      borderRadius: "0px",
    },
    menuItem: {
      transition: "none",
      backgroundColor: "transparent",
      fontSize: "14px",
      color: "var(--header-menu-text-color);",
      paddingLeft: "10px",
      paddingRight: "12px",
      "&:first-child": {
        backgroundColor: "transparent",
      },
      "&:hover": {
        transition: "none",
        color: "#FFF",
        backgroundColor: "var(--header-menu-hover-background-color);",
      },
    },
    menuIcon: {
      width: "15px",
      height: "15px",
      color: "currentColor",
      marginRight: "6px",
    },
  }));

  return useStyles();
};
