import { storiesOf } from '@storybook/vue'
import { text, number, boolean, button} from '@storybook/addon-knobs'
import logoMd from '../md/logo.md'
const stories = storiesOf('ODS/Logo', module)

const templateDefault = `
<storybook-template>
  <ods-logo
    :style="[negative ? { backgroundColor: 'black' } : { backgroundColor: 'white' }]"
    :size='size'
    :suite='suite'
    :product='product'
    :productModule='productModule'
    :width='width'
    :secondary='secondary'
    :negative='negative'
    :homeLink='homeLink'
    :simple='simple'>
  </ods-logo>
</storybook-template>
  `
stories.add(
  'Default',
  () => {
    return ({
      template: templateDefault,
      props: {
        size: {
          default: number('Size', 1, {
             range: true,
             min: 1,
             max: 5,
             step: 1
          })
        },
        suite: {
          default: text('Suite', 'suite')
        },
        product: {
          default: text('Product', 'product')
        },
        productModule: {
          default: text('Product module', 'module')
        },
        width: {
          default: number('Width', 275)
        },
        secondary: {
          default: boolean('Secundary', false)
        },
        negative: {
          default: boolean('Negative', false)
        },
        homeLink: {
          default: boolean('Home link', true)
        },
        simple: {
          default: boolean('Simple', false)
        },
        download: {
          default: button('Download logo', () => {
            console.log('downloading')
          })
        }
      }
    })
  },
  {
    notes: {
      markdown: logoMd
    }
  }
)
