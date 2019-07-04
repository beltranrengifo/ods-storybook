import { storiesOf } from '@storybook/vue'
import { text, select, optionsKnob, files } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { capitalize } from '../utils/functions'
import actionsMenuMd from '../md/actions-menu.md'
import OdsActionsMenu from '@onesait/onesait-ds/lib/actions-menu'
import StorybookTemplate from '../components/StorybookTemplate'
import getIcons from '../utils/icons'
const icons = getIcons()

const stories = storiesOf('ODS/Actions menu', module)

const types = [
  'icon',
  'text',
  'img'
]

const positions = [
  'top-start',
  'top',
  'top-end',
  'left-start',
  'left',
  'left-end',
  'right-start',
  'right',
  'right-end',
  'bottom-start',
  'bottom',
  'bottom-end'
]

types.forEach(type => {
  const templateDefault = `
<storybook-template>
  <ods-actions-menu
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
      components: {
        'ods-actions-menu': OdsActionsMenu,
        'storybook-template': StorybookTemplate
      },
      template: templateDefault,
      methods: {
        handleShow: action('show'),
        handleHide: action('hide')
      },
      props: {
        customClass: {
          default: text('Css class', 'my-class', 'Common')
        },
        icon: {
          default: optionsKnob('Icon - only works with icon type', icons, 'home', { display: 'select' }, 'Types')
        },
        text: {
          default: text('Text - only works with text type', 'John Doe', 'Types')
        },
        img: {
          default: files('Image - only works with img type', 'png, jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/245px-Unofficial_JavaScript_logo_2.svg.png', 'Types')
        },
        width: {
          default: text('Width', '', 'Common')
        },
        mobileWidth: {
          default: text('Mobile width', '', 'Common')
        },
        popoverPosition: {
          default: select('Postion (change before click or switch stories)', positions, 'bottom-start', 'Common')
        },
        mobilePopoverPosition: {
          default: select('Mobile postion (change before click or switch stories)', positions, 'bottom-start', 'Common')
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
