import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { CONFIG } from './src/config.ts';

import Compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: CONFIG.origin,
  base: CONFIG.basePathname,
  trailingSlash: CONFIG.trailingSlash ? 'always' : 'never',
  output: 'static',
  build: {
    inlineStylesheets: 'never',
  },
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
