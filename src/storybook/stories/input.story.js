import { storiesOf } from '@storybook/vue'
import { optionsKnob, text, boolean, number } from '@storybook/addon-knobs'
import { capitalize } from '../utils/functions'
import inputMd from '../md/input.md'
import getIcons from '../utils/icons'
const icons = getIcons('ods-icon-')
const stories = storiesOf('ODS/Input', module)

const sizes = {
  'Default - 100%': 'default',
  'Micro - 72px': 'micro',
  'Deci - 152px': 'deci',
  'Hecto - 204px': 'hecto',
  'Mega - 304px': 'mega',
  'Exa - 432px': 'exa'
}

const types = {
  Default: '',
  Textarea: 'textarea'
}

const autoComplete = {
  On: 'on',
  Off: 'off'
}

const resizes = {
  None: 'none',
  Both: 'both',
  Horizontal: 'horizontal',
  Vertical: 'vertical'
}

const slots = {
  None: 'none',
  Prefix: 'prefix',
  Suffix: 'suffix',
  Prepend: 'prepend',
  Append: 'append'
}

const propsStr = `:size="size"
    :placeholder="placeholder"
    :isWhite="isWhite"
    :label="label"
    :id="id"
    :disabled="disabled"
    :type="type"
    :rows="rows"
    :maxlength="maxlength"
    :minlength="minlength"
    :autosize="autosize"
    :auto-complete="autoComplete"
    :name="name"
    :readonly="readonly"
    :resize="resize"
    :prefix-icon="prefixIcon"
    :suffix-icon="suffixIcon"
    :key="componentKey"
`

const templateDefault = `
<storybook-template>
  <ods-input
    v-model="inputModel"
    ${propsStr}>
  </ods-input>
</storybook-template>
  `

const templateSlots = `
<storybook-template>
  <ods-input
    v-model="inputModel"
    ${propsStr}>
    <ods-icon
      class="input-slot-icon"
      :slot="useSlot"
      name="search"
      size="16" />
  </ods-input>
</storybook-template>
  `

const templates = [
  {
    name: 'default',
    template: templateDefault
  },
  {
    name: 'slots',
    template: templateSlots
  }
]

templates.forEach(template => {
  stories.add(
    capitalize(template.name),
    () => ({
      template: template.template,
      data () {
        return {
          inputModel: '',
          reRenderWatchers: ['autosize']
        }
      },
      props: {
        useSlot: {
          default: template.name === 'slots' ? optionsKnob('Slot', slots, '', { display: 'select' }) : null
        },
        size: {
          default: optionsKnob('Size', sizes, 'hecto', { display: 'select' })
        },
        type: {
          default: optionsKnob('Type', types, '', { display: 'select' })
        },
        rows: {
          default: number('Rows (textarea only)', 3)
        },
        autosize: {
          default: boolean('Autosize (textarea only)', false)
        },
        resize: {
          default: optionsKnob('Resize (textarea only)', resizes, 'none', { display: 'select' })
        },
        placeholder: {
          default: text('Placeholder', 'Input you value')
        },
        isWhite: {
          default: boolean('White background', false)
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
        maxlength: {
          default: number('Max length', 960)
        },
        minlength: {
          default: number('Min length', 2)
        },
        autoComplete: {
          default: optionsKnob('Auto complete', autoComplete, 'on', { display: 'select' })
        },
        name: {
          default: text('Name', '')
        },
        readonly: {
          default: boolean('Readonly', false)
        },
        prefixIcon: {
          default: template.name !== 'slots' ? optionsKnob('Prefix icon', icons, '', { display: 'select' }) : null
        },
        suffixIcon: {
          default: template.name !== 'slots' ? optionsKnob('Suffix icon', icons, '', { display: 'select' }) : null
        }
      }
    }),
    {
      notes: {
        markdown: inputMd
      }
    }
  )
})
