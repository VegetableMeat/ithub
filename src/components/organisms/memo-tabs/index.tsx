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
		"& > span": {
			maxWidth: 50,
			width: "100%",
			backgroundColor: "var(--accent-color);",
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
			fontSize: "16px",
			position: "relative",
			fontFamily: ["Inter", "sans-serif"].join(","),
			top: "8px",
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
		initialTab === "tags" ? setSelecetTab(1) : setSelecetTab(0);
	});

	const handleChangeTabs = (e: React.ChangeEvent<{}>, newTab: number) => {
		setSelecetTab(newTab);
		newTab === 0 ? handleChange("new") : handleChange("tags");
	};

	return (
		<div className={styles.memoTabsContainer}>
			<StyledTabs value={selecetTab} onChange={handleChangeTabs}>
				<AntTab label='Latest' />
				<AntTab label='Tag' />
			</StyledTabs>
			<Typography className={classes.padding} />
		</div>
	);
};

export default MemoTabs;
