import React from "react";
import { makeStyles } from "@material-ui/styles";
import FolderIcon from "@material-ui/icons/Folder";
import Link from "@/components/atoms/link";
import styles from "./style.module.css";

type Props = {
	iconUrl?: string;
	folderLink: string;
	folderName: string;
};

const useStyles = makeStyles(() => ({
	folder: {
		fontSize: "90px",
		color: "#FFF48D",
		"&:hover": {
			color: "#f5eb8f",
		},
	},
}));

const Folder: React.FC<Props> = (props: Props) => {
	const { folderLink, folderName } = props;
	const classes = useStyles();
	return (
		<div className={styles.folder}>
			<Link className={styles.folderLink} href={folderLink}>
				<FolderIcon className={classes.folder} />
			</Link>
			<span className={styles.folderName}>{folderName}</span>
		</div>
	);
};

export default Folder;
