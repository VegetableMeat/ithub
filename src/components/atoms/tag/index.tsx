import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { tagData } from "@/models/tag/entity";

type Props = {
	tag: tagData;
};

const useStyles = makeStyles(() => ({
	tag: {
		marginRight: "3px",
		marginBottom: "3px",
		color: "white",
		fontSize: "13px",
		minWidth: "0px",
		backgroundColor: "#3E2924",
		height: "20px",
		textTransform: "none",
		"&:hover": {
			backgroundColor: "#3e2924c5",
		},
	},
}));

const Tag: React.FC<Props> = (props: Props) => {
	const { tag } = props;
	const classes = useStyles();
	return (
		<Button key={tag.id} disableRipple className={classes.tag} href={tag.link}>
			{tag.name}
		</Button>
	);
};

export default Tag;
