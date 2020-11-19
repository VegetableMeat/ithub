import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { Button as MaterialBtn } from "@material-ui/core";
import styles from "./button.module.css";

const Button = ({
  style = `${styles.default} ${styles.label}`,
  text = "無し",
  btnFunc = () => {},
}) => {
  return (
    <StylesProvider injectFirst>
      <MaterialBtn className={style} onClick={() => btnFunc()}>
        {text}
      </MaterialBtn>
    </StylesProvider>
  );
};

export default Button;
