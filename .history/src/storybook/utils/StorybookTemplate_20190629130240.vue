<template>
  <div
    class="ods-storybook__basic-template"
    :class="{'is-negative': negative}">
    <slot/>
    <div class="ods-storybook__code-sample">
      {{ codeBlock }}
    </div>
  </div>
</template>

<script>
import copyCodeBlock from '@pickra/copy-code-block'

export default {
  name: 'StoryBook Template',
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
      console.log(typeof this.codeSample)
      return copyCodeBlock(this.codeSample)
    }
  }
}
</script>
