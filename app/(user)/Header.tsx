import Link from 'next/link';

const Header = () => {
	return (
		<header className="border-b border-solid border-black sticky top-0 left-0 w-full">
			<div className="container mx-auto flex justify-between items-center h-16">
				<Link href="/" className="flex items-center gap-1">
					<div className="w-6 h-6 rounded-full bg-black relative top-0.5"></div>
					<h3 className="text-2xl font-bold">Not Medium</h3>
				</Link>

				<div className="flex items-center gap-1">
					<nav>
						<Link href="/our-story" className="nav-item">
							Our Story
						</Link>
						<Link href="/membership" className="nav-item">
							Membership
						</Link>
						<Link href="/write" className="nav-item">
							Write
						</Link>
						<Link href="/sign-in" className="nav-item">
							Sign In
						</Link>
					</nav>

					<button className="btn text-sm">Get started</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
