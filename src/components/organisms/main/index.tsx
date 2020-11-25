import React from "react";
import style from "./style.module.css"

type Props = {
  children: React.ReactNode;
}

const Main: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className={style.main}>{children}</div>
  );
}

export default Main;