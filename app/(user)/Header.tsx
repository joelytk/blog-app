'use client';

import Link from 'next/link';

import useScrollPosition from '@/hooks/useScrollPosition';

const Header = () => {
	const scrollPosition = useScrollPosition();

	return (
		<header
			className={`border-b border-solid border-b-neutral-800 transition-colors ease-linear duration-300 ${
				scrollPosition > 480 ? 'bg-white' : 'bg-yellow-500'
			} sticky top-0 left-0 w-full`}
		>
			<div className="container-xl flex justify-between items-center h-16">
				<Link href="/" className="flex items-center">
					<div className="w-6 h-6 rounded-full bg-black relative top-0.5 mr-2"></div>
					<h3 className="text-2xl font-bold">Not Medium</h3>
				</Link>

				<div className="flex items-center">
					<nav>
						<Link href="/our-story" className="nav-item">
							Our story
						</Link>
						<Link href="/membership" className="nav-item">
							Membership
						</Link>
						<Link href="/write" className="nav-item">
							Write
						</Link>
						<Link href="/sign-in" className="nav-item">
							Sign in
						</Link>
					</nav>

					<button
						className={`btn text-sm ${
							scrollPosition > 480
								? 'bg-green-700 border-green-700 hover:bg-green-800 hover:border-green-800'
								: 'hover:bg-white hover:text-black'
						}`}
					>
						Get started
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
