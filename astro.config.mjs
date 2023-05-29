import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import { CONFIG } from './src/config.ts';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: CONFIG.origin,
  base: CONFIG.basePathname,
  trailingSlash: CONFIG.trailingSlash ? 'always' : 'never',
  output: 'static',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), compress({
    css: true,
    html: {
      removeAttributeQuotes: false
    },
    img: false,
    js: true,
    svg: false,
    logger: 1
  }), image()]
});