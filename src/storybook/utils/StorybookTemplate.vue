<template>
  <div class="ods-storybook__basic-template">
    <ods-module
      class="ods-storybook__container ods-storybook__component"
      :class="{'is-negative': negative}">
      <slot/>
    </ods-module>
    <ods-accordion>
      <ods-accordion-item title="Sample code">
        <div class="ods-storybook__code-samples">
          <pre
            v-for="type in sampleTypes"
            :key="type"
            v-highlightjs="getSampleString(type)">
            <code :class="type"></code>
            <ods-tooltip
              content="Copy"
              placement="top-start">
              <ods-button
                negative
                size="small"
                @click="sampleToClipboard(type, getSampleString(type))"
                class="ods-storybook__copy-button"
                circle
                icon="ods-icon-copy"
                :ref="`copyButton-${type}`">
              </ods-button>
            </ods-tooltip>
            <textarea
              class="ods-storybook__clippy"
              aria-hidden="true"
              :ref="`clippy-${type}`"></textarea>
            <span class="ods-storybook__type-badge">
              {{ type }}
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
    },
    html: {
      type: String
    },
    pug: {
      type: String
    },
    js: {
      type: String
    }
  },
  data () {
    return {
      sampleTypes: ['html', 'pug', 'js']
    }
  },
  methods: {
    getSampleString (type) {
      return decodeURIComponent(this[type])
    },
    sampleToClipboard (type, str) {
      const clip = this.$refs[`clippy-${type}`][0]
      clip.value = str
      clip.select()
      document.execCommand('copy')
      this.$notify({
        title: 'Copied!',
        type: 'success'
      })
    }
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
        width: 33.33%;
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
