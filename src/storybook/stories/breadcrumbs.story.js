import { storiesOf } from '@storybook/vue'
import { text, withKnobs, optionsKnob } from '@storybook/addon-knobs'
import breadcrumbsMd from '../md/breadcrumbs.md'
import getIcons from '../utils/icons'
const icons = getIcons('ods-icon-')
const stories = storiesOf('ODS/Breadcrumbs', module)
stories.addDecorator(withKnobs)

const templateDefault = `
<storybook-template>
  <ods-breadcrumb
    :separator="separator"
    :separatorClass="separatorClass">
    <ods-breadcrumb-item :to="{ path: '/' }">Dashboard</ods-breadcrumb-item>
    <ods-breadcrumb-item :to="{ path: '/' }">Breadcrumb item 1</ods-breadcrumb-item>
    <ods-breadcrumb-item :to="{ path: '/' }">Breadcrumb item 2</ods-breadcrumb-item>
    <ods-breadcrumb-item>A detail view</ods-breadcrumb-item>
  </ods-breadcrumb>
</storybook-template>
  `

stories.add(
  'Default',
  () => ({
    template: templateDefault,
    props: {
      separator: {
        default: text('Separator', '>')
      },
      separatorClass: {
        default: optionsKnob('Separator class (icon)', icons, '', { display: 'select' })
      }
    }
  }),
  {
    notes: {
      markdown: breadcrumbsMd
    },
    knobs: {
      escapeHTML: false
    }
  }
)
