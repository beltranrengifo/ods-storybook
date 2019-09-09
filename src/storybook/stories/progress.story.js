import { storiesOf } from '@storybook/vue'
import { number, optionsKnob, boolean } from '@storybook/addon-knobs'
import progressMd from '../md/progress.md'
const stories = storiesOf('ODS/Progress', module)

const templateDefault = `
<storybook-template>
  <ods-progress
    :percentage='percentage'
    :type='type'
    :stroke-width='strokeWidth'
    :text-inside='textInside'
    :status='status'
    :width='width'
    :show-text='showText'>
  </ods-progress>
</storybook-template>
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    props: {
      percentage: {
        default: number('Percentage', 0, {
          range: true,
          min: 0,
          max: 100,
          step: 1,
        })
      },
      type: {
        default: optionsKnob('Type', {line: 'line', circle: 'circle'}, 'line', { display: 'select' })
      },
      strokeWidth: {
        default: number('Stroke width', 6)
      },
      textInside: {
        default: boolean('Text inside', false)
      },
      status: {
        default: optionsKnob('Status', {success: 'success', exception: 'exception'}, 'success', { display: 'select' })
      },
      width: {
        default: number('Width', 126)
      },
      showText: {
        default: boolean('Show text', true)
      }
    }
  }),
  {
    notes: {
      markdown: progressMd
    }
  }
)
