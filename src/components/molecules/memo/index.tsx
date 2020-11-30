import React from "react";
import Image from "next/image";
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
    user_id: number;
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
      <div className={style.contents}>
        <div className={style.langImageWrapper}>
          <Image
            className={style.langImage}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </div>
        <div className={style.text}>
          <span className={style.title}>{memo.title}</span>
        </div>
      </div>
    </div>
  );
};

export default Memo;
