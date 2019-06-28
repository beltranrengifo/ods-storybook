import { create } from '@storybook/theming'
import css from '@/assets/scss/_variables.scss'

export default create({
  base: 'light',
  colorPrimary: css.primary,
  colorSecondary: css.primary,
  // UI
  appBg: css.neutral5,
  appBorderRadius: 0,
  // Typography
  fontBase: '"Soho", sans-serif',
  fontCode: '"Fira Mono", monospace',
  brandTitle: 'ODS Components',
  brandUrl: 'https://example.com'
})
