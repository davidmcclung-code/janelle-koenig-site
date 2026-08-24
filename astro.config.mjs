import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://davidmcclung-code.github.io',
  base: process.env.GITHUB_ACTIONS ? '/janelle-koenig-site' : '/',
  compressHTML: true,
});

