import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface P {
	value: string;
	language?: string;
}

const Highlighter: React.FC<P> = ({ language, value }) => {
	return (
		<SyntaxHighlighter language={language} style={atomDark}>
			{value}
		</SyntaxHighlighter>
	);
};

export default Highlighter;
