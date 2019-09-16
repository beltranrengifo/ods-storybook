import { storiesOf } from '@storybook/vue'
import { optionsKnob, number, text, boolean, color } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import switchMd from '../md/switch.md'
import getIcons from '../utils/icons'
const icons = getIcons('ods-icon-')
const stories = storiesOf('ODS/Switch', module)

const templateDefault = `
<storybook-template>
  <ods-switch
    v-model='value'
    :disabled='disabled'
    :width='width'
    :active-icon-class='activeIconClass'
    :inactive-icon-class='inactiveIconClass'
    :active-text='activeText'
    :inactive-text='inactiveText'
    :active-value='activeValue'
    :inactive-value='inactiveValue'
    :active-color='activeColor'
    :inactive-color='inactiveColor'
    :name='name'
    @change='handleChange'
    :key="componentKey">
  </ods-switch>
</storybook-template>
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    data () {
      return {
        value: '100',
        reRenderWatchers: ['width']
      }
    },
    props: {
      disabled: {
        default: boolean('Disabled', false)
      },
      width: {
        default: number('Width', 40)
      },
      activeIconClass: {
        default: optionsKnob('Active icon class', icons, '', { display: 'select' })
      },
      inactiveIconClass: {
        default: optionsKnob('Inactive icon class', icons, '', { display: 'select' })
      },
      activeText: {
        default: text('Active text', '')
      },
      inactiveText: {
        default: text('Inactive text', '')
      },
      activeValue: {
        default: text('Active value', '100')
      },
      inactiveValue  : {
        default: text('Inactive value', '0')
      },
      activeColor: {
        default: color('Active color', '#73c3e6')
      },
      inactiveColor: {
        default: color('Inactive color', '#a3b2b8')
      },
      name: {
        default: text('Name', '')
      }
    },
    methods: {
      handleChange: action('change')
    }
  }),
  {
    notes: {
      markdown: switchMd
    }
  }
)
