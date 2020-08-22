import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: 'white',
  colorSecondary: 'silver',

  // UI
  appBg: 'white',
  appContentBg: '#1F2229',
  appBorderColor: 'grey',
  appBorderRadius: 4,
  appContentTextColor: 'white',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://placehold.it/350x150',
});