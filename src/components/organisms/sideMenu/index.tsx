import React from "react";
import style from "./style.module.css"

type Props = {
  children: React.ReactNode;
}

const SideMenu: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className={style.sideMenu}>{children}</div>
  );
}

export default SideMenu;