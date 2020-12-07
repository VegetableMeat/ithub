import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import MediaQuery from "react-responsive";
import Layout from "@/components/organisms/layout";
import ProfileHeader from "@/components/molecules/profile/profile-header";
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
	const followers = useSWR<User[], Error>(
		`${API_URL}/users/${userID}/followers`
	);
	const user = useSWR<User, Error>(`${API_URL}/users/${userID}`);

	return (
		<Layout title={userID}>
			<div className={styles.followsContainer}>
				<ProfileHeader user={user} />
				<main className={styles.followListContainer}>
					<FollowContainer
						displayText={"フォロワー"}
						follows={followers}
						userID={userID as string}
					/>
				</main>
				<MediaQuery query='(min-width: 771px)'>
					<Sidebar user={user} userID={userID as string} />
				</MediaQuery>
			</div>
		</Layout>
	);
};

export default Follows;
