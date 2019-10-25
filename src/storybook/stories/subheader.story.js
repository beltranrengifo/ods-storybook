import { storiesOf } from '@storybook/vue'
import { boolean, text } from '@storybook/addon-knobs'
import subheaderMd from '../md/subheader.md'
const stories = storiesOf('ODS/SubHeader', module)

const templateDefault = `
<storybook-template>
  <ods-sub-header
    :css-class="cssClass"
    :is-absolute="isAbsolute"
    :stretch="stretch"
    :medium="medium"
    :large="large"> Subheader
  </ods-sub-header>
</storybook-template>
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    props: {
      cssClass: {
        default: text('CSS class', 'my-custom-class')
      },
      isAbsolute: {
        default: boolean('Is absolute', false)
      },
      stretch: {
        default: boolean('Stretch (Is absolute must be false)', false)
      },
      medium: {
        default: boolean('Medium', false)
      },
      large: {
        default: boolean('Large', false)
      }
    }
  }),
  {
    notes: {
      markdown: subheaderMd
    }
  }
)
