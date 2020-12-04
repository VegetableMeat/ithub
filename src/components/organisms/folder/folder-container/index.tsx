import React from "react";
import { responseInterface } from "swr";
import CreateIcon from "@material-ui/icons/Create";
import FolderList from "@/components/organisms/folder/folder-list";
import { Folder } from "@/models/folder/entity";
import { API_ERROR_MESSAGE } from "@/constants/messages";
import styles from "./style.module.css";

type Props = {
	folders: responseInterface<Folder[], Error>;
};

const FolderContainer: React.FC<Props> = (props: Props) => {
	const { folders } = props;
	const { data, error } = folders;
	return (
		<>
			<div className={styles.memoTextWrapper}>
				<CreateIcon
					style={{
						fontSize: "30px",
						color: "#3E2924",
						marginRight: "5px",
					}}
				/>
				<h1 className={styles.memoText}>投稿</h1>
			</div>

			<div className={styles.folderContainer}>
				{!error ? (
					<FolderList folders={data} />
				) : (
					<div className={styles.followErrorMessage}>
						<p>{API_ERROR_MESSAGE}</p>
					</div>
				)}
			</div>
		</>
	);
};

export default FolderContainer;
