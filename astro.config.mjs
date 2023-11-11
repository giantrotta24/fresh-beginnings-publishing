import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';
import Compress from 'astro-compress';

import { CONFIG } from './src/config.ts';

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
  ],
});
