import { ReactNode } from 'react';

import './globals.css';

export const metadata = {
	title: 'Blog App',
	description: 'Blog app built with Next.js 13 & Sanity.io'
};

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
