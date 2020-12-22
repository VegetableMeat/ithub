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
    divider: {
      height: "28px",
      margin: "4px",
    },
    clearButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "var(--accent-color)",
      width: "30px",
      height: "30px",
      padding: "0",
      margin: "auto 0 auto 10px",
    },
  }));

  return useStyles();
};
