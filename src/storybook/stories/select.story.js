import { storiesOf } from '@storybook/vue'
import { text, number, optionsKnob, boolean } from '@storybook/addon-knobs'
import selectMd from '../md/select.md'
import { action } from '@storybook/addon-actions'
import sizes from '../utils/sizes'
const stories = storiesOf('ODS/Select', module)
const selectAttributes = 'Select Attributes'
const optionAttributes = 'Option Attributes'
const optionGroupAttributes = 'Option Group Attributes'

const templateDefault = `
<storybook-template>
  <ods-select
    v-model='value'
    :multiple='multiple'
    :disabled='disabled'
    :collapse-tags='collapseTags'
    :size='size'
    :clearable='clearable'
    :multiple-limit='multipleLimit'
    :name='name'
    :auto-complete='autocomplete'
    :placeholder='placeholder'
    :filterable='filterable'
    :allow-create='allowCreate'
    :remote='remote'
    :loading='loading'
    :loading-text='loadingText'
    :no-match-text='noMatchText'
    :no-data-text='noDataText'
    :popper-class='popperClass'
    :reserve-keyword='reserveKeyword'
    :default-first-option='defaultFirstOption'
    :popper-append-to-body='popperAppendToBody'
    :automatic-dropdown='automaticDropdown'
    @change='handleChange'
    @visible-change='handleVisibleChange'
    @remove-tag='handleRemoveTag'
    @clear='handleClear'
    @blur='handleBlur'
    @focus='handleFocus'>
    <ods-option
      v-for='item in options'
      :key='item.value'
      :label='item.label'
      :value='item.value'
      :disabled='disabledOption'>
    </ods-option>
  </ods-select>
</storybook-template>
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    data () {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    },
    watch: {
      '_props.multiple': function (newVal, oldVal){
        if (newVal) {
          this.value = []
        } else {
          this.value = ''
        }
        
      }
    },
    props: {
      // Select Attributes
      multiple: {
        default: boolean('Multiple', false, selectAttributes)
      },
      disabled: {
        default: boolean('Disabled', false, selectAttributes)
      },
      collapseTags: {
        default: boolean('Collapse tags (multiple has to be true)', false, selectAttributes)
      },
      valueKey: {
        default: text('Value key(necessary when value is an object)', 'value', selectAttributes)
      },
      size: {
        default: optionsKnob('Size', sizes, '', { display: 'select' }, selectAttributes)
      },
      clearable: {
        default: boolean('Clearable', false, selectAttributes)
      },
      multipleLimit: {
        default: number('Multiple limit', 0, {}, selectAttributes)
      },
      name: {
        default: text('Name', '', selectAttributes)
      },
      autocomplete: {
        default: optionsKnob('Autocomplete', { 'on': 'on', 'off': 'off' }, 'off', { display: 'select' }, selectAttributes)
      },
      placeholder: {
        default: text('Placeholder', 'Select', selectAttributes)
      },
      filterable: {
        default: boolean('Filterable', false, selectAttributes)
      },
      allowCreate: {
        default: boolean('Allow create(filterable has to be true)', false, selectAttributes)
      },
      remote: {
        default: boolean('Remote', false, selectAttributes)
      },
      loading: {
        default: boolean('Loading', false, selectAttributes)
      },
      loadingText: {
        default: text('Loading text', 'Loading', selectAttributes)
      },
      noMatchText: {
        default: text('No match text', 'No matching data', selectAttributes)
      },
      noDataText: {
        default: text('No data text', 'No data', selectAttributes)
      },
      popperClass: {
        default: text('Popper class', '', selectAttributes)
      },
      reserveKeyword: {
        default: boolean('Reserve keyword', false, selectAttributes)
      },
      defaultFirstOption: {
        default: boolean('Default first option(use with filterable or remote)', false, selectAttributes)
      },
      popperAppendToBody: {
        default: boolean('Popper append to body', true, selectAttributes)
      },
      automaticDropdown: {
        default: boolean('Automatic dropdown(for non-filterable Select)', false, selectAttributes)
      },
      // Option Group Attributes
      labelOptionGrupo: {
        default: text('Option Group Label', '', optionGroupAttributes)
      },
      disabledOptionGroup: {
        default: boolean('Option Group Disabled', false, optionGroupAttributes)
      },
      // Option Attributes
      valueOption: {
        default: text('Value', '', optionAttributes)
      },
      label: {
        default: text('Option Label', '', optionAttributes)
      },
      disabledOption: {
        default: boolean('Option Disabled', false, optionAttributes)
      }
    },
    methods: {
      handleChange: action('change'),
      handleVisibleChange: action('visibility changed'),
      handleRemoveTag: action('tag removed'),
      handleClear: action('clear'),
      handleBlur: action('blur'),
      handleFocus: action('focus')
    }
  }),
  {
    notes: {
      markdown: selectMd
    }
  }
)
