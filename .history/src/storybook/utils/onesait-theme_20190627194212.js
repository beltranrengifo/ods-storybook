import { create } from '@storybook/theming'
import css from '@/assets/scss/_variables.scss'
export default create({
  base: 'light',

  colorPrimary: css.primary,
  colorSecondary: css.primary,

  // UI
  appBg: css.neutral5,
  // appBorderColor: css.neutral4,
  appBorderRadius: 0,

  // Typography
  fontBase: '"Titillium Web", sans-serif',
  fontCode: '"Fira Mono", monospace',

  // Text colors
  // textColor: css.black,

  // Toolbar default and active colors
  // barSelectedColor: css.primary,
  // barBg: css.primary9,

  // Form colors
  // /* inputBg: css.black,
  // inputBorder: css.neutral3,
  // inputTextColor: css.black,
  // inputBorderRadius: 4, */

  brandTitle: 'onesait design system',
  brandUrl: 'https://example.com'
})
