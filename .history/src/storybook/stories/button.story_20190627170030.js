import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import generateTemplate from '../utils/generate-template'
import OdsMain from '@onesait/onesait-ds/lib/main'
import OdsButton from '@onesait/onesait-ds/lib/button'

const template = `
  <ods-button @click="handleClick">Hello Button</ods-button>
`

storiesOf('ODS/Button', module)
  .add('with text', () => ({
    components: {
      'ods-main': OdsMain,
      'ods-button': OdsButton
    },
    template: generateTemplate(template),
    methods: {
      handleClick: action('clicked')
    }
  }))
