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
