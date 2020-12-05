import React from "react";
import { responseInterface } from "swr";
import TagContainer from "@/components/molecules/tag/tag-container";
import ProfileContainer from "@/components/molecules/profile-container";
import type { User } from "@/models/user/entity";
import styles from "./style.module.css";

type Props = {
	user: responseInterface<User, Error>;
	userID: string;
};

const Sidebar: React.FC<Props> = (props) => {
	const { userID } = props;
	return (
		<aside className={styles.aside}>
			<TagContainer userID={userID} />
		</aside>
	);
};

export default Sidebar;
