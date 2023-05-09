import type { Metadata } from 'next';
import { metadata as studioMetadata } from 'next-sanity/studio/metadata';

import { Studio } from './Studio';

export const metadata: Metadata = {
	...studioMetadata,
	viewport: `${studioMetadata.viewport}, interactive-widget=resizes-content`
};

const StudioPage = () => {
	return <Studio />;
};

export default StudioPage;
