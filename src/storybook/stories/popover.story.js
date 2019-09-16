import { storiesOf } from '@storybook/vue'
import { text, number, object, optionsKnob, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import transitions from '../utils/transitions'
import placement from '../utils/placement'
import popoverMd from '../md/popover.md'
const stories = storiesOf('ODS/Popover', module)

const templateDefault = `
<storybook-template>
  <ods-popover
    :trigger='trigger'
    :title='title'
    :content='content'
    :width='width'
    :placement='placement'
    :disabled='disabled'
    :value='value'
    :offset='offset'
    :transition='transition'
    :visible-arrow='visibleArrow'
    :popper-options='popperOptions'
    :popper-class='popperClass'
    :open-delay='openDelay'
    @show='handleShow'
    @after-enter='handleAfterEnter'
    @hide='handleHide'
    @after-leave='handleAfterLeave'
    :key='componentKey'>
    <ods-button
      :style='{ marginLeft: "120px" }'
      slot='reference'
      > {{ trigger }} to activate
    </ods-button>
  </ods-popover>
</storybook-template>
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    data () {
      return {
        value: false,
        reRenderWatchers: ['trigger', 'placement', 'transition']
      }
    },
    props: {
      trigger: {
        default: optionsKnob('Trigger', {
          click: 'click',
          focus: 'focus',
          hover: 'hover',
          manual: 'manual'
        }, 'click', { display: 'select' })
      },
      title: {
        default: text('Title', 'Title')
      },
      content: {
        default: text('Content', 'this is content')
      },
      width: {
        default: number('Width', 150)
      },
      placement: {
        default: optionsKnob('Placement', placement, 'bottom', { display: 'select' })
      },
      disabled: {
        default: boolean('Disabled', false)
      },
      offset: {
        default: number('Offset', 0)
      },
      transition: {
        default: optionsKnob('Transition', transitions, 'fade-in-linear', { display: 'select' })
      },
      visibleArrow: {
        default: boolean('Visible arrow', true)
      },
      popperOptions: {
        default: object('Popper options', { boundariesElement: 'body', gpuAcceleration: false })
      },
      popperClass: {
        default: text('Popper class', '')
      },
      openDelay: {
        default: number('Open delay (trigger has to be hover)', 0)
      }
    },
    methods: {
      handleShow: action('handle show'),
      handleAfterEnter: action('handle after enter'),
      handleHide: action('handle hide'),
      handleAfterLeave: action('handle after leave')
    }
  }),
  {
    notes: {
      markdown: popoverMd
    }
  }
)