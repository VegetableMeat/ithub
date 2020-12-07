import React from "react";
import Image from "next/image";
import { Avatar } from "@material-ui/core";
import { FavoriteBorder } from "@material-ui/icons";
import { Memo as Memo_entity } from "@/models/top/memo/entity";
import styles from "./style.module.css";

type Props = {
  memos: Memo_entity;
};

const Memo: React.FC<Props> = (props) => {
  const { memos } = props;
  const { image, memo } = memos;
  return (
    <>
      <Memo />
    </>
  );
};

export default Memo;
