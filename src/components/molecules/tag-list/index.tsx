import React from "react";
import Button from "@material-ui/core/Button";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { tagData } from "@/models/tag/entity";
import styles from "./style.module.css";

type Props = {
	tagDatas: tagData[];
};

const TagList: React.FC<Props> = (props: Props) => {
	const { tagDatas } = props;
	return (
		<div className={styles.tagContainer}>
			<LocalOfferIcon style={{ color: "#3E2924", marginRight: "5px" }} />
			<span className={styles.tagText}>登録しているタグ</span>
			{tagDatas.length ? (
				<div className={styles.tagWrapper}>
					{tagDatas.map((tagData) => (
						<Button
							key={tagData.id}
							style={{
								marginRight: "3px",
								marginBottom: "3px",
								color: "white",
								fontSize: "13px",
								minWidth: "0px",
								backgroundColor: "#3E2924",
								height: "20px",
								textTransform: "none",
							}}
							variant='contained'
							href={tagData.link}
						>
							{tagData.name}
						</Button>
					))}
				</div>
			) : (
				<div className={styles.noneTagText}>
					<p>登録されたタグはありません</p>
				</div>
			)}
		</div>
	);
};

export default TagList;
