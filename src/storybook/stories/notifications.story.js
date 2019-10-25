import { storiesOf } from '@storybook/vue'
import { text, number, optionsKnob, boolean, button } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-vue-router'
import { capitalize } from '../utils/functions'
import notificationsMd from '../md/notifications.md'
import types from '../utils/types'
import getIcons from '../utils/icons'
const icons = getIcons('ods-icon-')
const stories = storiesOf('ODS/Notification', module)
// .addDecorator(StoryRouter())

const variants = [
  { name: 'default', link: false, router: false },
  { name: 'external link', link: true, router: false },
  { name: 'router link', link: true, router: true }
]

variants.forEach(variant => {
  const templateDefault = `
    <storybook-template>
      <ods-button
        plain
        @click="open"> {{ duration === 0 ? "Won't close automatically" : "Closes automatically" }}
      </ods-button>
    </storybook-template>
  `

  stories.add(
    capitalize(variant.name),
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
          default: boolean('use HTML in message', false)
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
        href: variant.link ? {
          default: text('Href', 'https://vuejs.org/')
        } : {},
        linkText: variant.link ? {
          default: text('Link text', variant.router ? 'Router link' : 'Link externo')
        } : {},
        to: variant.router ? {
          default: text('To', '/components/list')
        } : {}
      },
      methods: {
        open () {
          console.log('this.$router', this.$router)
          this.$notify({
            title: this._props.title,
            dangerouslyUseHTMLString: this._props.dangerouslyUseHTMLString,
            message: variant.link ? this.$createElement('OdsNotificationLink', {
              props: {
                href: !variant.router ? this._props.href : false,
                linkText: this._props.linkText,
                message: this._props.message,
                parentRouter: variant.link ? this.$router : false,
                to: variant.router ? '/' : false
              }
            }) : this._props.message,
            type: this._props.type,
            iconClass: this._props.iconClass,
            customClass: this._props.customClass,
            duration: this._props.duration,
            position: this._props.position,
            showClose: this._props.showClose,
            onClose: this.onClose,
            onClick: this.onClick,
            offset: this._props.offset
          })
        },
        onClose () {
          console.log('onClose')
        },
        onClick () {
          console.log('StoryRouter', StoryRouter)
          console.log('this.$router', this.$router)
          console.log('onClick')
        }
      }
    }),
    {
      notes: {
        markdown: notificationsMd
      },
      knobs: {
        escapeHTML: false
      }
    }
  )
})
