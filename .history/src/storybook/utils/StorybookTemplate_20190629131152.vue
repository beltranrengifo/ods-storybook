<template>
  <div class="ods-storybook__basic-template">
    <div
      class="ods-storybook__component"
      :class="{'is-negative': negative}">
      <slot/>
    </div>
    <div class="ods-storybook__code-sample" v-html="codeBlock"/>
  </div>
</template>

<script>
import copyCodeBlock from '@pickra/copy-code-block'
import hljs from 'highlight.js/lib/highlight'
hljs.registerLanguage('js', require('highlight.js/lib/languages/js'));

export default {
  name: 'StoryBookTemplate',
  props: {
    negative: {
      type: Boolean,
      default: false
    },
    codeSample: {
      type: String
    }
  },
  computed: {
    codeBlock () {
      return copyCodeBlock(this.codeSample)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/_variables.scss';
  .ods-storybook {
    &__component {
      padding: 32px 68px;
      margin-bottom: 48px;
      &.is-negative {
        background: $--color-onesait-logo;
      }
    }
  }
</style>
