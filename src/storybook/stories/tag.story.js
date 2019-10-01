import { storiesOf } from '@storybook/vue'
import { optionsKnob, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import tagMd from '../md/tag.md'
import types from '../utils/types'
const stories = storiesOf('ODS/Tag', module)

const templateDefault = `
<storybook-template>
  <ods-tag
    :type='type'
    :closable='closable'
    :disable-transitions='disableTransitions'
    :hit='hit'
    :size='size'
    @close='handleClose'>
    {{ type ? type : 'default' }}
  </ods-tag>
</storybook-template>
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    props: {
      type: {
        default: optionsKnob('Type', types, 'info', { display: 'select' })
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
      size: {
        default: optionsKnob('Size', {
          default: '',
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
