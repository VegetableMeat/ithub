import React from "react";
import { GetServerSideProps } from "next";
import Error from "next/error";
import { useRouter } from "next/router";
import useSWR from "swr";
import MediaQuery from "react-responsive";
import Layout from "@/components/organisms/layout";
import ProfileHeader from "@/components/molecules/profile/profile-header";
import FollowList from "@/components/organisms/follow-list";
import Sidebar from "@/components/organisms/sidebar";
import { GoChevronDown } from "react-icons/go";
import { fetcher } from "@/libs/fetcher";
import { API_URL } from "@/libs/api";
import type { User } from "@/models/user/entity";
import styles from "./style.module.css";

export interface ServerSideProps {
	initialUserData: User;
	initialFollowsData: User[];
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const initialUserData = await fetcher(`${API_URL}/users/${params.user}`);
	const initialFollowsData = await fetcher(
		`${API_URL}/users/${params.user}/follows`
	);
	return { props: { initialUserData, initialFollowsData } };
};

const Follows = (props: ServerSideProps) => {
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
			<div className={styles.followsContainer}>
				<ProfileHeader user={data} />
				<main className={styles.followListContainer}>
					<div className={styles.followTextWrapper}>
						<GoChevronDown
							style={{
								fontSize: "28px",
								color: "var(--base-color)",
								marginRight: "5px",
							}}
						/>
						<h1 className={styles.followText}>{"Following"}</h1>
					</div>
					<FollowList
						follows={props.initialFollowsData}
						displayText={"Following"}
						userID={data.user_id}
					/>
				</main>
				<MediaQuery query='(min-width: 771px)'>
					<Sidebar tags={data.follow_tags} user={data} />
				</MediaQuery>
			</div>
		</Layout>
	);
};

export default Follows;
