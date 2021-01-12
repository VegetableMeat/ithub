import { makeStyles } from "@material-ui/styles";

export const useStyles = () => {
	const useStyles = makeStyles(() => ({
		avatarButton: {
			margin: "0 5px",
			padding: "0",
			border: "0",
			outline: "none",
			width: "35px",
			height: "35px",
			borderRadius: "50%",
			cursor: "pointer",
		},
		popper: {
			paddingTop: "8px",
			width: "auto",
			transform: "none !important",
			top: "35px !important",
			left: "-120px !important",
		},
		menuPaper: {
			borderColor: "var(--header-paper-border-color);",
			backgroundColor: "var(--header-paper-background-color);",
		},
		menuItem: {
			transition: "none",
			backgroundColor: "transparent",
			fontSize: "14px",
			color: "var(--header-menu-text-color);",
			paddingLeft: "10px",
			paddingRight: "12px",
			"&:first-child": {
				backgroundColor: "transparent",
			},
			"&:hover": {
				transition: "none",
				color: "#FFF",
				backgroundColor: "var(--header-menu-hover-background-color);",
			},
		},
		menuIcon: {
			width: "20px",
			height: "20px",
			color: "currentColor",
			marginRight: "6px",
		},
		menuBorder: {
			height: "0",
			borderTop: "solid 1px var(--header-paper-border-color);",
			margin: "6px 0",
		},
		avatar: {
			width: "35px",
			height: "35px",
			backgroundColor: "#FFF",
			"&:hover": {
				cursor: "pointer",
			},
		},
	}));

	return useStyles();
};
