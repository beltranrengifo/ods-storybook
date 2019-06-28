/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import ODS from '@onesait/onesait-ds'
import Vue from 'vue'
console.log(Vue)

storiesOf('OdsButton', module)
  .add('with text', () => ({
    component: {
      'ods-button': ODS.Button
    },
    template: '<ods-button @click="action">Hello Button</ods-button>',
    methods: { action: action('clicked') }
  }))
