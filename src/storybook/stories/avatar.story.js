import { storiesOf } from '@storybook/vue'
import { optionsKnob } from '@storybook/addon-knobs'
import avatarMd from '../md/avatar.md'
const stories = storiesOf('ODS/Avatar', module)

const templateDefault = `
<storybook-template>
  <ods-avatar
    :size="size">
    <img src="images/avatar.svg" alt="user avatar">
  </ods-avatar>
</storybook-template>
  `
stories.add(
  'Avatar',
  () => ({
    template: templateDefault,
    props: {
      size: {
        default: optionsKnob('Size', { Small: 'small', Medium: 'medium', Large: 'large', Xlarge: 'xlarge' }, 'medium', { display: 'select' })
      }
    }
  }),
  {
    notes: {
      markdown: avatarMd
    }
  }
)
