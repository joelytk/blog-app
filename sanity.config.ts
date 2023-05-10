import { visionTool } from '@sanity/vision';
import { defineConfig, isDev } from 'sanity';
import { deskTool } from 'sanity/desk';

import StudioNavbar from '@/components/StudioNavbar';
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial';
import { schemaTypes } from './schemas';
import { theme } from './theme';

const devOnlyPlugins = [getStartedPlugin()];

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
// const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export default defineConfig({
	basePath: '/studio',
	name: 'Joel_Yap_Blog_Content_Studio',
	title: 'Joel Yap Blog Content Studio',
	projectId,
	dataset,
	plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],
	schema: {
		types: schemaTypes
	},
	studio: {
		components: {
			navbar: StudioNavbar
		}
	},
	theme
});
