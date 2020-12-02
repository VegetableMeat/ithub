import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/organisms/layout";
import FollowList from "@/components/organisms/follow-list";
import Sidebar from "@/components/organisms/sidebar";
import styles from "./style.module.css";

import userData from "@/fixtures/user.json";
import followData from "@/fixtures/follow.json";
import tagData from "@/fixtures/tag.json";

const Follows: React.FC = () => {
	const router = useRouter();
	const { user } = router.query;
	return (
		<Layout title={user}>
			<div className={styles.followsContainer}>
				<main className={styles.followListContainer}>
					<FollowList
						displayText={"フォロー中"}
						userData={userData}
						followData={followData}
					/>
				</main>
				<Sidebar userData={userData} tagData={tagData} />
			</div>
		</Layout>
	);
};

export default Follows;
