/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue'
import '@onesait/onesait-ds/lib/theme-onesait/index.css'
import '@/assets/scss/storybook.scss'

const req = require.context('../../src/storybook/stories', true, /.story.js$/)

const loadStories = () => req.keys().forEach(filename => req(filename))

configure(loadStories, module)
