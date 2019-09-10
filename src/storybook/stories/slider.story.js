import { storiesOf } from '@storybook/vue'
import { text, number, boolean, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import sliderMd from '../md/slider.md'
const stories = storiesOf('ODS/Slider', module)

const templateDefault = `
<storybook-template>
  <ods-slider
    v-model='value'
    :min='min'
    :max='max'
    :disabled='disabled'
    :step='step'
    :show-input='showInput'
    :show-input-controls='showInputControls'
    :show-stops='showStops'
    :show-tooltip='showTooltip'
    :range='range'
    :vertical='vertical'
    :height='height'
    :label='label'
    :debounce='debounce'
    :tooltip-class='tooltipClass'
    @change='handleChange'>
  </ods-slider>
</storybook-template>
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    data () {
      return {
        value: 0
      }
    },
    props: {
      min: {
        default: number('Min', 0)
      },
      max: {
        default: number('Max', 100)
      },
      disabled: {
        default: boolean('Disabled', false)
      },
      step: {
        default: number('Step', 1)
      },
      showInput: {
        default: boolean('Show input (range has to be false)', false)
      },
      showInputControls: {
        default: boolean('Show input controls (showInput has to be true)', true)
      },
      showStops: {
        default: boolean('Show stops', false)
      },
      showTooltip: {
        default: boolean('Show tooltip', true)
      },
      range: {
        default: boolean('Range', false)
      },
      vertical: {
        default: boolean('Vertical', false)
      },
      height: {
        default: text('Height (required in vertical mode in px)', '')
      },
      label: {
        default: text('Label', '')
      },
      debounce: {
        default: number('Debounce (showInput has to be true)', 300)
      },
      tooltipClass: {
        default: text('Tooltip class', '')
      }
    },
    methods: {
      handleChange: action('change')
    }
  }),
  {
    notes: {
      markdown: sliderMd
    }
  }
)
