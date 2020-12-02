import React from "react";

type Props = {
	className?: string;
	href: string;
	children: React.ReactNode;
};

const Link: React.FC<Props> = (props: Props) => {
	const { className, href, children } = props;
	return (
		<a className={className} href={href}>
			{children}
		</a>
	);
};

export default Link;
