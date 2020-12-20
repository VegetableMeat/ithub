import React from "react";
import TagList from "@/components/molecules/tag-list";
import AffiliationProfile from "@/components/molecules/profile/affiliation-profile";
import MiniProfile from "@/components/molecules/profile/mini-profile";
import type { User } from "@/models/user/entity";
import { Tag } from "@/models/tag/entity";
import styles from "./style.module.css";

type Props = {
	user: User;
	tags: Tag[];
	noneHeader?: boolean;
};

const Sidebar: React.FC<Props> = (props) => {
	const { user, tags, noneHeader } = props;
	return (
		<aside className={styles.aside}>
			<AffiliationProfile />
			<TagList tags={tags} />
			<MiniProfile />
		</aside>
	);
};

export default Sidebar;
