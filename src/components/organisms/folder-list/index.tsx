import React from "react";
import Error from "next/error";
import useSWR from "swr";
import Folder from "@/components/molecules/folder";
import Loading from "@/components/molecules/loading";
import { Folder as FolderEntity } from "@/models/folder/entity";
import { API_URL } from "@/libs/api";
import styles from "./style.module.css";

type Props = {
	userID: string;
};

const FolderContainer: React.FC<Props> = (props: Props) => {
	const { userID } = props;
	const { data, error } = useSWR<FolderEntity[], Error>(
		`${API_URL}/users/${userID}/folders`
	);

	if (error) return <Error statusCode={500} />;
	if (!data) return <Loading />;

	return (
		<div className={styles.folderContainer}>
			{data.length ? (
				<div className={styles.folderWrapper}>
					{data.map((folder) => (
						<Folder
							key={folder.id}
							iconUrl={folder.icon}
							folderName={folder.name}
						/>
					))}
				</div>
			) : (
				<div className={styles.noneFolderText}>
					<p>投稿はありません</p>
				</div>
			)}
		</div>
	);
};

export default FolderContainer;
