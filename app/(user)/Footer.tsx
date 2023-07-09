'use client';

import Link from 'next/link';

import Logo from '@/components/Logo';

const Footer = () => {
	return (
		<footer className="bg-black text-white py-7">
			<div className="container-xl">
				<Logo color="white" />
				<nav className="mt-2 mb-7">
					<Link href="/about" className="footer-nav-item">
						About
					</Link>
					<Link href="/help" className="footer-nav-item">
						Help
					</Link>
					<Link href="/terms" className="footer-nav-item">
						Terms
					</Link>
					<Link href="/privacy" className="footer-nav-item">
						Privacy
					</Link>
				</nav>
				<hr className="mb-5" />
				<h2 className="font-medium">Get the Not Medium app</h2>
			</div>
		</footer>
	);
};

export default Footer;
