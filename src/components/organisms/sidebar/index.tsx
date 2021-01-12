import React from "react";
import type { Tag } from "@/models/tag/entity";
import type { User } from "@/models/user/entity";

import TagList from "@/components/molecules/tag-list";
import AffiliationProfile from "@/components/molecules/profile/affiliation-profile";
import MiniProfile from "@/components/molecules/profile/mini-profile";
import styles from "./style.module.css";

type Props = {
	tags: Tag[];
	user: User;
};

const Sidebar: React.FC<Props> = (props) => {
	const { tags, user } = props;
	return (
		<aside className={styles.aside}>
			<AffiliationProfile />
			{tags && <TagList tags={tags} />}
			<MiniProfile user={user} />
		</aside>
	);
};

export default Sidebar;
