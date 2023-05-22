import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress({
    css: true,
    html: {
      removeAttributeQuotes: false
    },
    img: false,
    js: true,
    svg: false,
    logger: 1
  })]
});