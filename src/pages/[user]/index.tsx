import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import MediaQuery from "react-responsive";
import CreateIcon from "@material-ui/icons/Create";
import Layout from "@/components/organisms/layout";
import ProfileHeader from "@/components/molecules/profile/profile-header";
import FolderContainer from "@/components/organisms/folder/folder-container";
import MemoTabs from "@/components/organisms/memo-tabs";
import Sidebar from "@/components/organisms/sidebar";
import type { User } from "@/models/user/entity";
import type { Folder } from "@/models/folder/entity";
import { API_URL } from "@/libs/api";
import styles from "./style.module.css";

const UserIndex: React.FC = () => {
	const router = useRouter();
	const { user, tab } = router.query;
	if (!user) return null;

	const [tabQuery, setTabQuery] = React.useState(tab as string);

	const userRes = useSWR<User, Error>(`${API_URL}/users/${user}`);
	const folders = useSWR<Folder[], Error>(`${API_URL}/users/${user}/folders`);

	React.useEffect(() => {
		if (!tabQuery) return;
		if (tabQuery !== "tags" && tabQuery !== "new" && tabQuery !== "all") {
			router.push({ pathname: `/${user}` });
			return;
		}
		router.push({ pathname: `/${user}`, query: { tab: tabQuery } });
	}, [tabQuery]);

	return (
		<Layout title={user}>
			<div className={styles.userContainer}>
				<ProfileHeader user={userRes} />
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
					{tabQuery === "tags" || tabQuery === undefined ? (
						<FolderContainer folders={folders} />
					) : (
						<></>
					)}
				</main>
				<MediaQuery query='(min-width: 771px)'>
					<Sidebar user={userRes} userID={user as string} />
				</MediaQuery>
			</div>
		</Layout>
	);
};

export default UserIndex;
