import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/organisms/layout";
import FollowList from "@/components/organisms/follow-list";
import Sidebar from "@/components/organisms/sidebar";
import styles from "./style.module.css";

import userData from "@/fixtures/user.json";
import followDatas from "@/fixtures/follow.json";
import tagDatas from "@/fixtures/tag.json";

const Followers: React.FC = () => {
	const router = useRouter();
	const { user } = router.query;
	return (
		<Layout title={user}>
			<div className={styles.followsContainer}>
				<main className={styles.followListContainer}>
					<FollowList
						displayText={"フォロワー"}
						userData={userData}
						followDatas={[]}
					/>
				</main>
				<Sidebar userData={userData} tagDatas={tagDatas} />
			</div>
		</Layout>
	);
};

export default Followers;
