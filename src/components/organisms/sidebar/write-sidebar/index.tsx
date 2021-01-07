import React from "react";
import axios from "axios";

import ImageUploading, { ImageListType } from "react-images-uploading";
import ReactLoading from "react-loading";
import { BsImage } from "react-icons/bs";
import { RiEye2Line } from "react-icons/ri";
import { HiPencil } from "react-icons/hi";
import { GiSaveArrow } from "react-icons/gi";
import styles from "./style.module.css";

type Props = {
	inputMarkdown: string;
	setInputMarkdown: React.Dispatch<React.SetStateAction<string>>;
	isPreview: boolean;
	setIsPreview: React.Dispatch<React.SetStateAction<boolean>>;
	setSnackbarMessage: React.Dispatch<React.SetStateAction<string>>;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	handleLocalSave: () => void;
};

const WriteSidebar: React.FC<Props> = (props) => {
	const {
		inputMarkdown,
		setInputMarkdown,
		isPreview,
		setIsPreview,
		setSnackbarMessage,
		setOpen,
		handleLocalSave,
	} = props;

	const [uploading, setUploading] = React.useState<boolean>(false);
	const [image, setImage] = React.useState<ImageListType>(null);

	const onChange = (image: ImageListType): void => {
		setImage(image);

		const params = new FormData();
		params.append("image", image[0].file);

		(async () => {
			setUploading(true);
			await axios
				.post(
					`https://ithub-backend.herokuapp.com/static/images/upload`,
					params,
					{
						headers: {
							"content-type": "multipart/form-data",
						},
					}
				)
				.then((res) => {
					setSnackbarMessage("画像アップロードが完了しました");
					setOpen(true);
					setInputMarkdown(inputMarkdown.concat(`![](${res.data.link})`));
				})
				.catch(() => {
					setSnackbarMessage("画像アップロードに失敗しました");
					setOpen(true);
				});

			setUploading(false);
		})();
	};

	return (
		<aside className={styles.editorSidebar}>
			<div className={styles.sidebarSticky}>
				{isPreview ? (
					<>
						<div
							className={styles.sidebarItem}
							onClick={() => setIsPreview(!isPreview)}
						>
							<RiEye2Line
								style={{
									fontSize: "28px",
									color: "var(--base-color)",
									marginRight: "10px",
								}}
							/>
							<p>{"Preview"}</p>
						</div>
						<div
							className={styles.sidebarItem}
							onClick={() => handleLocalSave()}
						>
							<GiSaveArrow
								style={{
									fontSize: "28px",
									color: "var(--base-color)",
									marginRight: "10px",
								}}
							/>
							<p>Save</p>
						</div>

						{!uploading ? (
							<ImageUploading
								value={image}
								onChange={onChange}
								acceptType={["png", "jpg"]}
							>
								{({ onImageUpload }) => (
									<div className={styles.sidebarItem} onClick={onImageUpload}>
										<BsImage
											style={{
												fontSize: "28px",
												color: "var(--base-color)",
												marginRight: "10px",
											}}
										/>
										<p>Upload image</p>
									</div>
								)}
							</ImageUploading>
						) : (
							<div className={styles.uploadingWrapper}>
								<ReactLoading type={"spin"} height={"28px"} width={"28px"} />
								<p>Uploading...</p>
							</div>
						)}
					</>
				) : (
					<div
						className={styles.sidebarItem}
						onClick={() => setIsPreview(!isPreview)}
					>
						<HiPencil
							style={{
								fontSize: "28px",
								color: "var(--base-color)",
								marginRight: "10px",
							}}
						/>
						<p>{"Edit"}</p>
					</div>
				)}
			</div>
		</aside>
	);
};

export default WriteSidebar;
