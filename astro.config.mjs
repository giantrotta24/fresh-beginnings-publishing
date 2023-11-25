import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';
import Compress from 'astro-compress';
import sanity from 'astro-sanity';

import { CONFIG } from './src/config.ts';

const isProd = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
  site: CONFIG.origin,
  base: CONFIG.basePathname,
  trailingSlash: CONFIG.trailingSlash ? 'always' : 'never',
  output: 'server',
  build: {
    inlineStylesheets: 'never',
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    Compress({
      css: true,
      html: {
        removeAttributeQuotes: false,
      },
      js: true,
      svg: false,
      logger: 1,
    }),
    sanity({
      projectId: 'j9ctl99u',
      dataset: isProd ? 'production' : 'development',
      apiVersion: '2021-03-25',
      useCdn: true,
    }),
  ],
});
