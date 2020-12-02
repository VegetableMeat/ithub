import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/organisms/layout";
import FolderList from "@/components/organisms/folder-list";
import Sidebar from "@/components/organisms/sidebar";
import styles from "./style.module.css";

import folderData from "@/fixtures/folder.json";
import userData from "@/fixtures/user.json";
import tagData from "@/fixtures/tag.json";

const User: React.FC = () => {
	const router = useRouter();
	const { user } = router.query;
	return (
		<Layout title={user}>
			<div className={styles.userContainer}>
				<main className={styles.folderListContainer}>
					<FolderList folderData={folderData} />
				</main>
				<Sidebar userData={userData} tagData={tagData} />
			</div>
		</Layout>
	);
};

export default User;
