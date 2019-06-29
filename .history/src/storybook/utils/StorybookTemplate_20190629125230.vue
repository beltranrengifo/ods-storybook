<template>
  <div
    class="ods-storybook__basic-template"
    :class="{'is-negative': negative}">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'StoryBook Template',
  props: {
    negative: {
      type: Boolean,
      default: false
    }
  }
}
</script>
