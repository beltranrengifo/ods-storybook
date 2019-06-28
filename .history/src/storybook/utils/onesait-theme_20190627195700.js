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

  brandTitle: 'ODS Components',
  brandUrl: 'https://example.com'
})
