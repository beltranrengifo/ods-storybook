import { storiesOf } from '@storybook/vue'
import { text, number, optionsKnob, boolean } from '@storybook/addon-knobs'
import stepsMd from '../md/steps.md'
import getIcons from '../utils/icons'
const icons = getIcons('ods-icon-')
const stories = storiesOf('ODS/Steps', module)

const direction = {
  vertical: 'vertical',
  horizontal: 'horizontal'
}

const status = {
  wait: 'wait',
  process: 'process',
  finish: 'finish',
  error: 'error',
  success: 'success'
}

const templateDefault = `
<storybook-template>
  <ods-steps
    :dots='dots'
    :space='space'
    :direction='direction'
    :active='active'
    :process-status='processStatus'
    :finish-status='finishStatus'
    :align-center='alignCenter'
    :simple='simple'>
    <ods-step
      :title='title + " 1"'
      :description='description'
      :icon='icon'
      :status='status'></ods-step>
    <ods-step
      :title='title + " 2"'
      :description='description'
      :icon='icon'
      :status='status'></ods-step>
    <ods-step
      :title='title + " 3"'
      :description='description'
      :icon='icon'
      :status='status'></ods-step>
  </ods-steps>
</storybook-template>
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    data () {
      return {
        active: 0
      }
    },
    watch: {
      '_props.activeItem': function (newVal, oldVal){
        this.active = newVal
      }
    },
    props: {
      dots: {
        default: boolean('Dots', false)
      },
      space: {
        default: number('Space')
      },
      direction: {
        default: optionsKnob('Direction', direction, 'horizontal', { display: 'select' })
      },
      activeItem: {
        default: number('Active', 0)
      },
      processStatus: {
        default: optionsKnob('Process status', status, 'process', { display: 'select' })
      },
      finishStatus: {
        default: optionsKnob('Finish status', status, 'finish', { display: 'select' })
      },
      alignCenter: {
        default: boolean('Align center', false)
      },
      simple: {
        default: boolean('Simple', false)
      },
      // Attr
      title: {
        default: text('Title', 'Step')
      },
      description: {
        default: text('Description', '')
      },
      icon: {
        default: optionsKnob('Icon', icons, '', { display: 'select' })
      },
      status: {
        default: optionsKnob('Status', status, '', { display: 'select' })
      }
    }
  }),
  {
    notes: {
      markdown: stepsMd
    }
  }
)
