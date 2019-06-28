/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue'

const req = require.context('../../src/storybook/stories', true, /.stories.js$/)

const loadStories = () => req.keys().forEach(filename => req(filename))

configure(loadStories, module)
