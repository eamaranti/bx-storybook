// .storybook/manager.js

import { addons } from '@storybook/addons';
//import { themes } from '@storybook/theming';
import bxtheme from './bxtheme';

addons.setConfig({
  theme: bxtheme,
});