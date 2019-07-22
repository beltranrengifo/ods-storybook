import { storiesOf } from '@storybook/vue'
import { boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { capitalize } from '../utils/functions'
import alarmMd from '../md/alert.md'
const stories = storiesOf('ODS/Alert', module)

const types = [
  'success',
  'info',
  'warning',
  'error'
]

types.forEach(type => {
  const templateDefault = `
<storybook-template>
  <ods-alert
    :title="title || '${capitalize(type)} alert'"
    type="${type}" 
    :width="width"
    :closable="closable"
    :closeText="closeText"
    :showIcon="showIcon"
    :description="description"
    @close="handleClose">
  </ods-alert>
</storybook-template>
  `
  stories.add(
    capitalize(type),
    () => ({
      template: templateDefault,
      methods: {
        handleClose: action('closed')
      },
      props: {
        title: {
          default: text('title', `${capitalize(type)} alert`)
        },
        width: {
          default: text('Width', '400')
        },
        closable: {
          default: boolean('Closable', true)
        },
        closeText: {
          default: text('Close text', '')
        },
        showIcon: {
          default: boolean('Show icon', false)
        },
        description: {
          default: text('Description', '')
        }
      }
    }),
    {
      notes: {
        markdown: alarmMd
      }
    }
  )
})
