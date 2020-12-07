import React from "react";
import { responseInterface } from "swr";
import TagContainer from "@/components/molecules/tag/tag-container";
import FollowProfile from "@/components/molecules/profile/follow-profile";
import MainProfile from "@/components/molecules/profile/main-profile";
import MiniProfile from "@/components/molecules/profile/mini-profile";
import type { User } from "@/models/user/entity";
import styles from "./style.module.css";

type Props = {
	user: responseInterface<User, Error>;
	userID: string;
	noneHeader?: boolean;
};

const Sidebar: React.FC<Props> = (props) => {
	const { user, userID, noneHeader } = props;
	return (
		<aside className={styles.aside}>
			{noneHeader ? (
				<MainProfile user={user} />
			) : (
				<FollowProfile userID={userID} />
			)}
			<MiniProfile />
			<TagContainer userID={userID} />
		</aside>
	);
};

export default Sidebar;
