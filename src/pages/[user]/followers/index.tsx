import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "@/components/organisms/layout";
import FollowContainer from "@/components/organisms/follow/follow-container";
import Sidebar from "@/components/organisms/sidebar";
import { User } from "@/models/user/entity";
import { API_URL } from "@/libs/api";
import styles from "./style.module.css";

const Followers: React.FC = () => {
	const router = useRouter();
	const userID = router.query.user;
	if (!userID) {
		return null;
	}
	const folowers = useSWR<User[], Error>(
		`${API_URL}/users/${userID}/followers`
	);
	const user = useSWR<User, Error>(`${API_URL}/users/${userID}`);
	return (
		<Layout title={userID}>
			<div className={styles.followsContainer}>
				<main className={styles.followListContainer}>
					<FollowContainer
						displayText={"フォロワー"}
						follows={folowers}
						userID={userID as string}
					/>
				</main>
				<Sidebar user={user} userID={userID as string} />
			</div>
		</Layout>
	);
};

export default Followers;
