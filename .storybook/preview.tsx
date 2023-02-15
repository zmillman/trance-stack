import { themes } from '@storybook/theming';
import i18n from '@test/i18next';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  dependencies: {
    // display only dependencies/dependents that have a story in storybook
    // by default this is false
    withStoriesOnly: true,

    // completely hide a dependency/dependents block if it has no elements
    // by default this is false
    hideEmpty: true,
  },
  docs: {
    theme: themes.dark,
  },
  backgrounds: { disable: true },
  i18n,
  locale: 'en',
  locales: {
    en: 'English'
  },
  themes: {
    default: 'dark',
    list: [
      { name: 'dark', class: 'theme-dark', color: '#00aced' },
      { name: 'light', class: 'theme-light', color: '#3b5998' }
    ],
  }
};