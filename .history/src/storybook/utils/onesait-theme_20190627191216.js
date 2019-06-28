import { create } from '@storybook/theming'
import css from '@/assets/scss/_variables.scss'
console.log(css)
export default create({
  base: 'light',

  colorPrimary: css.primary,
  colorSecondary: css.secondary,

  // UI
  appBg: css.neutral5,
  appBorderColor: css.neutral4,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: css.black,
  textInverseColor: css.white,

  // Toolbar default and active colors
  barTextColor: css.neutral3,
  barSelectedColor: 'black',
  barBg: css.primary9,

  // Form colors
  inputBg: css.black,
  inputBorder: css.neutral3,
  inputTextColor: css.black,
  inputBorderRadius: 4,

  brandTitle: 'onesait design system',
  brandUrl: 'https://example.com'
})
