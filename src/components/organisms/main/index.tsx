import React from "react";
import style from "./style.module.css";

type Props = {
  children: React.ReactNode;
};

const Main: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className={style.mainWrapper}>
      <div className={style.main}>{children}</div>
    </div>
  );
};

export default Main;
