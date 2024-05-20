import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://bobaaaaa.github.io',
	base: 'astro-selfmade',
	integrations: [tailwind()],
});
