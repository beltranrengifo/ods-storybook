import { storiesOf } from '@storybook/vue'
import { array, boolean, text, color } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import rateMd from '../md/rate.md'
const stories = storiesOf('ODS/Rate', module)

const propsStr = `v-model="rateValue"
  :colors="colors"
  :texts="texts"
  :show-text="showText"
  :disabled="disabled"
  :show-score="showScore"
  :text-color="textColor"
  :score-template="rateValue + scoreTemplate"
  @change="handleChange"`

const propsIcons = `:icon-classes="iconClasses"
  :void-icon-class="voidIconClass"`

const templateDefault = `
<storybook-template>
  <ods-rate
    ${propsStr} />
</storybook-template>
`
const templateIcons = `
<storybook-template>
  <ods-rate
    ${propsStr}
    ${propsIcons} />
</storybook-template>
`

const templates = [
  {
    name: 'Default',
    template: templateDefault
  },
  {
    name: 'Custom icons',
    template: templateIcons
  }
]

templates.forEach(template => {
  const isIconsTemplate = str => str === 'Custom icons'

  stories.add(
    template.name,
    () => ({
      template: template.template,
      data () {
        return {
          rateValue: 0
        }
      },
      methods: {
        handleChange: action('changed')
      },
      props: {
        colors: {
          default: array('Rating colors', ['#99A9BF', '#F7BA2A', '#FF9900'], '  |  ')
        },
        showText: {
          default: boolean('Show rating texts', true)
        },
        texts: {
          default: array('Rating texts', ['So bad', '  Bad', '  Not bad', '  Good', '  Really good'], '  |  ')
        },
        iconClasses: {
          default: isIconsTemplate(template.name) ? array('Icon classes', ['icon-smile-frown', '  icon-smile-meh', '  icon-smile-smile'], '  |  ') : null
        },
        voidIconClass: {
          default: isIconsTemplate(template.name) ? text('Void icon', 'icon-smile-meh') : null
        },
        disabled: {
          default: boolean('Disabled (read only)', false)
        },
        showScore: {
          default: boolean('Show score', false)
        },
        textColor: {
          default: color('Text color', '#ff9900')
        },
        scoreTemplate: {
          default: text('Score text template', ' points')
        }
      }
    }),
    {
      notes: {
        markdown: rateMd
      }
    }
  )
})

