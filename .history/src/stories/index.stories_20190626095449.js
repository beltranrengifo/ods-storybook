/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import ODS from '@onesait/onesait-ds'
console.log(ODS)

storiesOf('Button', module)
  .add('with text', () => ({
    component: {
      OdsButton: ODS.Button
    },
    template: '<ods-button @click="action">Hello Button</ods-button>',
    methods: { action: action('clicked') }
  }))
