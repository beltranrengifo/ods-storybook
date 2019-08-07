import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'
import clickoutsideMd from '../md/clickoutside.md'
import Clickoutside from '@onesait/onesait-ds/lib/utils/clickoutside.js'
const stories = storiesOf('ODS/Clickoutside', module)


const templateDefault = `
<storybook-template>
  <ods-button
    type="text"
    @click="showPopover">
    Show popover
  </ods-button>

  <ods-popover
    placement="right"
    v-clickoutside="hidePopover"
    trigger="manual"
    v-model="activePopover"
    popper-class="custom-popover"
    width="320">
    <div class="card__menu">
      <h2>Clickoutside directive</h2>
      <p>Click outside to close popover</p>
    </div>
  </ods-popover>
</storybook-template>
  `
stories.add(
  'Clickoutside',
  () => ({
    template: templateDefault,
    directives: {
      Clickoutside
    },
    data () {
      return {
        activePopover: false
      }
    },
    props: {
    },
    methods: {
      showPopover () {
        this.activePopover = true
      },
      hidePopover () {
        this.activePopover = false
      }
    }
  }),
  {
    notes: {
      markdown: clickoutsideMd
    }
  }
)
