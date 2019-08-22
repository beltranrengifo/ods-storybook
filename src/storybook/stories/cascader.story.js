import { storiesOf } from '@storybook/vue'
import { boolean, text, optionsKnob } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import cascaderMd from '../md/cascader.md'
import options from '../utils/cascader-options'
const stories = storiesOf('ODS/Cascader', module)

const defaultTemplate = `
<storybook-template>
  <ods-cascader
    :key="componentKey"
    :options="options"
    v-model="selectedOptions"
    @change="handleChange"
    :cascaderLabel="cascaderLabel"
    :showCascaderLabel="showCascaderLabel"
    :expandTrigger="expandTrigger"
    :showAllLevels="showAllLevels"
    :changeOnSelect="changeOnSelect"
    :filterable="filterable"
    :clearable="clearable">
  </ods-cascader>
</storybook-template>
  `

stories.add(
  'Default',
  () => ({
    template: defaultTemplate,
    props: {
      cascaderLabel: {
        default: text('Label text', 'Cascader label')
      },
      showCascaderLabel: {
        default: boolean('Show label', true)
      },
      expandTrigger: {
        default: optionsKnob('Trigger', { Click: 'click', Hover: 'hover' }, 'click', { display: 'select' })
      },
      disabled: {
        default: boolean('Disabled option', true)
      },
      showAllLevels: {
        default: boolean('Show all levels', true)
      },
      defaultValue: {
        default: boolean('Default value', false)
      },
      changeOnSelect: {
        default: boolean('Change on select', false)
      },
      filterable: {
        default: boolean('Filterable', false)
      },
      clearable: {
        default: boolean('Clearable', false)
      }
    },
    methods: {
      handleChange: action(this)
    },
    watch: {
      'disabled' () {
        options[0].disabled = !options[0].disabled
      },
      'defaultValue' (val) {
        this.selectedOptions = val ? ['component', 'data', 'tag'] : []
      },
      // this watcher does not render properly within the general mixin
      'changeOnSelect' () {
        this.$forceUpdate()
      }
    },
    data () {
      return {
        selectedOptions: [],
        options: options,
        reRenderWatchers: ['expandTrigger']
      }
    }
  }),
  {
    notes: {
      markdown: cascaderMd
    }
  }
)
