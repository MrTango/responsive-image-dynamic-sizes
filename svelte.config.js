import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter({
			pages: 'build',   // This tells in which folder to build the static files to
			assets: 'build',  // This tells in which folder to build the static files to
			fallback: null
		})
	},
	extensions: ['.svelte', '.svx']
};

export default config;
