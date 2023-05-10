import { buildLegacyTheme } from 'sanity';

const props = {
	'--my-white': '#f7fdfb',
	'--my-black': '#0b1617',
	'--my-red': '#db4437',
	'--my-yellow': '#f4b400',
	'--my-green': '#0f9d58',
	'--primary': '#1cb485'
};

export const theme = buildLegacyTheme({
	/* Base theme colors */
	'--black': props['--my-black'],
	'--white': props['--my-white'],

	'--gray': '#666',
	'--gray-base': '#666',

	'--component-bg': props['--my-black'],
	'--component-text-color': props['--my-white'],

	/* Brand */
	'--brand-primary': props['--primary'],

	// Default button
	'--default-button-color': '#666',
	'--default-button-primary-color': props['--primary'],
	'--default-button-success-color': props['--my-green'],
	'--default-button-warning-color': props['--my-yellow'],
	'--default-button-danger-color': props['--my-red'],

	/* State */
	'--state-info-color': props['--primary'],
	'--state-success-color': props['--my-green'],
	'--state-warning-color': props['--my-yellow'],
	'--state-danger-color': props['--my-red'],

	/* Navbar */
	'--main-navigation-color': props['--my-black'],
	'--main-navigation-color--inverted': props['--my-white'],

	'--focus-color': props['--primary']
});
