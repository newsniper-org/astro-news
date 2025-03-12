import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { SITE } from "./src/lib/config";
import { modifiedTime, readingTime } from "./src/lib/utils/remarks.mjs";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  base: SITE.basePath,
  markdown: {
    remarkPlugins: [readingTime, modifiedTime],
  },
  integrations: [mdx(), sitemap(), pagefind(), sanity(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    responsiveImages: true,
  },
});