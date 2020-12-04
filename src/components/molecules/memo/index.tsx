import React from "react";
import Image from "next/image";
import { Avatar } from "@material-ui/core";
import { FavoriteBorder } from "@material-ui/icons";
import styles from "./style.module.css";

type Props = {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  memo: {
    title: string;
    icon: string;
    user_name: string;
    user_id: string;
    update_time: string;
    favorite: number;
  };
};

/**
 * 渡されたデータを元に備忘録のタイトルと使用されている技術の画像
 * 及び著者名などの情報を持ったコンポーネントを提供します。
 * 渡すパラメータは上の type Props を参照してください。
 */

const Memo: React.FC<Props> = (props) => {
  const { image, memo } = props;
  return (
    <div className={styles.memoCard}>
      <div className={styles.langImageWrapper}>
        <Image
          className={styles.langImage}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </div>
      <div className={styles.memo}>
        <b>
          <span className={styles.title}>{memo.title}</span>
        </b>
        <div className={styles.writer}>
          <Avatar className={styles.writerIcon}>{memo.icon}</Avatar>
          <span className={styles.writerName}>{memo.user_name}</span>
          <span className={styles.writerId}>@{memo.user_id}</span>
          <span className={styles.date}>{memo.update_time}</span>
        </div>
        <div className={styles.favorite}>
          <FavoriteBorder />
          <span>{memo.favorite}</span>
        </div>
      </div>
    </div>
  );
};

export default Memo;
