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
