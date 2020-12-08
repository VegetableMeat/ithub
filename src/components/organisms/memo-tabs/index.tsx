import React from "react";
import { useRouter } from "next/router";
import {
	makeStyles,
	withStyles,
	Theme,
	createStyles,
} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import styles from "./style.module.css";

const AntTabs = withStyles({
	root: {
		marginLeft: "20px",
		borderBottom: "1px solid #e8e8e8",
	},
	indicator: {
		backgroundColor: "#3e2924",
	},
})(Tabs);

const AntTab = withStyles((theme: Theme) =>
	createStyles({
		root: {
			textTransform: "none",
			minWidth: 72,
			fontWeight: theme.typography.fontWeightRegular,
			"&:hover": {
				color: "#3e2924",
				opacity: 1,
			},
			"&$selected": {
				color: "#3e2924",
				fontWeight: theme.typography.fontWeightMedium,
			},
			"&:focus": {
				color: "#3e2924",
			},
		},
		selected: {},
	})
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabProps {
	label: string;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1,
	},
	padding: {},
	demo1: {
		backgroundColor: theme.palette.background.paper,
	},
}));

type Props = {
	handleChange: (selectTab: string) => void;
};

const MemoTabs: React.FC<Props> = (props: Props) => {
	const { handleChange } = props;
	const router = useRouter();
	const classes = useStyles();

	let initialTab: number;
	const { tab } = router.query;
	switch (tab) {
		case "tags":
			initialTab = 1;
			break;
		default:
			initialTab = 0;
	}

	const [selecetTab, setSelecetTab] = React.useState(initialTab);

	const handleChangeTabs = (e: React.ChangeEvent<{}>, newTab: number) => {
		setSelecetTab(newTab);
		switch (newTab) {
			case 0:
				handleChange("new");
				break;
			case 1:
				handleChange("tags");
				break;
		}
	};

	return (
		<div className={styles.memoTabsContainer}>
			<AntTabs value={selecetTab} onChange={handleChangeTabs}>
				<AntTab label='Latest' />
				<AntTab label='Tag' />
			</AntTabs>
			<Typography className={classes.padding} />
		</div>
	);
};

export default MemoTabs;
