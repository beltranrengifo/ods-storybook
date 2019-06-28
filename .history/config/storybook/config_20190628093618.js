/* eslint-disable import/no-extraneous-dependencies */
import { configure, addParameters, addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'
import onesaitTheme from '@/storybook/utils/onesait-theme'
import '@onesait/onesait-ds/lib/theme-onesait/index.css'
import '@/assets/scss/storybook.scss'

const req = require.context('../../src/storybook/stories', true, /.story.js$/)
const loadStories = () => req.keys().forEach(filename => req(filename))

addDecorator(withKnobs)
addDecorator(withNotes)

addParameters({
  options: {
    theme: onesaitTheme
  },
  categoryOrder: (a, b) => a > b
})

configure(loadStories, module)
