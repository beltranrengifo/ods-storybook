/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import OdsButton from '@onesait/onesait-ds/packages/button'
console.log(OdsButton)
storiesOf('OdsButton', module)
  .add('with text', () => ({
    component: OdsButton,
    template: '<ods-button @click="action">Hello Button</ods-button>',
    methods: { action: action('clicked') }
  }))
