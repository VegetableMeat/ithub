import React from "react";
import { Tag } from "@/models/tag/entity";

import TagList from "@/components/molecules/tag-list";
import AffiliationProfile from "@/components/molecules/profile/affiliation-profile";
import MiniProfile from "@/components/molecules/profile/mini-profile";
import styles from "./style.module.css";

type Props = {
	tags: Tag[];
};

const Sidebar: React.FC<Props> = (props) => {
	const { tags } = props;
	return (
		<aside className={styles.aside}>
			<AffiliationProfile />
			{tags && <TagList tags={tags} />}
			<MiniProfile />
		</aside>
	);
};

export default Sidebar;
