import { storiesOf } from '@storybook/vue'
import { boolean, text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import cascaderMd from '../md/cascader.md'
import options from '../utils/cascader-options'
const stories = storiesOf('ODS/Cascader', module)

const templateDefault = `
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
      :changeOnSelect="changeOnSelect">
    </ods-cascader>
  </storybook-template>
  <!-- :key needed only for this demo -->
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    props: {
      cascaderLabel: {
        default: text('Label text', 'Cascader label')
      },
      showCascaderLabel: {
        default: boolean('Show label', true)
      },
      expandTrigger: {
        default: select('Trigger', ['click', 'hover'], 'click')
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
      }
    },
    data () {
      return {
        selectedOptions: [],
        options: options,
        watchers: ['expandTrigger', 'changeOnSelect']
      }
    },
    mounted () {
      console.log(JSON.stringify(options))
    }
  }),
  {
    notes: {
      markdown: cascaderMd
    }
  }
)
