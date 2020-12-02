import React from "react";
import Avatar from "react-avatar";
import Button from "@material-ui/core/Button";
import Text from "@/components/atoms/text";
import { userData } from "@/models/user/entity";
import styles from "./style.module.css";

type Props = {
	followData: userData;
};

const Follow: React.FC<Props> = (props: Props) => {
	const { followData } = props;
	return (
		<>
			<div className={styles.follow}>
				<Avatar
					className={styles.avatar}
					alt={followData.name}
					src='https://avatars2.githubusercontent.com/u/52918714?v=4'
					round={true}
					size='45px'
				/>

				<Text className={styles.userName}>{followData.name}</Text>
				<Text className={styles.userID}>@{followData.user_id}</Text>
				<Text className={styles.userText}>{followData.user_text}</Text>

				<div className={styles.buttonWrapper}>
					<Button
						style={{
							borderColor: "#3E2924",
							marginBottom: "2px",
						}}
						variant='outlined'
					>
						フォロー
					</Button>
				</div>
			</div>
			<p className={styles.line} />
		</>
	);
};

export default Follow;
