import { storiesOf } from '@storybook/vue'
import { text, number, object, optionsKnob, boolean } from '@storybook/addon-knobs'
import transitions from '../utils/transitions'
import placement from '../utils/placement'
import tooltipMd from '../md/tooltip.md'
const stories = storiesOf('ODS/Tooltip', module)

const templateDefault = `
<storybook-template>
  <ods-tooltip
    :effect='effect'
    :content='content'
    :placement='placement'
    :value='value'
    :disabled='disabled'
    :offset='offset'
    :transition='transition'
    :visible-arrow='visibleArrow'
    :popper-options='popperOptions'
    :open-delay='openDelay'
    :manual='manual'
    :popper-class='popperClass'
    :enterable='enterable'
    :hide-after='hideAfter'
    :key="componentKey">
    <ods-button :style='{ marginLeft: "120px" }'>{{ placement }}</ods-button>
  </ods-tooltip>
</storybook-template>
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    data () {
      return {
        reRenderWatchers: ['placement', 'transition']
      }
    },
    props: {
      effect: {
        default: optionsKnob('Effect', {
          dark: 'dark',
          light: 'light',
        }, 'dark', { display: 'select' })
      },
      content: {
        default: text('Content', 'tooltip info')
      },
      placement: {
        default: optionsKnob('Placement', placement, 'bottom', { display: 'select' })
      },
      value: {
        default: boolean('Value(v-model)', false)
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
      openDelay: {
        default: number('Open delay', 0)
      },
      manual: {
        default: boolean('Manual', false)
      },
      popperClass: {
        default: text('Popper class', '')
      },
      enterable: {
        default: boolean('Enterable', true)
      },
      hideAfter: {
        default: number('Hide after', 0)
      }
    }
  }),
  {
    notes: {
      markdown: tooltipMd
    }
  }
)
