import { storiesOf } from '@storybook/vue'
import { text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import OdsButton from '@onesait/onesait-ds/lib/button'
import iconsArray from '@onesait/onesait-ds/lib/icon.json'
import { capitalize } from '../utils/functions'
import demo from '../md/demo.md'
import copyCodeBlock from '@pickra/copy-code-block'
import htmlDemo from '../samples/button.html'
import StorybookTemplate from '../utils/StorybookTemplate'

const icons = iconsArray.map(e => `ods-icon-${e}`)
icons.unshift('No icon')

const stories = storiesOf('ODS/Button', module)

const types = [
  'primary',
  'secondary',
  'text'
]

types.forEach(type => {
  const template = `
    <storybook-template
      :negative="negative"
      :codeSample="${htmlDemo}">
      <ods-button
        @click="handleClick"
        type="${type}"
        :disabled="disabled"
        :circle="circle"
        :loading="loading"
        :icon="icon"
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
      components: {
        'ods-button': OdsButton,
        'storybook-template': StorybookTemplate
      },
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
        iconProp: {
          default: select('Icon', icons, '')
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
      },
      computed: {
        icon () {
          return this.iconProp.includes('ods-icon') ? this.iconProp : ''
        }
      }
    }),
    {
      notes: demo
    }
  )
})
