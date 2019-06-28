/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue'
import '@/assets/scss/storybook.scss'
import '@onesait/onesait-ds/lib/theme-onesait/index.css'

const req = require.context('../../src/storybook/stories', true, /.story.js$/)

const loadStories = () => req.keys().forEach(filename => req(filename))

configure(loadStories, module)
