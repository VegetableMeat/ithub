import React from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useToggleTheme } from "@/context/theme";
import Error from "next/error";
import useSWR from "swr";
import MediaQuery from "react-responsive";
import Layout from "@/components/organisms/layout";
import ProfileHeader from "@/components/molecules/profile/profile-header";
import FolderList from "@/components/organisms/folder-list";
import MemoList from "@/components/organisms/memo-list";
import MemoTabs from "@/components/organisms/memo-tabs";
import Sidebar from "@/components/organisms/sidebar";
import Loading from "@/components/molecules/loading";
import { GoChevronDown } from "react-icons/go";
import { fetcher } from "@/libs/fetcher";
import { API_URL } from "@/libs/api";
import type { User } from "@/models/user/entity";
import styles from "./style.module.css";

export interface ServerSideProps {
	initialUserData: User;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const initialUserData = await fetcher(`${API_URL}/users/${params.user}`);
	return { props: { initialUserData } };
};

const UserIndex = (props: ServerSideProps) => {
	const router = useRouter();
	const { user } = router.query;
	const initialData = props.initialUserData;

	const { data, error } = useSWR(`${API_URL}/users/${user}`, fetcher, {
		initialData,
	});

	if (error) return <Error statusCode={500} />;
	if (!data) return <Loading />;

	const { toggleTheme } = useToggleTheme();

	return (
		<Layout title={data.user_id}>
			<button onClick={toggleTheme}>Toggle Theme</button>
			<div className={styles.userContainer}>
				<ProfileHeader user={data} />
				<main className={styles.folderListContainer}>
					<div className={styles.memoHeadWrapper}>
						<div className={styles.memoTextWrapper}>
							<GoChevronDown
								style={{
									fontSize: "28px",
									color: "var(--base-color)",
									marginRight: "5px",
								}}
							/>
							<h1 className={styles.memoText}>{"いいね"}</h1>
						</div>
					</div>
					<MemoList tab={"new"} userID={data.user_id} />
				</main>
				<MediaQuery query='(min-width: 771px)'>
					<Sidebar tags={data.follow_tags} user={data} />
				</MediaQuery>
			</div>
		</Layout>
	);
};

export default UserIndex;
