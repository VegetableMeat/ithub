import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/styles";
import FolderIcon from "@material-ui/icons/Folder";
import styles from "./style.module.css";

type Props = {
	iconUrl?: string;
	folderName: string;
};

const useStyles = makeStyles(() => ({
	folder: {
		fontSize: "90px",
		color: "var(--folder-color)",
		"&:hover": {
			color: "var(--folder-color)",
		},
	},
}));

const Folder: React.FC<Props> = (props: Props) => {
	const { folderName } = props;
	const router = useRouter();
	const classes = useStyles();
	const { user } = router.query;
	return (
		<div className={styles.folder}>
			<Link
				href={{
					pathname: "/[user]",
					query: { user: user, tab: "tags", tag: folderName },
				}}
			>
				<div className={styles.folderLink}>
					<FolderIcon className={classes.folder} />
				</div>
			</Link>
			<span className={styles.folderName}>{folderName}</span>
		</div>
	);
};

export default Folder;
