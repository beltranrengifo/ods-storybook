import { storiesOf } from '@storybook/vue'
import { boolean, number, text } from '@storybook/addon-knobs'
import kpiMd from '../md/kpi.md'
const stories = storiesOf('ODS/Kpi', module)

const templateDefault = `
<storybook-template>
  <ods-kpi
    :ammount="ammount"
    :unit="unit"
    :percentage="percentage"
    :triangle="triangle"
    :href="href"
    :resume="resume">
    <span
      slot="title">
      {{ title }}
    </span>
  </ods-kpi>
</storybook-template>
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    props: {
      title: {
        default: text('Title', 'KPI title')
      },
      resume: {
        default: text('Resume', 'Lorem ipsum dolor')
      },
      ammount: {
        default: number('Ammount', 3.45)
      },
      unit: {
        default: text('Unit', '%')
      },
      percentage: {
        default: number('Percentage', -20)
      },
      triangle: {
        default: boolean('Use triangle', true)
      },
      href: {
        default: text('Href', '#')
      }
    }
  }),
  {
    notes: {
      markdown: kpiMd
    }
  }
)
