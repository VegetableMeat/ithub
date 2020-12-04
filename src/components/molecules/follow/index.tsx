import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import Avatar from "react-avatar";
import Button from "@material-ui/core/Button";
import { User } from "@/models/user/entity";
import styles from "./style.module.css";

type Props = {
	followData: User;
};

const useStyles = makeStyles(() => ({
	avatar: {
		gridArea: "avatar",
		alignSelf: "center",
		"&:hover": {
			filter: "brightness(96%)",
		},
	},
}));

const Follow: React.FC<Props> = (props: Props) => {
	const { followData } = props;
	const classes = useStyles();
	return (
		<>
			<div className={styles.follow}>
				<Link href={`/${followData.user_id}`}>
					<Avatar
						className={classes.avatar}
						alt={followData.name}
						src='https://avatars2.githubusercontent.com/u/52918714?v=4'
						round={true}
						size='45px'
					/>
				</Link>

				<Link href={`/${followData.user_id}`}>
					<div className={styles.userNameWrapper}>
						<p className={styles.userName}>{followData.name}</p>
					</div>
				</Link>
				<Link href={`/${followData.user_id}`}>
					<p className={styles.userID}>@{followData.user_id}</p>
				</Link>
				<p className={styles.userText}>{followData.user_text}</p>

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
		</>
	);
};

export default Follow;
