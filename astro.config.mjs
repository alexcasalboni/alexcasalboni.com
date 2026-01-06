import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://alexcasalboni.com',
  alias: {
    '@components': './src/components',
    '@layouts': './src/layouts',
    '@data': './src/data',
    '@styles': './src/styles',
  },
});
