import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render = () => (
		<Html lang='en'>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
