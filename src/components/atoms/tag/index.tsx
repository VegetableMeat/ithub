import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { Tag } from "@/models/tag/entity";

type Props = {
	tag: Tag;
};

const useStyles = makeStyles(() => ({
	tag: {
		marginRight: "3px",
		marginBottom: "3px",
		color: "white",
		fontSize: "13px",
		minWidth: "0px",
		backgroundColor: "var(--accent-color)",
		height: "20px",
		textTransform: "none",
		"&:hover": {
			backgroundColor: "var(--accent-color)",
		},
	},
}));

const TagComponent: React.FC<Props> = (props: Props) => {
	const { tag } = props;
	const classes = useStyles();
	return (
		<Button key={tag.id} disableRipple className={classes.tag} href={tag.link}>
			#{tag.name}
		</Button>
	);
};

export default TagComponent;
