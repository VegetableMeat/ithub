import React from "react";
import Error from "next/error";
import useSWR from "swr";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import Follow from "@/components/molecules/follow";
import { fetcher } from "@/libs/fetcher";
import { API_URL } from "@/libs/api";
import { User } from "@/models/user/entity";
import styles from "./style.module.css";

type Props = {
	follows: User[];
	displayText: "フォロー中" | "フォロワー";
	userID: string;
};

const FollowList: React.FC<Props> = (props: Props) => {
	const { follows, displayText, userID } = props;

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
			{follows.length ? (
				<>
					{follows.map((follow, index) => (
						<>
							<Follow followData={follow} />
							{follows.length != index + 1 && <p className={styles.line}></p>}
						</>
					))}
				</>
			) : (
				<div className={styles.noneFollowText}>
					{displayText === "フォロー中" ? (
						<p>@{userID}さんは誰もフォローしていません</p>
					) : (
						<p>@{userID}さんにはフォロワーがいません</p>
					)}
				</div>
			)}
		</>
	);
};

export default FollowList;
