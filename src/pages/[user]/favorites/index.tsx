import React from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Error from "next/error";
import useSWR from "swr";
import MediaQuery from "react-responsive";
import Layout from "@/components/organisms/layout";
import ProfileHeader from "@/components/molecules/profile/profile-header";
import MemoList from "@/components/organisms/memo-list";
import Sidebar from "@/components/organisms/sidebar";
import CreateIcon from "@material-ui/icons/Create";
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

const Favorites = (props: ServerSideProps) => {
	const router = useRouter();
	const { user } = router.query;
	const initialData = props.initialUserData;

	const { data, error } = useSWR(`${API_URL}/users/${user}`, fetcher, {
		initialData,
	});

	if (error) return <Error statusCode={500} />;
	if (!data) return <p>Loading</p>;

	return (
		<Layout title={data.user_id}>
			<div className={styles.userContainer}>
				<ProfileHeader user={data} />
				<main className={styles.folderListContainer}>
					<div className={styles.memoHeadWrapper}>
						<div className={styles.memoTextWrapper}>
							<CreateIcon
								style={{
									fontSize: "30px",
									color: "#3E2924",
									marginRight: "5px",
								}}
							/>
							<h1 className={styles.memoText}>いいねしたノート</h1>
						</div>
					</div>
					<MemoList tab={""} userID={data.user_id} />
				</main>
				<MediaQuery query='(min-width: 771px)'>
					<Sidebar tags={data.follow_tags} user={data} />
				</MediaQuery>
			</div>
		</Layout>
	);
};

export default Favorites;
