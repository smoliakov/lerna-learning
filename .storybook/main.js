module.exports = {
  'stories': [
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    '../packages/button/src/index.stories.tsx',
  ],
  'babel': (config) => {
    config.presets.push(require.resolve('@emotion/babel-preset-css-prop'));
    return config;
  },
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
};
