import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { User } from "@/models/user/entity";

import Avatar from "react-avatar";
import Button from "@material-ui/core/Button";
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
				<Link href={`/users/${followData.user_id}`}>
					<Avatar
						className={classes.avatar}
						alt={followData.name}
						src={followData.icon_link}
						round={true}
						size='35px'
					/>
				</Link>

				<Link href={`/users/${followData.user_id}`}>
					<div className={styles.userNameWrapper}>
						<p className={styles.userName}>{followData.name}</p>
					</div>
				</Link>
				<Link href={`/users/${followData.user_id}`}>
					<p className={styles.userID}>@{followData.user_id}</p>
				</Link>
				<p className={styles.userText}>{followData.user_text}</p>

				<div className={styles.buttonWrapper}>
					<Button
						style={{
							borderColor: "var(--accent-color)",
							marginBottom: "2px",
							padding: "1px 0 1px 0",
							textTransform: "none",
							color: "var(--accent-color)",
							fontSize: "12px",
							minWidth: "0",
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
