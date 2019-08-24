import { storiesOf } from '@storybook/vue'
import { optionsKnob } from '@storybook/addon-knobs'
import iconMd from '../md/icon.md'
import getIcons from '../utils/icons'
const icons = getIcons('ods-icon-')
const stories = storiesOf('ODS/Icon', module)

const templateDefault = `
<storybook-template>
  <span :class="icon" />
</storybook-template>
  `
stories.add(
  'Standard use',
  () => ({
    template: templateDefault,
    props: {
      icon: {
        default: optionsKnob('Icon', icons, 'ods-icon-home', { display: 'select' })
      }
    }
  }),
  {
    notes: {
      markdown: iconMd
    }
  }
)
