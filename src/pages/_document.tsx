import Document, {
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";
import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@material-ui/styles";

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const materialUiServerStyleSheets = new MaterialUiServerStyleSheets();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						materialUiServerStyleSheets.collect(<App {...props} />),
				});
			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{materialUiServerStyleSheets.getStyleElement()}
					</>
				),
			};
		} finally {
		}
	}

	render() {
		return (
			<Html lang='jp'>
				<Head>
					<Head>
						<link rel='preconnect' href='https://fonts.gstatic.com' />
						<link
							href='https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap'
							rel='stylesheet'
						/>
						<link
							href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap'
							rel='stylesheet'
						/>
					</Head>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
