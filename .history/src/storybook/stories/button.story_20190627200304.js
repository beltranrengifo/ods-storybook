import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import OdsButton from '@onesait/onesait-ds/lib/button'

const template = `
  <ods-button
    @click="handleClick">
    Hello Button</ods-button>
`
const types = [
  'primary',
  'secondary',
  'text'
]
const stories = storiesOf('ODS/Button', module)
types.forEach(type => {
  stories.add(type, () => ({
    components: {
      'ods-button': OdsButton
    },
    props: {
      type: type
    },
    template: template,
    methods: {
      handleClick: action('clicked')
    }
  }))
})
  
