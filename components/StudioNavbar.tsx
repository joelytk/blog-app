import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const StudioNavbar = (props: any) => {
	return (
		<div>
			<Link href="/" className="text-[#1cb485] flex items-center p-4">
				<ArrowUturnLeftIcon className="h-4 w-4 mr-2" />
				Go to website
			</Link>
			{props.renderDefault(props)}
		</div>
	);
};

export default StudioNavbar;
