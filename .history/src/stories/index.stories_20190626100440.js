/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import OdsButton from '@onesait/onesait-ds/packages/button'
console.log(OdsButton)
storiesOf('OdsButton', module)
  .add('with text', () => ({
    component: { OdsButton },
    template: '<p @click="handleClick">Hello Button</p>',
    methods: { action: action('clicked') }
  }))
