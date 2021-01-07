import React from "react";
import { RecoilRoot } from "recoil";
import LoginProvider from "@/provider/LoginProvider";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { CookiesProvider } from "react-cookie";

const Provider: React.FC = (props) => {
	return (
		<RecoilRoot>
			<CookiesProvider>
				<LoginProvider>
					<ThemeProvider>{props.children}</ThemeProvider>
				</LoginProvider>
			</CookiesProvider>
		</RecoilRoot>
	);
};

export default Provider;
