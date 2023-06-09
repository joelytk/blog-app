import type { ReactNode } from 'react';

import '@/styles/globals.css';

export const metadata = {
	title: 'Next.js',
	description: 'Generated by Next.js'
};

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
