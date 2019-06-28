/* eslint-disable import/no-extraneous-dependencies */
import { configure, addParameters } from '@storybook/vue'
import onesaitTheme from '@/storybook/utils/onesait-theme'
import '@onesait/onesait-ds/lib/theme-onesait/index.css'
import '@/assets/scss/storybook.scss'
import '@/assets/scss/_fonts'

const req = require.context('../../src/storybook/stories', true, /.story.js$/)
const loadStories = () => req.keys().forEach(filename => req(filename))

addParameters({
  options: {
    theme: onesaitTheme
  }
})

configure(loadStories, module)
