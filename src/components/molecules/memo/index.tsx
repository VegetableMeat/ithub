import React from "react";
import { Avatar } from "@material-ui/core";
import { FavoriteBorder } from "@material-ui/icons";
import { Memo as Memo_entity } from "@/models/top/memo/entity";
import Svg from "@/components/atoms/svg";
import styles from "./style.module.css";

type Props = {
  memos: Memo_entity;
};

const Memo: React.FC<Props> = (props) => {
  const { memos } = props;
  const { image, memo } = memos;

  return (
    <article className={styles.memoItemContainer}>
      <div className={styles.langImage}>
        <Svg image={image} />
      </div>
      <div className={styles.memoItemContent}>
        <b>
          <a className={styles.link}>{memo.title}</a>
        </b>
        <div className={styles.writer}>
          <Avatar className={styles.writerIcon}>{memo.icon}</Avatar>
          <span className={styles.writerName}>
            {memo.user_name}
            <div className={styles.writerId}>@{memo.user_id}</div>
          </span>
          <span className={styles.date}>{memo.update_time}</span>
          <div className={styles.favorite}>
            <FavoriteBorder />
            <div className={styles.favoriteNum}>{memo.favorite}</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Memo;
