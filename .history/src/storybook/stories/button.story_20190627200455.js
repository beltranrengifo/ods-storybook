import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import OdsButton from '@onesait/onesait-ds/lib/button'

const types = [
  'primary',
  'secondary',
  'text'
]
const stories = storiesOf('ODS/Button', module)
types.forEach(type => {
  const template = `
    <ods-button
      @click="handleClick"
      type="${type}">
      Hello Button</ods-button>
  `
  stories.add(type, () => ({
    components: {
      'ods-button': OdsButton
    },
    template: template,
    methods: {
      handleClick: action('clicked')
    }
  }))
})
