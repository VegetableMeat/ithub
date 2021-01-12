import React from "react";
import Link from "next/link";
import { Avatar } from "@material-ui/core";
import { FavoriteBorder } from "@material-ui/icons";
import { Memo as Memo_entity } from "@/models/memo/entity";
import styles from "./style.module.css";
import { FaRegComment } from "react-icons/fa";

type Props = {
  memos: Memo_entity;
};

const Memo: React.FC<Props> = (props) => {
  const { memos } = props;
  const  { user, tags }  = memos;

  return (
    <article className={styles.memoItemContainer}>
      <div className={styles.memoItemContent}>
        <div>
          <div className={styles.writer}>
            <Link href={{ pathname: `/${user.user_id}` }}>
              <Avatar className={styles.writerIcon} src={user.icon_link} />
            </Link>
            <Link href={{ pathname: `/${user.user_id}` }}>
              <span className={styles.writerName}>
                <div style={{ display: "flex" }}>
                  {user.name}
                  {/* <div className={styles.writerId}>@{user.user_id}</div> */}
                </div>
              </span>
            </Link>
            <span className={styles.date}>{memos.created_at}</span>
          </div>
          <Link href={{ pathname: "/" }}>
            <div className={styles.title}>
              <b>{memos.memo_title}</b>
            </div>
          </Link>
        </div>
        <div className={styles.tags}>
          {/* {tags.length ? tags.map((tag) => {

          }) : ()} */}
        </div>
        <div className={styles.memoInfo}>
          <div className={styles.favorite}>
            <FavoriteBorder style={{ width: "18px", height: "18px" }} />
            <div className={styles.favoriteCount}>{memos.favorite_count}</div>
          </div>
          <div className={styles.comment}>
            <FaRegComment style={{ width: "16px", height: "16px" }} />
            <div className={styles.commentCount}>{memos.comment_count}</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Memo;
