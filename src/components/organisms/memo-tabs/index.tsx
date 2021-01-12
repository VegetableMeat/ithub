import React, { useEffect } from "react";
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

interface StyledTabsProps {
	value: number;
	onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles({
	indicator: {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "transparent",
		height: "4px",

		"& > span": {
			maxWidth: 50,
			width: "100%",
			backgroundColor: "var(--accent-color);",
			borderRadius: "5px",
		},
	},
})((props: StyledTabsProps) => (
	<Tabs {...props} TabIndicatorProps={{ children: <span /> }} />
));

const AntTab = withStyles(() =>
	createStyles({
		root: {
			textTransform: "none",
			minWidth: 72,
			fontSize: "15px",
			position: "relative",
			fontFamily: ["Inter", "sans-serif"].join(","),
			top: "8px",
			fontWeight: 400,
			"&:hover": {
				color: "var(--base-color)",
				opacity: 1,
			},
			"&$selected": {
				color: "var(--base-color)",
				fontWeight: 600,
			},
			"&:focus": {
				color: "var(--base-color)",
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
	initialTab: string;
	handleChange: (selectTab: string) => void;
};

const MemoTabs: React.FC<Props> = (props: Props) => {
	const { initialTab, handleChange } = props;
	const classes = useStyles();

	const [selecetTab, setSelecetTab] = React.useState<number>(0);

	useEffect(() => {
		switch (initialTab) {
			case "new":
				setSelecetTab(0);
				break;
			case "saved":
				setSelecetTab(1);
				break;
			case "tags":
				setSelecetTab(2);
				break;
		}
	});

	const handleChangeTabs = (e: React.ChangeEvent<{}>, newTab: number) => {
		setSelecetTab(newTab);
		switch (newTab) {
			case 0:
				handleChange("new");
				break;
			case 1:
				handleChange("saved");
				break;
			case 2:
				handleChange("tags");
		}
	};

	return (
		<nav className={styles.memoTabsContainer}>
			<StyledTabs value={selecetTab} onChange={handleChangeTabs}>
				<AntTab label='Latest' />
				<AntTab label='Saved' />
				<AntTab label='Tag' />
			</StyledTabs>
			<Typography className={classes.padding} />
		</nav>
	);
};

export default MemoTabs;
