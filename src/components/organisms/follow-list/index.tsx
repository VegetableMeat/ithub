import React from "react";
import styles from "./style.module.css";
import CreateIcon from "@material-ui/icons/Create";
import Folder from "@/components/molecules/folder";
import { folderData } from "@/models/folder/entity";

type Props = {
	folderData: folderData[];
};

const FollowList: React.FC<Props> = (props: Props) => {
	const { folderData } = props;
	return (
		<>
			<div className={styles.noteTextWrapper}>
				<CreateIcon
					style={{
						fontSize: "30px",
						color: "#3E2924",
						marginRight: "5px",
					}}
				/>
				<h1 className={styles.noteText}>自分の備忘録</h1>
			</div>

			<div className={styles.folderContainer}>
				{folderData.map((folder) => (
					<Folder
						key={folder.id}
						iconUrl={folder.icon}
						folderLink={folder.link}
						folderName={folder.name}
					/>
				))}
			</div>
		</>
	);
};

export default FollowList;
