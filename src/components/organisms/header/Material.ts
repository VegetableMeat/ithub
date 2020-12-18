import { makeStyles } from "@material-ui/styles";

export const useStyles = () => {
  const useStyles = makeStyles(() => ({
    button: {
      textTransform: "none",
      width: "100%",
      height: "35px",
      color: "var(--header-button-text-color);",
      backgroundColor: "var(--accent-color);",
      "&:hover": {
        backgroundColor: "var(--button-hover-color);",
      },
    },
    searchButton: {
      width: "30px",
      height: "30px",
      color: "var(--accent-color);",
      "&:hover": {
        cursor: "pointer",
        color: "var(--button-hover-color);",
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
    avatarButton: {
      margin: "0 5px",
      padding: "0",
      border: "0",
      outline: "none",
      width: "35px",
      height: "35px",
      borderRadius: "50%",
    },
    popper: {
      paddingTop: "8px",
      width: "auto",
      transform: "none !important",
      top: "30px !important",
      left: "-120px !important",
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
    menuPaper: {
      borderColor: "var(--header-paper-border-color);",
      backgroundColor: "var(--header-paper-background-color);",
    },
    menuIcon: {
      width: "20px",
      height: "20px",
      color: "currentColor",
      marginRight: "6px",
    },
    menuBorder: {
      height: "0",
      borderTop: "solid 1px var(--header-paper-border-color);",
      margin: "6px 0",
    },

    searchPaper: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "auto",
      height: "35px",
      borderColor: "var(--header-paper-border-color);",
      backgroundColor: "var(--header-paper-background-color);",
    },
    input: {
      flex: 1,
      fontSize: "11px",
      color: "var(--placeholder-color);",
    },
    iconButton: {
      width: "30px",
      height: "30px",
      padding: "10px",
    },
    divider: {
      height: "28px",
      margin: "4px",
    },
    searchIcon: {
      width: "20px",
      height: "20px",
      color: "var(--accent-color);",
      "&:hover": {
        cursor: "pointer",
        color: "var(--button-hover-color);",
      },
    },
  }));

  return useStyles();
};
