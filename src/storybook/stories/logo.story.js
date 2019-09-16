import { storiesOf } from '@storybook/vue'
import { text, number, boolean } from '@storybook/addon-knobs'
import logoMd from '../md/logo.md'
const stories = storiesOf('ODS/Logo', module)

const templateDefault = `
<storybook-template tall>
  <ods-logo
    ref='logo'
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
    data () {
      return {
        downloaded: false 
      }
    },
    props: {
      size: {
        default: number('Size', 1, {
          range: true,
          min: 1,
          max: 4,
          step: 0.1
        })
      },
      watch: {
        'downloaded': function (newVal, oldVal) {
          console.log('newVal', newVal)
          console.log('oldVal', oldVal)
          if (newVal) {
            this.downloadLogo()
          }
        }
      },
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
        downloadCurrentLogo: {
          default: function () {
            if (this) {
              console.log('download', this)
              this.downloaded = true
            }
            return button('Download logo', () => {
              console.log('clicked', arguments)
            })
          }
        }
      },
      methods: {
        downloadLogo () {
          let svg = this.$refs.logo.$el.getElementsByTagName('svg')
          let svgData = svg[0].outerHTML
          let svgBlob = new Blob([svgData], {type:'image/svg+xmlcharset=utf-8'})
          let svgUrl = URL.createObjectURL(svgBlob)

          let downloadLink = document.createElement('a')
          downloadLink.href = svgUrl
          downloadLink.download = 'logo.svg'
          document.body.appendChild(downloadLink)
          downloadLink.click()
          document.body.removeChild(downloadLink)
          this.downloaded = false
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
