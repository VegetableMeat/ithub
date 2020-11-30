import React from "react";

type Props = {
	className: string;
	children?: React.ReactNode;
};

const Text: React.FC<Props> = (props: Props) => {
	const { className, children } = props;
	return <p className={className}>{children}</p>;
};

export default Text;
