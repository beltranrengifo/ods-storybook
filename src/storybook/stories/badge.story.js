import { storiesOf } from '@storybook/vue'
import { boolean, text, select, number } from '@storybook/addon-knobs'
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
      methods: {
      },
      props: {
        value: {
          default: text('Value (as String)', '4')
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
    methods: {
    },
    props: {
      type: {
        default: select('Type', types, 'secondary')
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
