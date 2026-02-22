const path = require('path');

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-designs'],
  framework: '@storybook/react-vite',
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };
    // Use a dedicated cache dir to avoid clashing with Storybook's cache (avoids chunk path rendering bug)
    config.cacheDir = path.resolve(__dirname, '../node_modules/.cache/storybook-vite');
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      'react',
      'react-dom',
    ];
    config.optimizeDeps.exclude = [
      ...(config.optimizeDeps.exclude || []),
      'node_modules/.cache/storybook',
      'node_modules/.cache/sb-vite',
    ];
    // Force dependency re-optimization so preview gets correct modules (remove after first successful load if slow)
    config.optimizeDeps.force = true;
    config.server = config.server || {};
    config.server.fs = config.server.fs || {};
    config.server.fs.strict = true;
    return config;
  },
};

module.exports = config;
