import React from "react";
import Link from "next/link";
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
        <Link href={{ pathname: "/" }}>
          <div className={styles.title}>
            <b>{memo.title}</b>
          </div>
        </Link>
        <div className={styles.writer}>
          <Link href={{ pathname: `/${memo.user_id}` }}>
            <Avatar className={styles.writerIcon}>{memo.icon}</Avatar>
          </Link>
          <Link href={{ pathname: `/${memo.user_id}` }}>
            <span className={styles.writerName}>
              <div style={{ display: "flex" }}>
                {memo.user_name}
                <div className={styles.writerId}>@{memo.user_id}</div>
              </div>
            </span>
          </Link>
          <span className={styles.date}>{memo.update_time}</span>
          <div className={styles.favorite}>
            <FavoriteBorder style={{ width: "18px", height: "18px" }} />
            <div className={styles.favoriteNum}>{memo.favorite}</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Memo;
