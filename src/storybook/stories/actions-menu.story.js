import { storiesOf } from '@storybook/vue'
import { text, optionsKnob, files } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { capitalize } from '../utils/functions'
import actionsMenuMd from '../md/actions-menu.md'
import getIcons from '../utils/icons'
const icons = getIcons()

const stories = storiesOf('ODS/Actions menu', module)

const types = [
  'icon',
  'text',
  'img'
]

const positions = {
  'Top start': 'top-start',
  Top: 'top',
  'Top end': 'top-end',
  'Left start': 'left-start',
  Left: 'left',
  'Left end': 'left-end',
  'Right start': 'right-start',
  Right: 'right',
  'Right end': 'right-end',
  'Bottom start': 'bottom-start',
  Bottom: 'bottom',
  'Bottom end': 'bottom-end'
}

types.forEach(type => {
  const templateDefault = `
<storybook-template center>
  <ods-actions-menu
    :key="componentKey"
    :customClass="customClass"
    :${type}=${type}
    :width="width"
    :popoverPosition="popoverPosition"
    :mobilePopoverPosition="mobilePopoverPosition"
    :boundariesElement="boundariesElement"
    :onShowEvent="true"
    :onHideEvent="true"
    @show="handleShow"
    @hide="handleHide">
    <ul>
      <li>Some content</li>
      <li>More info</li>
      <li>A new list item</li>
      <li>Another one</li>
    </ul>
  </ods-actions-menu>
</storybook-template>
`

  stories.add(
    capitalize(type),
    () => ({
      template: templateDefault,
      methods: {
        handleShow: action('show'),
        handleHide: action('hide')
      },
      data () {
        return {
          reRenderWatchers: ['popoverPosition', 'mobilePopoverPosition']
        }
      },
      props: {
        customClass: {
          default: text('Css class', 'my-class', 'Common')
        },
        icon: {
          default: optionsKnob('Icon - only with icon type', icons, 'home', { display: 'select' }, 'Types')
        },
        text: {
          default: text('Text - only with text type', 'John Doe', 'Types')
        },
        img: {
          default: files('Image - only with img type', 'png, jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/245px-Unofficial_JavaScript_logo_2.svg.png', 'Types')
        },
        width: {
          default: text('Width', '', 'Common')
        },
        mobileWidth: {
          default: text('Mobile width', '', 'Common')
        },
        popoverPosition: {
          default: optionsKnob('Postion', positions, 'bottom-start', { display: 'select' }, 'Common')
        },
        mobilePopoverPosition: {
          default: optionsKnob('Mobile postion', positions, 'bottom-start', { display: 'select' }, 'Common')
        },
        boundariesElement: {
          default: text('Boundaries', '#root', 'Common')
        }
      }
    }),
    {
      notes: {
        markdown: actionsMenuMd
      }
    }
  )
})
