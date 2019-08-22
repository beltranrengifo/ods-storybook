import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'
import formMd from '../md/form.md'
const stories = storiesOf('ODS/Form', module)

const templateDefault = `
<storybook-template>
  <ods-avatar
    :size="size">
    <img src="images/avatar.svg" alt="user avatar">
  </ods-avatar>
</storybook-template>
  `
stories.add(
  'Form',
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
      markdown: formMd
    }
  }
)
