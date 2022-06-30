import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
	integrations: [tailwind(), svelte()],
	adapter: netlify(),
});
