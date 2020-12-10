import React from "react";
import { Avatar } from "@material-ui/core";
import { FavoriteBorder } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { Memo as Memo_entity } from "@/models/top/memo/entity";
import styles from "./style.module.css";

type Props = {
  memos: Memo_entity;
};

const Memo: React.FC<Props> = (props) => {
  const { memos } = props;
  const { image, memo } = memos;
  const useStyles = makeStyles(() => ({
    langImage: {
      width: image.width,
      height: image.height,
      borderRadius: "0",
    },
  }));
  const classes = useStyles();

  return (
    <div className={styles.memoCard}>
      <div className={styles.langImageWrapper}>
        <Avatar className={classes.langImage} src={image.src} />
      </div>
      <div className={styles.memo}>
        <b>
          <span className={styles.title}>{memo.title}</span>
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
            {memo.favorite}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memo;
