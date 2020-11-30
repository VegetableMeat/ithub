import React from "react";
import Image from "next/image";
import { Avatar } from "@material-ui/core";
import { FavoriteBorder } from "@material-ui/icons";
import style from "./style.module.css";

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
    <div className={style.memoCard}>
      <div className={style.langImageWrapper}>
        <Image
          className={style.langImage}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </div>
      <div className={style.memo}>
        <b>
          <span className={style.title}>{memo.title}</span>
        </b>
        <div className={style.writer}>
          <Avatar className={style.writerIcon}>{memo.icon}</Avatar>
          <span className={style.writerName}>{memo.user_name}</span>
          <span className={style.writerId}>@{memo.user_id}</span>
          <span className={style.date}>{memo.update_time}</span>
        </div>
        <div className={style.favorite}>
          <FavoriteBorder />
          <span>{memo.favorite}</span>
        </div>
      </div>
    </div>
  );
};

export default Memo;
