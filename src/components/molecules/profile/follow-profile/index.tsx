import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

import styles from "./style.module.css";

const useStyles = makeStyles(() => ({
	avatar: {
		"&:hover": {},
	},
	blueButton: {
		borderColor: "#64B9DE",
		color: "#64B9DE",
		maxWidth: "500px",
		width: "100%",
		marginBottom: "5px",
		textTransform: "none",
	},
	brownButton: {
		borderColor: "#3E2924",
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
				href={`/${userID}/follows`}
			>
				15 フォロー
			</Button>
			<Button
				className={classes.blueButton}
				variant='outlined'
				href={`/${userID}/followers`}
			>
				0 フォロワー
			</Button>

			<p className={styles.line} />

			<Button
				className={classes.brownButton}
				variant='outlined'
				href={`/${userID}/favorite`}
			>
				0 いいねノート
			</Button>
		</div>
	);
};

export default FollowProfile;