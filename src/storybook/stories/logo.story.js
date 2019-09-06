import { storiesOf } from '@storybook/vue'
import { text, number, boolean } from '@storybook/addon-knobs'
import logoMd from '../md/logo.md'
const stories = storiesOf('ODS/Logo', module)

const templateDefault = `
<storybook-template tall>
  <ods-logo
    :style="[negative ? { backgroundColor: 'black' } : { backgroundColor: 'white' }]"
    :size="size"
    :suite="suite"
    :product="product"
    :productModule="productModule"
    :width="width"
    :secondary="secondary"
    :negative="negative"
    :homeLink="homeLink"
    :simple="simple">
  </ods-logo>
</storybook-template>
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    props: {
      size: {
        default: number('Size', 1, {
          range: true,
          min: 1,
          max: 4,
          step: 0.1
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
      }
    }
  }),
  {
    notes: {
      markdown: logoMd
    }
  }
)
