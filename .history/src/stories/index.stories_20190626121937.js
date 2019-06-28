/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import MyButton from '../components/MyButton.vue'
import OdsButton from '@onesait/onesait-ds/lib/button'
import '@onesait/onesait-ds/lib/theme-onesait/index.css'
console.log(MyButton)
console.log(OdsButton)

storiesOf('Button', module)
  .add('with text', () => ({
    components: {
      'ods-button': OdsButton
    },
    template: '<ods-button @click="action">Hello Button</ods-button>',
    methods: { handleClick: action('clicked') }
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    render () {
      return <my-button onClick={this.action}>With JSX</my-button>
    },
    methods: { action: linkTo('Button', 'with some emoji') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') }
  }))
