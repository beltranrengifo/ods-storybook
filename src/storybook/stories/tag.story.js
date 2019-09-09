import { storiesOf } from '@storybook/vue'
import { optionsKnob, boolean, color } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import tagMd from '../md/tag.md'
const stories = storiesOf('ODS/Tag', module)

const templateDefault = `
<storybook-template>
  <ods-tag
    :type='type'
    :closable='closable'
    :disable-transitions='disableTransitions'
    :hit='hit'
    :color='color'
    :size='size'
    @close='handleClose'>
    {{ type }}
  </ods-tag>
</storybook-template>
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    props: {
      type: {
        default: optionsKnob('Type', {
          success: 'success',
          info: 'info',
          warning: 'warning',
          danger: 'danger'
        }, 'info', { display: 'select' })
      },
      closable: {
        default: boolean('Closable', false)
      },
      disableTransitions: {
        default: boolean('Disable transitions', false)
      },
      hit: {
        default: boolean('Hit', false)
      },
      color: {
        default: color('Color', '')
      },
      size: {
        default: optionsKnob('Size', {
          medium: 'medium',
          small: 'small',
          mini: 'mini'
        }, '', { display: 'select' })
      }
    },
    methods: {
      handleClose: action('close')
    }
  }),
  {
    notes: {
      markdown: tagMd
    }
  }
)
