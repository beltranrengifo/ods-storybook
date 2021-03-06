import { storiesOf } from '@storybook/vue'
import { boolean, text, number, optionsKnob } from '@storybook/addon-knobs'
import { capitalize } from '../utils/functions'
import badgeMd from '../md/badge.md'
const stories = storiesOf('ODS/Badge', module)

const types = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'info'
]

const typesObj = {
  Primary: 'primary',
  Secondary: 'secondary',
  Success: 'success',
  Warning: 'warning',
  Danger: 'danger',
  Info: 'info'
}

types.forEach(type => {
  const templateDefault = `
  <storybook-template>
    <ods-badge
      :value="value || 4"
      type="${type}"
      :isDot="isDot"
      :isLine="isLine"/>
  </storybook-template>
  `
  stories.add(
    capitalize(type),
    () => ({
      template: templateDefault,
      props: {
        value: {
          default: text('Value (as String)', '4')
        },
        isDot: {
          default: boolean('Dot', false)
        },
        isLine: {
          default: type === 'primary' ? boolean('Line', false) : null
        }
      }
    }),
    {
      notes: {
        markdown: badgeMd
      }
    }
  )
})

const templateWithElement = `
  <storybook-template>
    <ods-badge
      :value="value"
      :type="type"
      :isDot="isDot"
      :isLine="isLine"
      :max="max">
      <ods-button>Comments</ods-button>
    </ods-badge>
  </storybook-template>
  `
stories.add(
  'With element',
  () => ({
    template: templateWithElement,
    props: {
      type: {
        default: optionsKnob('Type', typesObj, 'secondary', { display: 'select' })
      },
      value: {
        default: number('Value (as Number)', 4)
      },
      max: {
        default: number('Max (works only if value is Number)', 10)
      },
      isDot: {
        default: boolean('Dot', false)
      },
      isLine: {
        default: boolean('Line (only primary)', false)
      }
    }
  }),
  {
    notes: {
      markdown: badgeMd
    }
  }
)
