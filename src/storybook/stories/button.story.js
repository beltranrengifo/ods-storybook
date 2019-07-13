import { storiesOf } from '@storybook/vue'
import { text, boolean, select, optionsKnob } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { capitalize } from '../utils/functions'
import buttonMd from '../md/button.md'
import getIcons from '../utils/icons'
const icons = getIcons('ods-icon-')
const stories = storiesOf('ODS/Button', module)

const types = [
  'primary',
  'secondary',
  'text',
  'success',
  'info',
  'warning',
  'danger'
]

types.forEach(type => {
  const template = `
<storybook-template
  :negative="negative">
  <ods-button
    @click="handleClick"
    type="${type}"
    :disabled="disabled"
    :circle="circle"
    :loading="loading"
    :icon="icon.includes('ods-icon') ? icon : ''"
    :size="size"
    :full="full"
    :negative="negative">
    {{ text }}
  </ods-button>
</storybook-template>
  `

  stories.add(
    capitalize(type),
    () => ({
      template: template,
      methods: {
        handleClick: action('clicked')
      },
      props: {
        text: {
          default: text('Text', 'Welcome to ODS')
        },
        size: {
          default: select('Size', ['default', 'medium', 'small'], 'default')
        },
        disabled: {
          default: boolean('Disabled', false)
        },
        loading: {
          default: boolean('Loading', false)
        },
        icon: {
          default: optionsKnob('Icon', icons, '', { display: 'select' })
        },
        circle: {
          default: boolean('Circle', false)
        },
        full: {
          default: boolean('Full width', false)
        },
        negative: {
          default: boolean('Negative', false)
        }
      }
    }),
    {
      notes: {
        markdown: buttonMd
      }
    }
  )
})
