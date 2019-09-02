import { storiesOf } from '@storybook/vue'
import { optionsKnob, text, boolean, number } from '@storybook/addon-knobs'
import inputNumberMd from '../md/input-number.md'
import getIcons from '../utils/icons'
const icons = getIcons('ods-icon-')
const stories = storiesOf('ODS/Input number', module)

const sizes = {
  'Default - 100%': 'default',
  'Micro - 72px': 'micro',
  'Deci - 152px': 'deci',
  'Hecto - 204px': 'hecto',
  'Mega - 304px': 'mega',
  'Exa - 432px': 'exa'
}

const templateDefault = `
<storybook-template>
  <ods-input-number
    v-model="inputModel"
    :size="size"
    :placeholder="placeholder"
    :isWhite="isWhite"
    :label="label"
    :id="id"
    :disabled="disabled"
    :name="name"
    :readonly="readonly">
  </ods-input-number>
</storybook-template>
  `

stories.add(
  'Default',
  () => ({
    template: templateDefault,
    data () {
      return {
        inputModel: 0
      }
    },
    props: {
      size: {
        default: optionsKnob('Size', sizes, 'hecto', { display: 'select' })
      },
      placeholder: {
        default: text('Placeholder', 'Input you value')
      },
      label: {
        default: text('Label', '')
      },
      id: {
        default: text('Id', '')
      },
      disabled: {
        default: boolean('Disabled', false)
      },
      name: {
        default: text('Name', '')
      },
      readonly: {
        default: boolean('Readonly', false)
      },
      isWhite: {
        default: boolean('White background', false)
      },
    }
  }),
  {
    notes: {
      markdown: inputNumberMd
    }
  }
)
