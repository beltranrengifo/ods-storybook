import { storiesOf } from '@storybook/vue'
import { boolean, text, object } from '@storybook/addon-knobs'
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
  { type: 'datetimerange', name: 'date and time range' },
  { type: 'daterange', name: 'date range' }
]

types.forEach(type => {
  const templateDefault = `
<storybook-template>
  <ods-date-picker
    v-model="dateValue"
    type="${type.type}"
    placeholder="Select ${type.name}"
    start-placeholder="Start date"
    end-placeholder="End date"
    :picker-options="datepickerOptions">
    </ods-date-picker>
</storybook-template>
  `
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
  stories.add(
    capitalize(type.name),
    () => ({
      template: templateDefault,
      data () {
        return {
          dateValue: null
        }
      },
      methods: {
      },
      props: {
        datepickerOptions: {
          default: object('Options', options)
        }
      }
    }),
    {
      notes: {
        markdown: datepickerMd
      }
    }
  )
})
