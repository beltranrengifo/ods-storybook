import { storiesOf } from '@storybook/vue'
import { optionsKnob, boolean, text, color } from '@storybook/addon-knobs'
import loadingMd from '../md/loading.md'
const stories = storiesOf('ODS/Loading', module)

const propsStr = `:loading-title="title"
    :loading-description="description"
    :loading-text="text"
    :loading-spinner="spinner"
    :loading-background="background"
    :loading-white-text="whiteText"
    :loading-custom-class="customClass"
    :lock="lock"
    :key="componentKey"
`

const templateDefault = `
<storybook-template>
  <ods-module
    class="loading__demo-module"
    v-loading="loading"
    ${propsStr}>
    <div
      slot="header"
      style="position: relative">
      <span>Module Title</span>
    </div>
    <div class="text item">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mauris ac augue rutrum volutpat a a nisl. Ut justo neque, pretium non ex nec, feugiat egestas lectus. Maecenas eget diam ipsum. Curabitur porta dolor at eleifend tempus. Cras vel turpis tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ac rhoncus erat, vel consequat libero. Duis imperdiet, neque eu volutpat venenatis, nisl arcu pretium lacus, non malesuada nisl erat in quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mauris ac augue rutrum volutpat a a nisl. Ut justo neque, pretium non ex nec, feugiat egestas lectus. Maecenas eget diam ipsum. Curabitur porta dolor at eleifend tempus. Cras vel turpis tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ac rhoncus erat, vel consequat libero. Duis imperdiet, neque eu volutpat venenatis, nisl arcu pretium lacus, non malesuada nisl erat in quam.
    </div>
  </ods-module>
</storybook-template>
`

const templateDirective = `
<storybook-template>
  <ods-button
    type="primary"
    v-loading.fullscreen.lock="fullscreenLoading"
    @click="openFullScreenDirective"
    ${propsStr}>
    Vue directive
  </ods-button>
</storybook-template>
`

const templateService = `
<storybook-template>
  <ods-button
    type="primary"
    @click="openFullScreenService"
    ${propsStr}>
    As a service
  </ods-button>
</storybook-template>
`

const loadingStories = [
  {
    name: 'Default',
    template: templateDefault
  },
  {
    name: 'Fullscreen directive',
    template: templateDirective
  },
  {
    name: 'Fullscreen service',
    template: templateService
  }
]

loadingStories.forEach(story => {
  stories.add(
    story.name,
    () => ({
      template: story.template,
      data () {
        return {
          fullscreenLoading: false,
          reRenderWatchers: ['spinner', 'background', 'whiteText', 'customClass']
        }
      },
      props: {
        loading: {
          default: story.name === 'Default' ? boolean('Loading', true) : null
        },
        title: {
          default: text('Title', 'Loading title')
        },
        description: {
          default: text('Description', 'Loading description')
        },
        text: {
          default: text('Text', '')
        },
        background: {
          default: color('Background color', 'rgba(255, 255, 255, 0.9)')
        },
        spinner: {
          default: optionsKnob('Spinner', { Default: 'pulse', Circular: 'circular', Load: 'load' }, 'pulse', { display: 'select' })
        },
        whiteText: {
          default: boolean('White text', false)
        },
        customClass: {
          default: text('CSS class', '')
        }
      },
      methods: {
        openFullScreenDirective () {
          this.fullscreenLoading = true
          setTimeout(() => {
            this.fullscreenLoading = false
          }, 60000)
        },
        openFullScreenService () {
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'ods-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })
          setTimeout(() => {
            loading.close()
          }, 10000)
        }
      }
    }),
    {
      notes: {
        markdown: loadingMd
      }
    }
  )
})
