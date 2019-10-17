import { storiesOf } from '@storybook/vue'
import { number, optionsKnob, text } from '@storybook/addon-knobs'
import { capitalize } from '../utils/functions'
import layoutMd from '../md/layout.md'
const stories = storiesOf('ODS/Layout', module)
const row = 'Row'
const column = 'Column'

const types = [
  { name: 'default', responsive: false },
  { name: 'responsive', responsive: true }
]

const justify = {
  'start': 'start',
  'end': 'end',
  'center': 'center',
  'space-around': 'space-around',
  'space-between': 'space-between'
}

const align = {
  top: 'top',
  middle: 'middle',
  bottom: 'bottom'
}

types.forEach(type => {
  const templateDefault =
  type.responsive ? `
    <storybook-template>
      <ods-row
        :gutter="gutter"
        :type="type"
        :justify="justify"
        :align="align"
        :tag="tagRow">
        <ods-col
          :offset="offset"
          :push="push"
          :pull="pull"
          :xs="xs"
          :sm="sm"
          :md="md"
          :lg="lg"
          :xl="xl"
          :tag="tagColumn">
          <div style="min-height: 36px; background: #d3dce6; margin-bottom: 16px;"></div>
        </ods-col>
        <ods-col
          :offset="offset"
          :push="push"
          :pull="pull"
          :xs="xs"
          :sm="sm"
          :md="md"
          :lg="lg"
          :xl="xl"
          :tag="tagColumn">
          <div style="min-height: 36px; background: #d3dce6; margin-bottom: 16px;"></div>
        </ods-col>
        <ods-col
          :offset="offset"
          :push="push"
          :pull="pull"
          :xs="xs"
          :sm="sm"
          :md="md"
          :lg="lg"
          :xl="xl"
          :tag="tagColumn">
          <div style="min-height: 36px; background: #d3dce6; margin-bottom: 16px;"></div>
        </ods-col>
        <ods-col
          :offset="offset"
          :push="push"
          :pull="pull"
          :xs="xs"
          :sm="sm"
          :md="md"
          :lg="lg"
          :xl="xl"
          :tag="tagColumn">
          <div style="min-height: 36px; background: #d3dce6; margin-bottom: 16px;"></div>
        </ods-col>
      </ods-row>
    </storybook-template>
  `: `
    <storybook-template>
      <ods-row
        :gutter="gutter"
        :type="type"
        :justify="justify"
        :align="align"
        :tag="tagRow">
        <ods-col
          :span="span"
          :offset="offset"
          :push="push"
          :pull="pull"
          :tag="tagColumn">
          <div style="min-height: 36px; background: #d3dce6;"></div>
        </ods-col>
        <ods-col
          style="margin-bottom: 16px;"
          :span="span"
          :offset="offset"
          :push="push"
          :pull="pull"
          :tag="tagColumn">
          <div style="min-height: 36px; background: #d3dce6;"></div>
        </ods-col>
        <ods-col
          :span="span"
          :offset="offset"
          :push="push"
          :pull="pull"
          :tag="tagColumn">
          <div style="min-height: 36px; background: #d3dce6;"></div>
        </ods-col>
        <ods-col
          :span="span"
          :offset="offset"
          :push="push"
          :pull="pull"
          :tag="tagColumn">
          <div style="min-height: 36px; background: #d3dce6;"></div>
        </ods-col>
      </ods-row>
    </storybook-template>
  `

  stories.add(
    capitalize(type.name),
    () => ({
      template: templateDefault,
      props: {
        // row attrs
        gutter: {
          default: number('Gutter', 16, {}, row)
        },
        type: {
          default: optionsKnob('Type', { default: '', flex: 'flex' }, '', { display: 'select' }, row)
        },
        justify: {
          default: optionsKnob('Justify', justify, 'start', { display: 'select' }, row)
        },
        align: {
          default: optionsKnob('Align', align, 'top', { display: 'select' }, row)
        },
        tagRow: {
          default: text('Tag', 'div', row)
        },
        // column attrs
        span: !type.responsive ? {
          default: number('Span', 6, {}, column)
        }: {},
        offset: {
          default: number('Offset', 0, {}, column)
        },
        push: {
          default: number('Push', 0, {}, column)
        },
        pull: {
          default: number('Pull', 0, {}, column)
        },
        xs: type.responsive ? {
          default: number('Xs', 24, {}, column)
        }: {},
        sm: type.responsive ? {
          default: number('Sm', 12, {}, column)
        }: {},
        md: type.responsive ? {
          default: number('Md', 12, {}, column)
        }: {},
        lg: type.responsive ? {
          default: number('Lg', 6, {}, column)
        }: {},
        xl: type.responsive ? {
          default: number('Xl', 6, {}, column)
        }: {},
        tagColumn: {
          default: text('Tag', 'div', column)
        }
      }
    }),
    {
      notes: {
        markdown: layoutMd
      }
    }
  )
})

