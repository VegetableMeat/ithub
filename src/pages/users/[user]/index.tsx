import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Error from "next/error";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useToggleTheme } from "@/context/theme";
import { fetcher } from "@/libs/fetcher";
import { API_URL } from "@/libs/api";
import type { User } from "@/models/user/entity";

import Layout from "@/components/organisms/layout";
import ProfileHeader from "@/components/molecules/profile/profile-header";
import FolderList from "@/components/organisms/folder-list";
import MemoList from "@/components/organisms/memo-list";
import MemoTabs from "@/components/organisms/memo-tabs";
import Sidebar from "@/components/organisms/sidebar";
import Loading from "@/components/molecules/loading";
import MediaQuery from "react-responsive";
import { GoChevronDown } from "react-icons/go";
import { AiFillFolderOpen } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";
import styles from "@/styles/UserIndex.module.css";

export interface ServerSideProps {
	initialUserData: User;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	if (!params) return;
	const initialUserData = await fetcher(
		`http://localhost:8000/v1/users/${params.user}`
	);
	return { props: { initialUserData } };
};

const UserIndex = (props: ServerSideProps) => {
	const data = props.initialUserData;
	const router = useRouter();
	const { user, tab, tag } = router.query;
	const [tabQuery, setTabQuery] = React.useState<string>(tab as string);
	const { toggleTheme } = useToggleTheme();

	useEffect(() => {
		setTabQuery(tab as string);
	}, [tab]);

	useEffect(() => {
		if (!tabQuery) return;
		switch (tabQuery) {
			case "saved":
				router.push({ pathname: `/users/${user}`, query: { tab: "saved" } });
				return;
			case "new":
				router.push({ pathname: `/users/${user}`, query: { tab: "new" } });
				return;
			case "tags":
				if (tag) {
					router.push({
						pathname: `/${user}`,
						query: { tab: tabQuery, tag: tag },
					});
					return;
				}
				router.push({ pathname: `/users/${user}`, query: { tab: tabQuery } });
		}
	}, [tabQuery]);

	return (
		<Layout title={data.user_id}>
			<div className={styles.content}>
				<ProfileHeader user={data} />
				<main className={styles.mainContainer}>
					<div className={styles.mainTabWrapper}>
						<div className={styles.mainTabLeft}>
							{tag ? (
								<AiFillFolderOpen
									style={{
										fontSize: "28px",
										color: "var(--base-color)",
										marginRight: "5px",
									}}
								/>
							) : (
								<GoChevronDown
									style={{
										fontSize: "28px",
										color: "var(--base-color)",
										marginRight: "5px",
									}}
								/>
							)}

							<h1 className={styles.mainTabLeftText}>
								{tabQuery === "tags" ? (
									tag ? (
										<>
											{tag}
											<Link
												href={{
													pathname: "/users/[user]",
													query: { user: user, tab: "tags" },
												}}
											>
												<span className={styles.backButton}>
													back
													<RiArrowGoBackFill />
												</span>
											</Link>
										</>
									) : (
										"Tags"
									)
								) : tabQuery === "saved" ? (
									"Saved List"
								) : (
									"New"
								)}
							</h1>
						</div>
						<MemoTabs
							initialTab={tabQuery}
							handleChange={(selectTab: string) => {
								setTabQuery(selectTab);
							}}
						/>
					</div>
					{tabQuery === "tags" && !tag ? (
						<FolderList userID={data.user_id} />
					) : (
						<MemoList tab={tabQuery} userID={data.user_id} />
					)}
				</main>
				<MediaQuery query='(min-width: 771px)'>
					<Sidebar tags={data.follow_tags} user={data} />
				</MediaQuery>
			</div>
		</Layout>
	);
};

export default UserIndex;
