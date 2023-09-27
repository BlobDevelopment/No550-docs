import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.no550.com',
	integrations: [
		starlight({
			title: 'No550 Docs',
			logo: {
				src: './src/assets/No550_icon.png',
				alt: 'No550 Logo',
			},
			favicon: './src/assets/favicon.ico',
			social: {
				github: 'https://github.com/BlobDevelopment/no550-docs',
				discord: 'https://discord.no550.com',
				twitter: 'https://twitter.com/BlobDevelopment',
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
