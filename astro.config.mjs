import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'No550 Docs',
			logo: {
				src: './src/assets/No550_icon.png',
				alt: 'No550 Logo',
			},
			favicon: './src/assets/favicon.ico',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Getting started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Configuration',
					autogenerate: { directory: 'configuration' },
				},
				{
					label: 'API',
					autogenerate: { directory: 'api' },
				},
			],
		}),
	],
});
