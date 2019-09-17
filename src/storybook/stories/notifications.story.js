import { storiesOf } from '@storybook/vue'
import { text, number, optionsKnob, boolean, button } from '@storybook/addon-knobs'
import notificationsMd from '../md/notifications.md'
import types from '../utils/types'
import getIcons from '../utils/icons'
const icons = getIcons('ods-icon-')
const stories = storiesOf('ODS/Notification', module)

const templateDefault = `
<storybook-template>
  <ods-button
    plain
    @click="open"> {{ duration === 0 ? "Won't close automatically" : "Closes automatically" }}
  </ods-button>
</storybook-template>
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    props: {
      title: {
        default: text('Title', 'Title')
      },
      message: {
        default: text('Message', 'This is a message')
      },
      dangerouslyUseHTMLString: {
        default: boolean('Dangerously use HTML string', false)
      },
      type: {
        default: optionsKnob('Type', types, '', { display: 'select' })
      },
      iconClass: {
        default: optionsKnob('Icon class', icons, '', { display: 'select' })
      },
      customClass: {
        default: text('Custom class', '')
      },
      duration: {
        default: number('Duration (If you do not want it to close automatically this value must be 0)', 4500)
      },
      position: {
        default: optionsKnob('Position', {
          'top-right': 'top-right',
          'top-left': 'top-left',
          'bottom-right': 'bottom-right',
          'bottom-left': 'bottom-left'
        }, 'top-left', { display: 'select' })
      },
      showClose: {
        default: boolean('Show close', true)
      },
      offset: {
        default: number('Offset', 0)
      },
      close: {
        default: button('Close', () => {
          console.log('arguments', arguments)
          // this.$notify.close()
        })
      }
    },
    methods: {
      open () {
        this.$notify({
          title: this._props.title,
          dangerouslyUseHTMLString: this._props.dangerouslyUseHTMLString,
          message: this._props.message,
          type: this._props.type,
          iconClass: this._props.iconClass,
          customClass: this._props.customClass,
          duration: this._props.duration,
          position: this._props.position,
          showClose:  this._props.showClose,
          onClose: this.onClose,
          onClick: this.onClick,
          offset: this._props.offset
        })
      },
      onClose () {
        console.log('onClose')
      },
      onClick () {
        console.log('onClick')
      }
    }
  }),
  {
    notes: {
      markdown: notificationsMd
    }
  }
)
