import React from "react";
import { useRouter } from "next/router";
import Avatar from "react-avatar";
import Button from "@material-ui/core/Button";
import PermIdentityTwoToneIcon from "@material-ui/icons/PermIdentityTwoTone";
import Layout from "@/components/organisms/layout";
import Sidebar from "@/components/organisms/sidebar";
import Text from "@/components/atoms/text";
import styles from "./style.module.css";

import folderData from "@/fixtures/folder.json";
import userData from "@/fixtures/user.json";
import tagData from "@/fixtures/tag.json";

const Follows: React.FC = () => {
	const router = useRouter();
	const { user } = router.query;
	return (
		<Layout title={user}>
			<main className={styles.followsContainer}>
				<article className={styles.followListContainer}>
					<div className={styles.followTextWrapper}>
						<PermIdentityTwoToneIcon
							style={{
								fontSize: "30px",
								color: "#3E2924",
								marginRight: "5px",
							}}
						/>
						<h1 className={styles.followText}>フォロー中</h1>
					</div>

					<div className={styles.follow}>
						<Avatar
							className={styles.avatar}
							alt={userData.name}
							src='https://avatars2.githubusercontent.com/u/52918714?v=4'
							round={true}
							size='45px'
						/>
						<Text className={styles.userName}>happy boy2</Text>
						<Text className={styles.userID}>@taniwhy</Text>
						<Text className={styles.userText}>よろしくお願いいたします</Text>
						<div className={styles.buttonWrapper}>
							<Button
								style={{
									borderColor: "#3E2924",
									marginBottom: "2px",
								}}
								variant='outlined'
							>
								フォロー解除
							</Button>
						</div>
					</div>

					<p className={styles.line} />

					<div className={styles.follow}>
						<Avatar
							className={styles.avatar}
							alt={userData.name}
							src='https://avatars2.githubusercontent.com/u/52918714?v=4'
							round={true}
							size='45px'
						/>
						<Text className={styles.userName}>happy boy2</Text>
						<Text className={styles.userID}>@taniwhy</Text>
						<Text className={styles.userText}>よろしくお願いいたします</Text>
						<div className={styles.buttonWrapper}>
							<Button
								style={{
									borderColor: "#3E2924",
									marginBottom: "2px",
								}}
								variant='outlined'
							>
								フォロー解除
							</Button>
						</div>
					</div>
					<p className={styles.line} />
					<div className={styles.follow}>
						<Avatar
							className={styles.avatar}
							alt={userData.name}
							src='https://avatars2.githubusercontent.com/u/52918714?v=4'
							round={true}
							size='45px'
						/>
						<Text className={styles.userName}>happy boy2</Text>
						<Text className={styles.userID}>@taniwhy</Text>
						<Text className={styles.userText}>
							ssssssssssaslkjfdhsakfhklsafhklsjadfhくお願いいたします
						</Text>
						<div className={styles.buttonWrapper}>
							<Button
								style={{
									borderColor: "#3E2924",
									marginBottom: "2px",
								}}
								variant='outlined'
							>
								フォロー解除
							</Button>
						</div>
					</div>
					<p className={styles.line} />
				</article>
				<Sidebar userData={userData} tagData={tagData} />
			</main>
		</Layout>
	);
};

export default Follows;
