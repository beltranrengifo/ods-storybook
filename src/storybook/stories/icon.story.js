import { storiesOf } from '@storybook/vue'
import { optionsKnob, text } from '@storybook/addon-knobs'
import iconMd from '../md/icon.md'
import getIcons from '../utils/icons'
const icons = getIcons('ods-icon-')
const iconNames = getIcons()
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

const componentTemplate = `
<storybook-template>
  <ods-icon
    :name="name"
    :size="size" />
</storybook-template>
  `
stories.add(
  'Component use',
  () => ({
    template: componentTemplate,
    props: {
      name: {
        default: optionsKnob('Icon', iconNames, 'home', { display: 'select' })
      },
      size: {
        default: text('Size', '22')
      }
    }
  }),
  {
    notes: {
      markdown: iconMd
    }
  }
)
