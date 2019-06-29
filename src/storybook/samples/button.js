export default {
  html: `<ods-button
  @click="handleClick"
  :disabled="disabled"
  :circle="circle"
  :loading="loading"
  :icon="icon"
  :size="size"
  :full="full"
  :negative="negative">
  {{ text }}
</ods-button>

`,
  pug: `ods-button(
  @click="handleClick"
  :disabled="disabled"
  :circle="circle"
  :loading="loading"
  :icon="icon"
  :size="size"
  :full="full"
  :negative="negative") {{ text }}

`,
  js: `export default {
  data () {
    return {
      disabled: true,
      circle: false,
      loading: false,
      icon: "ods-icon-plus",
      size: "medium",
      full: false,
      negative: false
    }
  }
  methods: {
    handleClick: action("clicked")
  } 
}

`
}
