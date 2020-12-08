import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import * as ROUTES from "@/constants/routes";
import styles from "./style.module.css";

const useStyles = makeStyles(() => ({
	avatar: {
		"&:hover": {},
	},
	blueButton: {
		borderColor: "var(--accent-color)",
		color: "var(--accent-color)",
		maxWidth: "500px",
		width: "100%",
		marginBottom: "5px",
		textTransform: "none",
	},
	brownButton: {
		borderColor: "var(--base-color)",
		color: "var(--sub-button-color)",
		maxWidth: "500px",
		width: "100%",
	},
}));

type Props = {
	userID: string;
};

const FollowProfile: React.FC<Props> = (props: Props) => {
	const { userID } = props;
	const classes = useStyles();
	return (
		<div className={styles.followProfileContainer}>
			<Button
				className={classes.blueButton}
				variant='outlined'
				href={`/${userID}${ROUTES.FOLLOW}`}
			>
				15 フォロー
			</Button>
			<Button
				className={classes.blueButton}
				variant='outlined'
				href={`/${userID}${ROUTES.FOLLOWER}`}
			>
				0 フォロワー
			</Button>

			<p className={styles.line} />

			<Button
				className={classes.brownButton}
				variant='outlined'
				href={`/${userID}${ROUTES.FAVORITES}`}
			>
				0 いいねノート
			</Button>
		</div>
	);
};

export default FollowProfile;
