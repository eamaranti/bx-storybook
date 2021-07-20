// .storybook/manager.js

import { addons } from '@storybook/addons';
//import { themes } from '@storybook/theming';
//import bxtheme from './bxtheme';
import bxthemeDark from './bxtheme-dark';

addons.setConfig({
  theme: bxthemeDark,
});