import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import OdsButton from '@onesait/onesait-ds/lib/button'

const template = `
  <ods-button
    @click="handleClick">
    Hello Button</ods-button>
`

storiesOf('ODS/Button', module)
  .add('Default', () => ({
    components: {
      'ods-button': OdsButton
    },
    template: template,
    methods: {
      handleClick: action('clicked')
    }
  }))
