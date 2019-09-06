import { storiesOf } from '@storybook/vue'
import { optionsKnob, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import inputSearchMd from '../md/input-search.md'
import getIcons from '../utils/icons'
const icons = getIcons()
const stories = storiesOf('ODS/Input search', module)

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
  <ods-input-search
    v-model="inputModel"
    :size="size"
    :placeholder="placeholder"
    :expandableSearch="expandableSearch"
    :clearable="clearable"
    :icon="icon"
    :outlined="expandableSearch ? false : outlined"
    :clearOnClose="clearOnClose"
    @change="handleChange"
    @search="handleSearch"
    @close="handleClose"
    :key="componentKey">
  </ods-input-search>
</storybook-template>
  `

stories.add(
  'Default',
  () => ({
    template: templateDefault,
    data () {
      return {
        inputModel: ''
      }
    },
    props: {
      size: {
        default: optionsKnob('Size', sizes, 'hecto', { display: 'select' })
      },
      placeholder: {
        default: text('Placeholder', 'Input you value')
      },
      clearable: {
        default: boolean('Clearable', true)
      },
      expandableSearch: {
        default: boolean('Expandable search', false)
      },
      clearOnClose: {
        default: boolean('Clear on close', false)
      },
      outlined: {
        default: boolean('Outlined input', false)
      },
      icon: {
        default: optionsKnob('Icon', icons, 'search', { display: 'select' })
      }
    },
    methods: {
      handleChange: action('Change'),
      handleSearch: action('Search'),
      handleClose: action('Close')
    }
  }),
  {
    notes: {
      markdown: inputSearchMd
    }
  }
)
