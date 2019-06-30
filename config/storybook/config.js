/* eslint-disable import/no-extraneous-dependencies */
import { configure, addParameters, addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { withNotes } from '@storybook/addon-notes'
import '@storybook/addon-console'
import onesaitTheme from '@/storybook/utils/onesait-theme'
import '@onesait/onesait-ds/lib/theme-onesait/index.css'
import '@/assets/scss/storybook.scss'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import ODS from '@onesait/onesait-ds'

const req = require.context('../../src/storybook/stories', true, /.story.js$/)
const loadStories = () => req.keys().forEach(filename => req(filename))

addDecorator(withKnobs)
addDecorator(withNotes)
addDecorator(withA11y)

const viewports = {
  iPhone5: {
    name: 'iPhone 5',
    styles: {
      width: '320px',
      height: '568px'
    }
  },
  iPhone8: {
    name: 'iPhone 8',
    styles: {
      width: '375px',
      height: '667px'
    }
  },
  iPad: {
    name: 'iPad',
    styles: {
      width: '768px',
      height: '1024px'
    }
  }
}

addParameters({
  options: {
    theme: onesaitTheme
  },
  viewport: {
    viewports: viewports
  }
})

configure(loadStories, module)
Vue.use(VueHighlightJS)
Vue.use(ODS)
