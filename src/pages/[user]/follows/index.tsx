import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "@/components/organisms/layout";
import FollowContainer from "@/components/organisms/follow/follow-container";
import Sidebar from "@/components/organisms/sidebar";
import { User } from "@/models/user/entity";
import { API_URL } from "@/libs/api";
import styles from "./style.module.css";

const Follows: React.FC = () => {
	const router = useRouter();
	const userID = router.query.user;
	if (!userID) {
		return null;
	}
	const follows = useSWR<User[], Error>(`${API_URL}/users/${userID}/follows`);
	const user = useSWR<User, Error>(`${API_URL}/users/${userID}`);
	return (
		<Layout title={userID}>
			<div className={styles.followsContainer}>
				<main className={styles.followListContainer}>
					<FollowContainer
						displayText={"フォロー中"}
						follows={follows}
						userID={userID as string}
					/>
				</main>
				<Sidebar user={user} userID={userID as string} />
			</div>
		</Layout>
	);
};

export default Follows;
