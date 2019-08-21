import { storiesOf } from '@storybook/vue'
import { boolean, select, text, array } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { capitalize } from '../utils/functions'
import datepickerMd from '../md/datepicker.md'
const stories = storiesOf('ODS/Datepicker', module)

const types = [
  { type: 'year', name: 'year' },
  { type: 'month', name: 'month' },
  { type: 'date', name: 'date' },
  { type: 'datetime', name: 'date and time' },
  { type: 'week', name: 'week' },
  { type: 'daterange', name: 'date range' },
  { type: 'datetimerange', name: 'date and time range' }
]

const sizes = ['micro', 'deci', 'hecto', 'mega', 'exa']

const aligns = ['left', 'center', 'right']

const d = new Date()
const mm = d.getMonth() + 1
const dd = d.getDate()
const yy = d.getFullYear()
const defaultDate = `${yy}-${mm}-${dd}`

const options = {
  disabledDate (time) {
    return time.getTime() > Date.now()
  },
  shortcuts: [
    {
      text: 'Today',
      onClick (picker) {
        picker.$emit('pick', new Date())
      }
    },
    {
      text: 'Yesterday',
      onClick (picker) {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24)
        picker.$emit('pick', date)
      }
    },
    {
      text: 'A week ago',
      onClick (picker) {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
        picker.$emit('pick', date)
      }
    }
  ]
}

types.forEach(type => {
  const templateDefault = `
<storybook-template>
  <ods-date-picker
    v-model="dateValue"
    type="${type.type}"
    :placeholder="placeholder"
    start-placeholder="Start date"
    end-placeholder="End date"
    :picker-options="applyPickerOptions ? datepickerOptions : null"
    :size="size"
    :format="format"
    :range-separator="rangeSeparator"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :align="align"
    :unlink-panels="unlinkPanels"
    :only-one-calendar="onlyOneCalendar"
    :default-value="defaultValue"
    :calendar-always-visible="calendarAlwaysVisible"
    :hidden-inputs="hiddenInputs"
    :default-time="defaultTime"
    @change="handleChange"
    :key="componentKey">
    </ods-date-picker>
    <ods-tag
      class="ods-m-6"
      v-if="dateValue"
      type="secondary">{{dateValue}}</ods-tag>
</storybook-template>
  `
  stories.add(
    capitalize(type.name),
    () => ({
      template: templateDefault,

      data () {
        return {
          dateValue: null,
          reRenderWatchers: ['applyPickerOptions', 'rangeSeparator', 'align', 'unlinkPanels', 'onlyOneCalendar', 'calendarAlwaysVisible']
        }
      },

      props: {
        placeholder: {
          default: !type.name.includes('range') ? text('Placeholder', `Select ${type.name}`) : null
        },
        datepickerOptions: {
          type: Object,
          default: () => options
        },
        applyPickerOptions: {
          default: boolean('Use options', false)
        },
        size: {
          default: select('Size', sizes, '')
        },
        format: {
          default: text('Format (ver date formats)', '')
        },
        rangeSeparator: {
          default: type.type.includes('range') ? text('Range separator', 'To') : null
        },
        startPlaceholder: {
          default: type.type.includes('range') ? text('Start placeholder', 'Inicio') : null
        },
        endPlaceholder: {
          default: type.type.includes('range') ? text('End placeholder', 'Fin') : null
        },
        align: {
          default: select('Align', aligns, 'left')
        },
        unlinkPanels: {
          default: type.type.includes('range') ? boolean('Unlink panels (panel follow panel)', false) : null
        },
        onlyOneCalendar: {
          default: type.type.includes('range') ? boolean('Only one calendar', false) : null
        },
        defaultValue: {
          default: text('Default value', defaultDate)
        },
        calendarAlwaysVisible: {
          default: boolean('Calendar always visible', false)
        },
        hiddenInputs: {
          default: boolean('Hidden inputs', false)
        },
        defaultTime: {
          default: type.type === 'datetime' ? text('Default time', '00:00:00') : type.type === 'datetimerange' ? array('Default time', ['00:00:00', '23:59:59']) : null
        }
      },

      watch: {
        'componentKey' (val) {
          const pickerPanel = this.$root.$el.querySelector('.ods-picker-panel')
          pickerPanel && pickerPanel.remove()
        }
      },

      methods: {
        handleChange: action('change')
      }
    }),
    {
      notes: {
        markdown: datepickerMd
      }
    }
  )
})
