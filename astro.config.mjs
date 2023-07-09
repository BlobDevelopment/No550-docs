import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'No550',
      logo: {
        light: '/src/assets/no550_logo.svg',
        dark: '/src/assets/no550_logo_darkmode.svg',
        replacesTitle: true,
      },
      social: {
        github: 'https://BlobDevelopment.com/github',
        twitter: 'https://BlobDevelopment.com/twitter',
        discord: 'https://BlobDevelopment.com/discord'
      },
      sidebar: [
        {
          label: 'API',
          autogenerate: { directory: 'api' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
