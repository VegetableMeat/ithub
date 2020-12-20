import React from "react";
import SimpleMDE from "react-simplemde-editor";
import { makeStyles } from "@material-ui/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Alert } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import styles from "./style.module.css";

const useStyles = makeStyles(() => ({
	alert: {
		marginBottom: "10px",
		border: "1px red solid !important",
		"& p": {
			margin: "0px",
		},
	},
	root: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "var(--box-background-color)",
		border: "1px var(--border-color) solid !important",
		boxShadow: "var(--box-shadow-color)",
		borderRadius: "5px",
		padding: "2px !important",
		minHeight: "50px",
		"& input": {
			paddingRight: "0px",
			color: "var(--sub-font-color)",
		},
		"& input::placeholder": {
			fontFamily: '"Inter", "Noto Sans JP", sans-serif !important',
			color: "var(--sub-font-color)",
			opacity: 0.5,
		},
		"& input:first-child": {
			padding: "0px",
		},
	},
	inputRoot: {
		width: "96%",
		marginLeft: "12px",
		fontSize: "18px",
		fontWeight: 600,
		"&::hover": {
			outline: "none",
			border: 0,
		},
		"&::before": {
			outline: "none",
			border: 0,
		},
		"&::after": {
			outline: "none",
			border: 0,
		},
		"&.MuiInput-underline:hover:not(.Mui-disabled):before": {
			outline: "none",
			borderBottom: 0,
		},
		"&.MuiAutocomplete-inputRoot[class*='MuiInput-root'][class*='MuiInput-marginDense'] .MuiAutocomplete-input:first-child": {
			padding: "0px !important",
		},
	},
}));

type Props = {
	tagOption: string[];
	inputTitle: string;
	setInputTitle: React.Dispatch<React.SetStateAction<string>>;
	inputTag: string[];
	setInputTag: React.Dispatch<React.SetStateAction<string[]>>;
	setInputMarkdown: React.Dispatch<React.SetStateAction<string>>;
	inputMarkdown: string;
};

const WriteForm: React.FC<Props> = (props) => {
	const {
		tagOption,
		inputTitle,
		setInputTitle,
		inputTag,
		setInputTag,
		setInputMarkdown,
		inputMarkdown,
	} = props;

	const classes = useStyles();

	const [alertMessage, setAlertMessage] = React.useState([]);
	const alertMessages = alertMessage
		? alertMessage.map((alert) => <p>{alert}</p>)
		: [];

	const [alertOpen, setAlertOpen] = React.useState(false);

	function pushData(array: Array<string>, value: string) {
		if (array.indexOf(value) == -1) {
			array.push(value);
		}
		return true;
	}

	const onChange = (value: string[]) => {
		console.log(value);
		if (value.length >= 6) {
			pushData(alertMessage, "タグは5つまで入力できます");
			setAlertOpen(true);
		} else {
			setAlertMessage(
				alertMessage.filter((v) => v !== "タグは5つまで入力できます")
			);
			setAlertOpen(false);
		}
		setInputTag(value);
	};

	return (
		<>
			<div className={styles.formWrapper}>
				{alertOpen && (
					<Alert className={classes.alert} severity='error'>
						{alertMessages}
					</Alert>
				)}
				<div className={styles.titleForm}>
					<input
						type='text'
						className={styles.titleInput}
						placeholder={"Title"}
						value={inputTitle}
						onChange={(e) => {
							setInputTitle(e.target.value);
						}}
					/>
				</div>
				<Autocomplete
					classes={{
						root: classes.root,
						inputRoot: classes.inputRoot,
					}}
					multiple
					freeSolo
					size='small'
					options={tagOption}
					value={inputTag}
					onChange={(e, value) => onChange(value)}
					renderInput={(params) => <TextField {...params} placeholder='Tag' />}
				/>
			</div>
			<SimpleMDE
				className={styles.editor}
				onChange={(e) => {
					setInputMarkdown(e);
				}}
				value={inputMarkdown}
				options={{
					toolbar: false,
					status: false,
					placeholder: "Content",
				}}
			/>
		</>
	);
};

export default WriteForm;
