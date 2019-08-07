import { storiesOf } from '@storybook/vue'
import { text, boolean } from '@storybook/addon-knobs'
import checkboxMd from '../md/checkbox.md'
const stories = storiesOf('ODS/Checkbox', module)

const templateDefault = `
<storybook-template>
  <ods-checkbox
    v-model="checkboxModel"
    :disabled="disabled"
    checkboxLabel="my-checkbox"
    :key="componentKey">
    {{ text }}
  </ods-checkbox>
</storybook-template>
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    data () {
      return {
        checkboxModel: false
      }
    },
    props: {
      text: {
        default: text('Text', 'My checkbox')
      },
      disabled: {
        default: boolean('Disabled', false)
      }
    }
  }),
  {
    notes: {
      markdown: checkboxMd
    }
  }
)
