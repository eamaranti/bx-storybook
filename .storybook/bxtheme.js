// .storybook/bx-theme.js

import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'Bluexpress',
  brandUrl: 'https://bluex.cl',
  brandImage: 'https://www.bluex.cl/wp-content/uploads/2020/10/logo.svg',
  colorPrimary: 'white',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'rgb(74,195,224)',
  appContentBg: 'white',
  appBorderColor: 'rgb(74,195,224)',
  appBorderRadius: 10,

  // Typography
  fontBase: '"raleway", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'rgb(74,195,224)',
  barSelectedColor: 'rgb(0,51,161)',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,
});