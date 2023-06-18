import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), robotsTxt(), react()],
  vite: {
    ssr: {
      noExternal: [/^swiper\/*/,/^react-fast-marquee\/*/,/^usehooks-ts\/*/,/^react-countup\/*/, /^react-icons\/*/ ]
    }
  },
  site: "https://rs.tcetmumbai.in"
});