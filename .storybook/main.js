module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-links',
    '@storybook/source-loader',
    '@storybook/addon-docs',
    'storybook-addon-designs',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
    
    //'storybook-aem-confluence',
  ],
};