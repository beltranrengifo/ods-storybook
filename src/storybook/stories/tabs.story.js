import { storiesOf } from '@storybook/vue'
import { text, optionsKnob, boolean } from '@storybook/addon-knobs'
import tabsMd from '../md/tabs.md'
import { action } from '@storybook/addon-actions'
const stories = storiesOf('ODS/Tabs', module)

const templateDefault = `
<storybook-template>
  <ods-tabs
    v-model='activeTab'
    :type='type'
    :closable='closable'
    :addable='addable'
    :editable='editable'
    :tab-position='tabPosition'
    :stretch='stretch'
    @edit='handleTabsEdit'
    @tab-click='handleClick'
    @tab-add='handleTabsEdit'
    @tab-remove='handleTabsEdit'>
    <ods-tab-pane
      v-for='(item, index) in tabs'
      :key='item.name'
      :label='item.title'
      :name='item.name'
      :disabled='disabled'
      :closable='closableTab'
      :lazy='lazy'
    > {{item.content}}
    </ods-tab-pane>
  </ods-tabs>
</storybook-template>
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    data () {
      return {
        activeTab: '2',
        tabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2,
        labelText: 'New Tab',
        labelName: ''
      }
    },
    watch: {
      '_props.label': function (newVal, oldVal){
        this.labelText = newVal
      },
      '_props.name': function (newVal, oldVal){
        this.labelName = newVal
      }
    },
    props: {
      type: {
        default: optionsKnob('Type', {
          'default': '',
          'card': 'card',
          'border-card': 'border-card'
        }, '', { display: 'select' })
      },
      closable: {
        default: boolean('Closable', false)
      },
      addable: {
        default: boolean('Addable', false)
      },
      editable: {
        default: boolean('Editable', false)
      },
      tabPosition: {
        default: optionsKnob('Tab position', {
          'top': 'top',
          'right': 'right',
          'bottom': 'bottom',
          'left': 'left'
        }, 'top', { display: 'select' })
      },
      stretch: {
        default: boolean('Stretch', false)
      },
      // Attr Tab-pane
      label: {
        default: text('Label', 'New Tab')
      },
      disabled: {
        default: boolean('Disabled', false)
      },
      name: {
        default: text('Name', '')
      },
      closableTab: {
        default: boolean('Closable(tab)', false)
      },
      lazy: {
        default: boolean('Lazy', false)
      }
    },
    methods: {
      handleEdition: action('edit'),
      handleClick: action('click'),
      handleTabAdd: action('add'),
      handleTabRemove: action('remove'),
      handleTabsEdit (targetName, action) {
        if (action === 'add') {
          this.handleTabAdd()
          this.handleEdition()
          ++this.tabIndex
          let newTabName = `${this.labelName} ${this.tabIndex}`
          this.tabs.push({
            title: this.labelText,
            name: newTabName,
            content: `Tab ${this.tabIndex} content`
          })
          this.activeTab = newTabName
        }
        if (action === 'remove') {
          this.handleTabRemove()
          this.handleEdition()
          let tabs = this.tabs
          let activeName = this.activeTab
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                  activeName = nextTab.name
                }
              }
            })
          }
          this.activeTab = activeName
          this.tabs = tabs.filter(tab => tab.name !== targetName)
        }
      }
    }
  }),
  {
    notes: {
      markdown: tabsMd
    }
  }
)
