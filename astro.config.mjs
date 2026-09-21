import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  site: 'https://alexcasalboni.com',
  alias: {
    '@components': './src/components',
    '@layouts': './src/layouts',
    '@data': './src/data',
    '@styles': './src/styles',
  },
});
