import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'
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
        default: select('Size', ['small', 'medium', 'large', 'xlarge'], 'medium')
      }
    }
  }),
  {
    notes: {
      markdown: avatarMd
    }
  }
)
