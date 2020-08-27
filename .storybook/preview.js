import '../src/index.scss';

import { themes } from '@storybook/theming';
import theme from './theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  docs: {
    theme: themes.dark,
  },
  backgrounds: {
    values: [
      { name: 'light', value: '#f6f7fb' },
      { name: 'dark', value: '#1f2229' },
    ],
  },
}