import { create } from '@storybook/theming'
import css from '@/assets/scss/_variables.scss'
console.log(css)
export default create({
  base: 'light',

  colorPrimary: css.primary,
  colorSecondary: css.secondary,

  // UI
  appBg: css.neutral5,
  appContentBg: css.neutral4,
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Soho", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: css.black,
  textInverseColor: css.white,

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'hotpink',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'onesait design system',
  brandUrl: 'https://example.com'
})
