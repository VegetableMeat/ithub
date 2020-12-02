import React from "react";
import TagList from "@/components/molecules/tag-list";
import SelfProfile from "@/components/molecules/profile";
import { userData } from "@/models/user/entity";
import { tagData } from "@/models/tag/entity";
import styles from "./style.module.css";

type Props = {
	userData: userData;
	tagDatas: tagData[];
};

const Sidebar: React.FC<Props> = (props) => {
	const { userData, tagDatas } = props;
	return (
		<aside className={styles.aside}>
			<SelfProfile userData={userData} />
			<TagList tagDatas={tagDatas} />
		</aside>
	);
};

export default Sidebar;
