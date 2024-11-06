import type { Config } from 'tailwindcss';


export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'logo-green': '#48E685',
				'back-black': '#232323',
			}
		}
	},

	plugins: []
} satisfies Config;
