<template>
  <div class="ods-storybook__basic-template">
    <ods-module
      class="ods-storybook__container ods-storybook__component"
      :class="{'is-negative': negative}">
      <slot/>
    </ods-module>
    <ods-accordion>
      <ods-accordion-item title="Sample code (initial state)">
        <div class="ods-storybook__code-samples">
          <pre
            v-highlightjs="html">
            <code class="html"></code>
            <ods-tooltip
              content="Copy"
              placement="top-start">
              <ods-button
                negative
                size="small"
                @click="sampleToClipboard('html', html)"
                class="ods-storybook__copy-button"
                circle
                icon="ods-icon-copy"
                ref="copyButton-html">
              </ods-button>
            </ods-tooltip>
            <textarea
              class="ods-storybook__clippy"
              aria-hidden="true"
              ref="clippy-html"></textarea>
            <span class="ods-storybook__type-badge">
              html
            </span>
          </pre>
          <pre
            v-highlightjs="js">
            <code class="js"></code>
            <ods-tooltip
              content="Copy"
              placement="top-start">
              <ods-button
                negative
                size="small"
                @click="sampleToClipboard('js', js)"
                class="ods-storybook__copy-button"
                circle
                icon="ods-icon-copy"
                ref="copyButton-js">
              </ods-button>
            </ods-tooltip>
            <textarea
              class="ods-storybook__clippy"
              aria-hidden="true"
              ref="clippy-js"></textarea>
            <span class="ods-storybook__type-badge">
              js
            </span>
          </pre>
        </div>
      </ods-accordion-item>
    </ods-accordion>
  </div>
</template>

<script>
export default {
  name: 'StoryBookTemplate',
  props: {
    negative: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      html: '',
      js: '',
      root: null
    }
  },

  methods: {

    sampleToClipboard (type, str) {
      const clip = this.$refs[`clippy-${type}`]
      clip.value = str
      clip.select()
      document.execCommand('copy')
      this.$notify({
        title: 'Copied!',
        type: 'success'
      })
    },

    getSampleStrings () {
      const root = this.$slots.default[0].componentInstance.$root
      const storyRoot = root.STORYBOOK_COMPONENT.extendOptions.STORYBOOK_WRAPS.extendOptions
      let dataFunction = storyRoot.data
      let data = dataFunction && dataFunction.toString().replace('function', '').replace(';', '').trim()
      let props = ''
      if (root.STORYBOOK_VALUES) {
        let i = 0
        let l = Object.keys(root.STORYBOOK_VALUES).length
        for (let key in root.STORYBOOK_VALUES) {
          props += `${key}: ${this.getPropStrValue(root.STORYBOOK_VALUES[key])}`
          i++
          props += i < l ? ',\n  ' : '\n'
        }
      }
      this.html = storyRoot.template || '// No template'
      this.js += data ? `// data\n{\n  ${data}\n}` : ''
      this.js += data ? `\n` : ''
      this.js += `// props\n{\n  ${props}}`
    },

    getPropStrValue (val) {
      return typeof val === 'string' ? `'${val}'` : val
    }
  },

  mounted () {
    this.getSampleStrings()
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/_variables.scss';
  @import '~highlight.js/styles/atom-one-dark.css';

  .ods-storybook {
    &__basic-template {
      padding: 36px;
      @media screen and (max-width: 1023px) {
        padding: 8px;
      }
    }
    &__component {
      &.is-negative {
        background: $--color-onesait-logo;
      }
      & > /deep/ .ods-module__body {
        padding: 0;
      }
    }
    &__container {
      padding: 32px;
      margin-bottom: 48px;
      border: 1px solid  $--color-neutral-5;
    }
    &__code-samples {
      display: flex;
      min-height: 1px;
      margin: 0 -4px;
      @media screen and (max-width: 1023px) {
        flex-direction: column;
      }
      pre {
        width: 50%;
        height: 440px;
        margin: 0;
        overflow: hidden;
        position: relative;
        @media screen and (max-width: 1023px) {
          width: 100%;
        }
      }
    }
    &__copy-button {
      position: absolute;
      top: 24px;
      right: 8px;
    }
    &__clippy {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
    }
    &__type-badge {
      position: absolute;
      bottom: -12px;
      right: 16px;
      color: $--color-neutral-2;
      font-family: 'Soho', Helvetica, Arial, sans-serif!important;
    }
  }
  h6 {
    margin: 0;
  }
  .hljs {
    font-size: 16px;
    margin: 0 4px;
    padding: 8px 16px;
    height: 400px;
  }

</style>
