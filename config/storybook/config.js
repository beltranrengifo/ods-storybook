/* eslint-disable import/no-extraneous-dependencies */
import { configure, addParameters, addDecorator } from '@storybook/vue'
import { DocsPage } from '@storybook/addon-docs/blocks'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { withNotes } from '@storybook/addon-notes'
import onesaitTheme from '@/storybook/utils/onesait-theme'
import '@onesait/onesait-ds/lib/theme-onesait/index.css'
import '@/assets/scss/storybook.scss'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import ODS from '@onesait/onesait-ds'
import StorybookTemplate from '../../src/storybook/components/StorybookTemplate'
import RefreshSamplesMixin from '../../src/storybook/components/RefreshSamplesMixin'
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
  },
  a11y: {
    element: '.ods-storybook__component .ods-module__body'
  },
  docs: ({ context }) => (
    <DocsPage context={context} descriptionSlot={({ parameters }) => parameters.notes} />
  )
})

configure(loadStories, module)
Vue.use(VueHighlightJS)
Vue.use(ODS)
Vue.component('StorybookTemplate', StorybookTemplate)
Vue.mixin(RefreshSamplesMixin)
