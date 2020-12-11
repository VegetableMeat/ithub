import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { FaHashtag } from "react-icons/fa";
import { Tag } from "@/models/tag/entity";

type Props = {
	tag: Tag;
};

const useStyles = makeStyles(() => ({
	tag: {
		marginRight: "4px",
		marginBottom: "4px",
		color: "var(--tag-font-color)",
		fontSize: "13px",
		minWidth: "0px",
		backgroundColor: "var(--tag-background-color)",
		border: "1px var(--accent-color) solid",
		height: "22px",
		textTransform: "none",
		"&:hover": {
			backgroundColor: "var(--tag-background-color)",
		},
	},
	tagName: {
		fontFamily: ["Inter", "sans-serif"].join(","),
		marginLeft: "3px",
		fontWeight: 500,
	},
}));

const TagComponent: React.FC<Props> = (props: Props) => {
	const { tag } = props;
	const classes = useStyles();
	return (
		<Button key={tag.id} disableRipple className={classes.tag} href={tag.link}>
			<FaHashtag color={"var(--tag-font-color)"} size={"0.9em"} />
			<span className={classes.tagName}>{tag.name}</span>
		</Button>
	);
};

export default TagComponent;
