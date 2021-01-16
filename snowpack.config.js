/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    'public': { url: '/', static: true },
    'src/client': { url: '/dist' },
    'src/common': { url: '/dist' }
  },
  exclude: [
    './src/middlewares.ts'
  ],
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
