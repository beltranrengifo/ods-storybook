import { storiesOf } from '@storybook/vue'
import { boolean, text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import cascaderMd from '../md/cascader.md'
import options from '../utils/cascader-options'
import { camelToText } from '../utils/functions'
const stories = storiesOf('ODS/Cascader', module)

const templates = {
  defaultTemplate: `
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
    `,
  customTemplate: `
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
    <template slot-scope="{ node, data }">
      <span>{{ data.label }} pepe</span>
      <span> ({{ data.children.length }}) pepe </span>
    </template>
  </ods-cascader>
</storybook-template>
    `
}

Object.keys(templates).forEach(e => {
  stories.add(
    camelToText(e),
    () => ({
      template: templates[e],
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
        }
      },
      data () {
        return {
          selectedOptions: [],
          options: options,
          watchers: ['expandTrigger', 'changeOnSelect']
        }
      }
    }),
    {
      notes: {
        markdown: cascaderMd
      }
    }
  )
})
