import React from "react";
import { responseInterface } from "swr";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import FollowList from "@/components/organisms/follow/follow-list";
import { User } from "@/models/user/entity";
import { API_ERROR_MESSAGE } from "@/constants/messages";
import styles from "./style.module.css";

type Props = {
	displayText: "フォロー中" | "フォロワー";
	follows: responseInterface<User[], Error>;
	userID: string;
};

const FollowContainer: React.FC<Props> = (props: Props) => {
	const { displayText, follows, userID } = props;
	const { data, error } = follows;
	return (
		<>
			<div className={styles.followTextWrapper}>
				<PermIdentityIcon
					style={{
						fontSize: "30px",
						color: "#3E2924",
						marginRight: "5px",
					}}
				/>
				<h1 className={styles.followText}>{displayText}</h1>
			</div>
			{!error ? (
				<FollowList follows={data} displayText={displayText} userID={userID} />
			) : (
				<div className={styles.followErrorMessage}>
					<p>{API_ERROR_MESSAGE}</p>
				</div>
			)}
		</>
	);
};

export default FollowContainer;
