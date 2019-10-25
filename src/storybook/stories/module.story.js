import { storiesOf } from '@storybook/vue'
import { text, object, optionsKnob } from '@storybook/addon-knobs'
import { capitalize } from '../utils/functions'
import moduleMd from '../md/module.md'
const stories = storiesOf('ODS/Module', module)

const types = [
  { name: 'default', hasHeaderSlot: false },
  { name: 'custom header', hasHeaderSlot: true }
]

types.forEach(type => {
  const templateDefault =
  type.hasHeaderSlot ? `
    <storybook-template>
      <ods-module
        :body-style="bodyStyle"
        :shadow="shadow">
        <div slot="header" style="position: relative">
          <span>Module Title</span>
          <ods-button
            style="position: absolute; right: 32px; padding: 0;"
            type="text">
            Link Button
            <ods-icon
              name="arrow-right"
              size="16">
            </ods-icon>
          </ods-button>
        </div>
        <div>
          Content of module
        </div>
      </ods-module>
    </storybook-template>
      `
    : `
    <storybook-template>
      <ods-module
        :header="header"
        :body-style="bodyStyle"
        :shadow="shadow">
        <div>
          Content of module
        </div>
      </ods-module>
    </storybook-template>
      `
  stories.add(
    capitalize(type.name),
    () => ({
      template: templateDefault,
      props: {
        header: {
          default: !type.hasHeaderSlot ? text('Header text', 'Module Title') : null
        },
        bodyStyle: {
          default: object('Body styles', { padding: '0 24px 24px' })
        },
        shadow: {
          default: optionsKnob('Use shadow', { Always: 'always', Hover: 'hover', Never: 'never' }, 'always', { display: 'select' })
        }
      }
    }),
    {
      notes: {
        markdown: moduleMd
      }
    }
  )
})
