import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import CreateIcon from "@material-ui/icons/Create";
import Layout from "@/components/organisms/layout";
import FolderContainer from "@/components/organisms/folder/folder-container";
import MemoTabs from "@/components/organisms/memo-tabs";
import Sidebar from "@/components/organisms/sidebar";
import type { User } from "@/models/user/entity";
import type { Folder } from "@/models/folder/entity";
import { API_URL } from "@/libs/api";
import styles from "./style.module.css";

const UserIndex: React.FC = () => {
	const router = useRouter();
	const userID = router.query.user;
	if (!userID) {
		return null;
	}

	const [tabQuery, setTabQuery] = React.useState("");

	React.useEffect(() => {
		const { tab } = router.query;
		setTabQuery(tab as string);
	}, []);

	React.useEffect(() => {
		if (!tabQuery) return;
		if (tabQuery !== "tags" && tabQuery !== "new" && tabQuery !== "all") {
			router.push({ pathname: `/${userID}` });
			return;
		}
		router.push({ pathname: `/${userID}`, query: { tab: tabQuery } });
	}, [tabQuery]);

	const user = useSWR<User, Error>(`${API_URL}/users/${userID}`);
	const folders = useSWR<Folder[], Error>(`${API_URL}/users/${userID}/folders`);

	return (
		<Layout title={userID}>
			<div className={styles.userContainer}>
				<main className={styles.folderListContainer}>
					<div className={styles.memoTextWrapper}>
						<CreateIcon
							style={{
								fontSize: "30px",
								color: "#3E2924",
								marginRight: "5px",
							}}
						/>
						<h1 className={styles.memoText}>Post</h1>
					</div>
					<MemoTabs
						handleChange={(selectTab: string) => {
							setTabQuery(selectTab);
						}}
					/>
					{(() => {
						switch (tabQuery) {
							case "new":
								return null;
							case "all":
								return null;
							default:
								return <FolderContainer folders={folders} />;
						}
					})()}
				</main>
				<Sidebar user={user} userID={userID as string} />
			</div>
		</Layout>
	);
};

export default UserIndex;
