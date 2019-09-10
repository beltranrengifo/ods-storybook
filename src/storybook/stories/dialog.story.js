import { storiesOf } from '@storybook/vue'
import { boolean, text, select, color, optionsKnob } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import transitions from '../utils/transitions'
import dialogMd from '../md/dialog.md'
import getIcons from '../utils/icons'
const icons = getIcons()
icons.success = 'success'
const stories = storiesOf('ODS/Dialog', module)

/* default */
const templateDefault = `
<storybook-template>
  <ods-button
    type="text"
    @click="dialogVisible = true">
    click to open the Dialog
  </ods-button>
  <ods-dialog
    :title="title"
    :visible.sync="dialogVisible"
    :width="width"
    :append-to-body="appendToBody"
    :center="center"
    :icon="icon"
    :iconColor="iconColor"
    :iconSize="iconSize || '32'"
    :transition-name="transitionName"
    :fullscreen="fullscreen"
    :top="top"
    :modal="modal"
    :modal-append-to-body="modalAppendToBody"
    :lock-scroll="lockScroll"
    :custom-class="customClass"
    :close-on-click-modal="closeOnClickModal"
    :close-on-press-escape="closeOnPressEscape"
    :show-close="showClose"
    :before-close="handleBeforeClose"
    @open="handleOpen"
    @close="handleClose"
    :key="componentKey">
    <h4 slot="title">This is a message</h4>
    <span>content</span>
    <div slot="footer" class="dialog-footer">
      <ods-button type="text" @click="dialogVisible = false">Cancel</ods-button>
      <ods-button @click="dialogVisible = false">Confirm</ods-button>
    </div>
  </ods-dialog>
</storybook-template>
  `

stories.add(
  'Default',
  () => ({
    template: templateDefault,
    data () {
      return {
        dialogVisible: false,
        reRenderWatchers: ['modal', 'lockScroll']
      }
    },

    props: {
      title: {
        default: text('Title', 'Hello world!')
      },
      width: {
        default: text('Width', '600px')
      },
      appendToBody: {
        default: boolean('Append to body', true)
      },
      center: {
        default: boolean('Centered content', false)
      },
      icon: {
        default: optionsKnob('Icon', icons, '', { display: 'select' })
      },
      iconColor: {
        default: color('Icon color', '#87BEE6')
      },
      iconSize: {
        default: text('Icon size', '32')
      },
      transitionName: {
        default: optionsKnob('Transition', transitions, 'fade-in-linear', { display: 'select' })
      },
      fullscreen: {
        default: boolean('Fullscreen', false)
      },
      top: {
        default: text('Dialog margin top', '0')
      },
      modal: {
        default: boolean('Show modal mask', true)
      },
      modalAppendToBody: {
        default: boolean('Append mask to body', true)
      },
      lockScroll: {
        default: boolean('Lock scroll', true)
      },
      customClass: {
        default: text('Custom CSS class', '')
      },
      closeOnClickModal: {
        default: boolean('Close on click in mask', true)
      },
      closeOnPressEscape: {
        default: boolean('Close on press Esc', true)
      },
      showClose: {
        default: boolean('Show close', true)
      }
    },

    methods: {
      async handleBeforeClose (done) {
        try {
          await this.$confirm('Are you sure to close this dialog?')
          done()
        } catch (e) {
          console.error(e)
        }
      },
      handleOpen: action('opened!'),
      handleClose: action('closed!')
    }
  }),
  {
    notes: {
      markdown: dialogMd
    }
  }
)

/* custom template */

const customTemplate = `
<storybook-template>
  <ods-button
    type="text"
    @click="dialogVisible = true">
    click to open the Dialog with a nested table
  </ods-button>
  <ods-dialog
    :title="title"
    :visible.sync="dialogVisible"
    :width="width"
    :append-to-body="appendToBody"
    :center="center"
    :icon="icon"
    :iconColor="iconColor"
    :iconSize="iconSize || '32'"
    :transition-name="transitionName"
    :fullscreen="fullscreen"
    :top="top"
    :modal="modal"
    :modal-append-to-body="modalAppendToBody"
    :lock-scroll="lockScroll"
    :custom-class="customClass"
    :close-on-click-modal="closeOnClickModal"
    :close-on-press-escape="closeOnPressEscape"
    :show-close="showClose"
    :before-close="handleBeforeClose"
    @open="handleOpen"
    @close="handleClose"
    :key="componentKey">
    <ods-table :data="gridData">
      <ods-table-column
        property="date"
        label="Date"
        width="150" />
      <ods-table-column
        property="name"
        label="Name"
        width="200" />
      <ods-table-column
        property="address"
        label="Address" />
    </ods-table>
    <div slot="footer" class="dialog-footer">
      <ods-button type="text" @click="dialogVisible = false">Cancel</ods-button>
      <ods-button @click="dialogVisible = false">Ok</ods-button>
    </div>
  </ods-dialog>
</storybook-template>
  `

stories.add(
  'Custom template',
  () => ({
    template: customTemplate,
    data () {
      return {
        dialogVisible: false,
        gridData: [
          {
            date: '2016-05-02',
            name: 'John Smith',
            address: 'No.1518, Jinshajiang Road, Putuo District'
          }, {
            date: '2016-05-04',
            name: 'John Smith',
            address: 'No.1518, Jinshajiang Road, Putuo District'
          }, {
            date: '2016-05-01',
            name: 'John Smith',
            address: 'No.1518, Jinshajiang Road, Putuo District'
          }, {
            date: '2016-05-03',
            name: 'John Smith',
            address: 'No.1518, Jinshajiang Road, Putuo District'
          }
        ],
        reRenderWatchers: ['modal', 'lockScroll']
      }
    },

    props: {
      title: {
        default: text('Title', 'A dialog with some custom content')
      },
      width: {
        default: text('Width', '60%')
      },
      appendToBody: {
        default: boolean('Append to body', true)
      },
      center: {
        default: boolean('Centered content', false)
      },
      icon: {
        default: optionsKnob('Icon', icons, '', { display: 'select' })
      },
      iconColor: {
        default: color('Icon color', '#87BEE6')
      },
      iconSize: {
        default: text('Icon size', '32')
      },
      transitionName: {
        default: optionsKnob('Transition', transitions, 'fade-in-linear', { display: 'select' })
      },
      fullscreen: {
        default: boolean('Fullscreen', false)
      },
      top: {
        default: text('Dialog margin top', '0')
      },
      modal: {
        default: boolean('Show modal mask', true)
      },
      modalAppendToBody: {
        default: boolean('Append mask to body', true)
      },
      lockScroll: {
        default: boolean('Lock scroll', true)
      },
      customClass: {
        default: text('Custom CSS class', '')
      },
      closeOnClickModal: {
        default: boolean('Close on click in mask', true)
      },
      closeOnPressEscape: {
        default: boolean('Close on press Esc', true)
      },
      showClose: {
        default: boolean('Show close', true)
      }
    },

    methods: {
      async handleBeforeClose (done) {
        try {
          await this.$confirm('Are you sure to close this dialog?')
          done()
        } catch (e) {
          console.error(`${e}: Cancelled by the user`)
        }
      },
      handleOpen: action('opened!'),
      handleClose: action('closed!')
    }
  }),
  {
    notes: {
      markdown: dialogMd
    }
  }
)
