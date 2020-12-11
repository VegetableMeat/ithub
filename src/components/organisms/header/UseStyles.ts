import { makeStyles } from "@material-ui/styles";

const UseStyles = () => {
  const useStyles = makeStyles(() => ({
    button: {
      textTransform: "none",
      width: "100%",
      color: "#FFF",
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
      marginTop: "8px",
      marginRight: "10px",
      width: "150px",
    },
    menuItem: {
      fontSize: "14px",
      "&:first-child": {
        backgroundColor: "#FFF",
      },
      "&:hover": {
        color: "#FFF",
        backgroundColor: "var(--accent-color);",
      },
    },
  }));

  return useStyles();
};

export default UseStyles;
