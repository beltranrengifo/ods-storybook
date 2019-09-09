import { storiesOf } from '@storybook/vue'
import { text, number, boolean, array } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import paginationMd from '../md/pagination.md'
const stories = storiesOf('ODS/Pagination', module)

const templateDefault = `
<storybook-template>
  <ods-pagination
    :small='small'
    :pageSize='pageSize'
    :total='total'
    :pageCount='pageCount'
    :currentPage='currentPage'
    :layout='layout'
    :pageSizes='pageSizes'
    :popperClass='popperClass'
    :prevText='prevText'
    :nextText='nextText'
    :disabled='disabled'
    @size-change='handleSizeChange'
    @current-change='handleCurrentChange'
    @prev-click='handlePrevClick'
    @next-click='handleNextClick'>
  </ods-pagination>
</storybook-template>
  `
stories.add(
  'Default',
  () => ({
    template: templateDefault,
    props: {
      small: {
        default: boolean('Small', false)
      },
      pageSize: {
        default: number('Page size', 10)
      },
      total: {
        default: number('Total', 50)
      },
      pageCount: {
        default: number('Page count', 5)
      },
      currentPage: {
        default: number('Current page', 1)
      },
      layout: {
        default: text('Layout', 'total, sizes, prev, pager, next, jumper')
      },
      pageSizes: {
        default: array('Page sizes', [10, 20, 30, 40, 50, 100])
      },
      popperClass: {
        default: text('Popper class', 'test')
      },
      prevText: {
        default: text('Prev text', '')
      },
      nextText: {
        default: text('Next text', '')
      },
      disabled: {
        default: boolean('Disabled', false)
      }
    },
    methods: {
      handleSizeChange: action('size changed'),
      handleCurrentChange: action('current changed'),
      handlePrevClick: action('prev click'),
      handleNextClick: action('next click')
    }
  }),
  {
    notes: {
      markdown: paginationMd
    }
  }
)
