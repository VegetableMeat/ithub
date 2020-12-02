import React from "react";
import FolderIcon from "@material-ui/icons/Folder";
import Img from "@/components/atoms/img";
import Link from "@/components/atoms/link";
import styles from "./style.module.css";

type Props = {
	iconUrl?: string;
	folderLink: string;
	folderName: string;
};

const Folder: React.FC<Props> = (props: Props) => {
	const { iconUrl, folderLink, folderName } = props;
	return (
		<div className={styles.folder}>
			<Link className={styles.folderLink} href={folderLink}>
				<FolderIcon
					style={{
						fontSize: "105px",
						color: "#FFF48D",
					}}
				/>
			</Link>
			<Img className={styles.folderIcon} imgUrl={iconUrl} alt={folderName} />
			<span className={styles.folderName}>{folderName}</span>
		</div>
	);
};

export default Folder;
