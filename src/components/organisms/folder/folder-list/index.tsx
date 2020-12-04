import React from "react";
import Loading from "@/components/molecules/loading";
import FolderComponent from "@/components/molecules/folder";
import { Folder } from "@/models/folder/entity";
import styles from "./style.module.css";

type Props = {
	folders: Folder[];
};

const FolderList: React.FC<Props> = (props: Props) => {
	const { folders } = props;

	if (!folders) return <Loading />;

	return (
		<>
			{folders.length ? (
				<div className={styles.folderWrapper}>
					{folders.map((folder) => (
						<FolderComponent
							key={folder.id}
							iconUrl={folder.icon}
							folderLink={folder.link}
							folderName={folder.name}
						/>
					))}
				</div>
			) : (
				<div className={styles.noneFolderText}>
					<p>投稿はありません</p>
				</div>
			)}
		</>
	);
};

export default FolderList;
