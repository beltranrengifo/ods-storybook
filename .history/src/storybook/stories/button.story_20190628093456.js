import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import OdsButton from '@onesait/onesait-ds/lib/button'
import { text, boolean } from '@storybook/addon-knobs'

const stories = storiesOf('ODS/Button', module)

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
      {{ text }}</ods-button>
  `
  stories.add(type, () => ({
    components: {
      'ods-button': OdsButton
    },
    template: template,
    methods: {
      handleClick: action('clicked')
    },
    props: {
      disabled: {
        default: boolean('Disabled', false)
      },
      text: {
        default: text('Text', 'Wolcome to ODS')
      }
    }
  }))
})
