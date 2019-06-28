import { storiesOf } from '@storybook/vue'
import { text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import OdsButton from '@onesait/onesait-ds/lib/button'
import iconsArray from '@onesait/onesait-ds/lib/icon.json'
import { capitalize } from '../utils/functions'
import OdsButtonMd from '../md/button.md'

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
    <div
      class="ods-storybook__basic-template"
      :class="{'is-negative': negative}">
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
    </div>
  `

  stories.add(
    capitalize(type),
    () => ({
      components: {
        'ods-button': OdsButton
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
        circle: {
          default: boolean('Circle', false)
        },
        iconProp: {
          default: select('Icons', icons, '')
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
      notes: {
      }
    })
})
