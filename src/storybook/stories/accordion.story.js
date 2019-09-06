import { storiesOf } from '@storybook/vue'
import { boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import accordionMd from '../md/accordion.md'
const stories = storiesOf('ODS/Accordion', module)

const templateDefault = `
<storybook-template>
  <ods-accordion
    v-model="activeNames"
    @change="handleChange"
    :accordion="accordion">
    <ods-accordion-item title="Consistency" name="1">
      <p>Consistent with real life. Consistent within interface.</p>
    </ods-accordion-item>
    <ods-accordion-item title="Feedback" name="2">
      <p>Operation feedback. Visual feedback.</p>
    </ods-accordion-item>
    <ods-accordion-item title="Efficiency" name="3">
      <p>Simplify the process. Definite and clear. Easy to identify.</p>
    </ods-accordion-item>
    <ods-accordion-item title="Controllability" name="4">
      <p>Decision making. Controlled consequences.</p>
    </ods-accordion-item>
  </ods-accordion>
</storybook-template>
`
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    data () {
      return {
        activeNames: ['1']
      }
    },
    methods: {
      handleChange: action('changed')
    },
    props: {
      accordion: {
        default: boolean('Accordion (one panel at once)', false)
      }
    }
  }),
  {
    notes: {
      markdown: accordionMd
    }
  }
)

const templateCustomTitle = `
<storybook-template>
  <ods-accordion
    v-model="activeNames"
    @change="handleChange"
    :accordion="accordion">
    <ods-accordion-item name="1">
      <template slot="title">
        <ods-tooltip
          class="item"
          effect="dark"
          content="Custom Title Slot"
          placement="top-start">
          <span>Title with <strong> custom content</strong>
            <ods-icon name="arrow-right" size="16" />
          </span>
        </ods-tooltip>
      </template>
      <p>Consistent with real life. Consistent within interface.</p>
    </ods-accordion-item>
    <ods-accordion-item title="Feedback" name="2">
      <p>Operation feedback. Visual feedback.</p>
    </ods-accordion-item>
  </ods-accordion>
</storybook-template>
`

stories.add(
  'Custom Title',
  () => ({
    template: templateCustomTitle,
    data () {
      return {
        activeNames: ['1']
      }
    },
    methods: {
      handleChange: action('changed')
    },
    props: {
      accordion: {
        default: boolean('Accordion (one panel at once)', false)
      }
    }
  }),
  {
    notes: {
      markdown: accordionMd
    }
  }
)
