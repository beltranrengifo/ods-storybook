import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'
import avatarMd from '../md/avatar.md'
import OdsAvatar from '@onesait/onesait-ds/lib/avatar'
import StorybookTemplate from '../components/StorybookTemplate'

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
    components: {
      'ods-avatar': OdsAvatar,
      'storybook-template': StorybookTemplate
    },
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
