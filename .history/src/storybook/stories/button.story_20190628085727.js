import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import OdsButton from '@onesait/onesait-ds/lib/button'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

const stories = storiesOf('ODS/Button', module)
stories.addDecorator(withKnobs)

const types = [
  'primary',
  'secondary',
  'text'
]

types.forEach(type => {
  const template = `
    <ods-button
      @click="handleClick"
      type="${type}"
      :disabled="disabled">
      Hello Button</ods-button>
  `
  stories.add(type, () => ({
    components: {
      'ods-button': OdsButton
    },
    template: template,
    props: {
      disabled: {
        default: boolean('Disabled', false)
      }/* ,
      text: {
        default: text('Text', 'Hello Storybook')
      } */
    },
    methods: {
      handleClick: action('clicked')
    },
  }))
})
