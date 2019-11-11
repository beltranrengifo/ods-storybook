import { storiesOf } from '@storybook/vue'
import { text, optionsKnob, boolean } from '@storybook/addon-knobs'
import { capitalize } from '../utils/functions'
import tabsMd from '../md/tabs.md'
import { action } from '@storybook/addon-actions'
const stories = storiesOf('ODS/Tabs', module)
const tabs = 'Tabs'
const tabPane = 'Tab-pane'

const types = [
  { name: 'default', hasLabelSlot: false },
  { name: 'custom label', hasLabelSlot: true }
]
// @tab-click="handleClick"
const tabsPropsStr = `
  v-model="activeTab"
  :type="type"
  :closable="closable"
  :addable="addable"
  :editable="editable"
  :tab-position="tabPosition"
  :stretch="stretch"
  @tab-click="handleClick"
  @edit="handleTabsEdit"
  @tab-add="handleTabsEdit"
  @tab-remove="handleTabsEdit"
`
const tabItemPropsStr = `
  :key="item.name"
  :label="item.title"
  :name="item.name"
  :disabled="disabled"
  :closable="closableTab"
  :lazy="lazy"
`

types.forEach(type => {
  const templateDefault =
  type.hasLabelSlot ? `
    <storybook-template>
      <ods-tabs ${tabsPropsStr}>
        <ods-tab-pane
          v-for="(item, index) in tabs"
          ${tabItemPropsStr}>
          <span slot="label">
            <ods-icon
              :name="item.icon"
              size="32"
              class="ods-py-6 ods-d-block ods-text-center"/> {{item.title}}
          </span>
          <div>
            {{ item.content }}
          </div>
        </ods-tab-pane>
      </ods-tabs>
    </storybook-template>
  ` : `
    <storybook-template>
      <ods-tabs  ${tabsPropsStr}>
        <ods-tab-pane
          v-for="(item, index) in tabs"
          ${tabItemPropsStr}> {{item.content}}
        </ods-tab-pane>
      </ods-tabs>
    </storybook-template>
  `
  stories.add(
    capitalize(type.name),
    () => ({
      template: templateDefault,
      data () {
        return {
          activeTab: '2',
          tabs: [{
            title: 'Tab 1',
            name: '1',
            content: 'Tab 1 content',
            icon: 'route'
          }, {
            title: 'Tab 2',
            name: '2',
            content: 'Tab 2 content',
            icon: 'gift'
          }],
          tabIndex: 2,
          labelText: 'New Tab',
          labelName: ''
        }
      },
      watch: {
        '_props.label' (newVal) {
          this.labelText = newVal
        },
        '_props.name' (newVal) {
          this.labelName = newVal
        }
      },
      props: {
        type: {
          default: optionsKnob('Type', {
            'default': '',
            'card': 'card',
            'border-card': 'border-card'
          }, '', { display: 'select' }, tabs)
        },
        closable: {
          default: boolean('Closable', false, tabs)
        },
        addable: {
          default: boolean('Addable', false, tabs)
        },
        editable: {
          default: boolean('Editable', false, tabs)
        },
        tabPosition: {
          default: optionsKnob('Tab position', {
            'top': 'top',
            'right': 'right',
            'bottom': 'bottom',
            'left': 'left'
          }, 'top', { display: 'select' }, tabs)
        },
        stretch: {
          default: boolean('Stretch', false, tabs)
        },
        // Attr Tab-pane
        label: {
          default: text('Label', 'New Tab', tabPane)
        },
        disabled: {
          default: boolean('Disabled', false, tabPane)
        },
        name: {
          default: text('Name', '', tabPane)
        },
        closableTab: {
          default: boolean('Closable(tab)', false, tabPane)
        },
        lazy: {
          default: boolean('Lazy', false, tabPane)
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
})
