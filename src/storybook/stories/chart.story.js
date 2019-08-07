import { storiesOf } from '@storybook/vue'
import { number, boolean, text } from '@storybook/addon-knobs'
import chartMd from '../md/chart.md'
import { camelToText } from '../utils/functions'
const stories = storiesOf('ODS/Chart', module)

const gaugeTemplate = `
<storybook-template>
  <ods-chart
    type="gauge"
    :data="gaugeData"
    :size="size"
    :text="text"
    :symbol="symbol"
    :key="componentKey"/>
</storybook-template>
  `

stories.add(
  'Gauge',
  () => ({
    template: gaugeTemplate,
    data () {
      return {
        gaugeData: {
          series: [
            {
              meta: 'Value One',
              value: 30
            }
          ]
        },
        reRenderWatchers: ['size', 'text', 'symbol']
      }
    },
    props: {
      size: {
        default: number('Size', 120)
      },
      text: {
        default: boolean('Show value', true)
      },
      symbol: {
        default: text('Symbol', '%')
      }
    }
  }),
  {
    notes: {
      markdown: chartMd
    }
  }
)

const types = [
  'singleLine',
  'singleBar'
]

types.forEach(type => {
  const template = `
  <storybook-template>
    <ods-chart
      type="${type}"
      :data="lineData"
      :symbol="symbol"
      :average="average"
      :key="componentKey"/>
  </storybook-template>
    `

  stories.add(
    camelToText(type),
    () => ({
      template: template,
      data () {
        return {
          lineData: {
            labels: ['label', 'label', 'label'],
            series: [
              [
                { meta: 'valor 1', value: 300 },
                { meta: 'valor 1', value: 200 },
                { meta: 'valor 1', value: 400 }
              ]
            ]
          },
          reRenderWatchers: ['symbol', 'average']
        }
      },
      props: {
        symbol: {
          default: text('Symbol', 'dB')
        },
        average: {
          default: boolean('Show average', true)
        }
      }
    }),
    {
      notes: {
        markdown: chartMd
      }
    }
  )
})

const overlapTemplate = `
<storybook-template>
  <ods-chart
    type="singleBar"
    :data="lineData"/>
  <ods-chart
    type="singleLine"
    :data="lineData2"
    :overlap="overlap"/>
</storybook-template>
  `

stories.add(
  'Overlap',
  () => ({
    template: overlapTemplate,
    data () {
      return {
        lineData: {
          labels: ['label', 'label', 'label'],
          series: [
            [
              { meta: 'valor 1', value: 300 },
              { meta: 'valor 1', value: 600 },
              { meta: 'valor 1', value: 400 }
            ]
          ]
        },
        lineData2: {
          labels: ['label', 'label', 'label'],
          series: [
            [
              { meta: 'valor 1', value: 100 },
              { meta: 'valor 1', value: 400 },
              { meta: 'valor 1', value: 200 }
            ]
          ]
        }
      }
    },
    props: {
      overlap: {
        default: boolean('Overlap', true)
      }
    }
  }),
  {
    notes: {
      markdown: chartMd
    }
  }
)
