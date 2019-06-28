/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import OdsButton from '@onesait/onesait-ds/lib/button'
import '@onesait/onesait-ds/lib/theme-onesait/index.css'

const template = `
  <ods-button @click="handleClick">Hello Button</ods-button>
`

storiesOf('ODS/Button', module)
  .add('with text', () => ({
    components: {
      'ods-button': OdsButton
    },
    template,
    methods: {
      handleClick: action('clicked')
    }
  }))
