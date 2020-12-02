import React from "react";

type Props = {
	className: string;
	imgUrl: string;
	alt: string;
	children?: React.ReactNode;
};

const Img: React.FC<Props> = (props: Props) => {
	const { className, imgUrl, alt, children } = props;
	return (
		<img className={className} src={imgUrl} alt={alt}>
			{children}
		</img>
	);
};

export default Img;
