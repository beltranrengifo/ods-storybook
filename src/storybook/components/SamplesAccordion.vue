<template>
  <ods-accordion
    v-model="activeItem">
    <ods-accordion-item
      title="Sample code"
      name="sample-code">
      <div class="ods-storybook__code-samples">
        <pre
          v-for="sample in samples"
          :key="sample"
          v-highlightjs="printSample(sample)">
          <code :class="sample"></code>
          <ods-tooltip
            content="Copy"
            placement="top-start">
            <ods-button
              size="small"
              @click="sampleToClipboard(sample, printSample(sample))"
              class="ods-storybook__copy-button"
              circle
              icon="ods-icon-copy"
              :ref="`copyButton-${sample}`">
            </ods-button>
          </ods-tooltip>
          <textarea
            class="ods-storybook__clippy"
            aria-hidden="true"
            :ref="`clippy-${sample}`"></textarea>
          <span class="ods-storybook__type-badge">
            {{ sample }}
          </span>
        </pre>
      </div>
    </ods-accordion-item>
  </ods-accordion>
</template>

<script>
import _cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'SamplesAccordion',

  props: {
    sampleTemplate: {
      type: String
    },
    sampleProps: {
      type: Object
    },
    sampleData: {
      type: Object
    }
  },

  data () {
    return {
      samples: ['html', 'js'],
      html: '',
      js: '',
      activeItem: ['sample-code']
    }
  },

  methods: {
    sampleToClipboard (type, str) {
      const clip = this.$refs[`clippy-${type}`][0]
      clip.value = str
      clip.select()
      document.execCommand('copy')
      this.$notify({
        title: 'Copied!',
        type: 'success'
      })
    },

    getSampleStrings () {
      const formatJson = (key, val) => typeof val === 'function' ? val.toString().split('\n').map(e => e.trim().replace(/;/g, '')).join(' ') : val
      const functionToStringReplacer = str => str.replace(/(^')|('$)/g, '')

      const getComponentProperties = obj => {
        if (obj && Object.keys(obj).length) {
          obj.hasOwnProperty('componentKey') && delete obj.componentKey
          obj.hasOwnProperty('reRenderWatchers') && delete obj.reRenderWatchers
          let str = ''
          let i = 0
          for (let key in obj) {
            let val = JSON.stringify(obj[key],  formatJson, 2).replace(/"/g, "'").replace(/'function(.*)}'/g, functionToStringReplacer)  // second replace (functionToStringReplacer) for functions (ie. datepicker options)
            str += `${key}: ${val}`
            i++
            str += i < Object.keys(obj).length ? ',\n  ' : '\n'
          }
          return str
        }
      }

      let data = getComponentProperties(_cloneDeep(this.sampleData))
      let props = getComponentProperties(_cloneDeep(this.sampleProps))

      this.html = this.sampleTemplate ? `<!-- template --> ${this.sampleTemplate}` : ''
      this.js += data ? `// data\n{\n  ${data}}` : ''
      this.js += data ? `\n` : ''
      this.js += props ? `// props\n{\n  ${props}}` : ''
    },

    printSample (sample) {
      return this[[sample]] || 'No sample'
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.getSampleStrings()
    })
  },

  watch: {
    'sampleProps' (val) {
      this.getSampleStrings()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
@import '~highlight.js/styles/atom-one-dark.css';
@import '~highlight.js/styles/mono-blue.css';

  .ods-storybook {
    &__code-samples {
      display: flex;
      min-height: 1px;
      margin: 0 -4px;
      @media screen and (max-width: 1023px) {
        flex-direction: column;
      }
      pre {
        width: 50%;
        display: inherit;
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
      top: 4px;
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
  /deep/ .hljs {
    font-size: 14px;
    margin: 0 4px;
    padding: 8px 16px;
    width: 100%;
    box-sizing: border-box;
    background: $--color-hljs-background;
    border: 1px solid $--color-primary-light-9;
    &-comment {
      color: $--color-hljs-comment;
    }
    .hljs-string,
    .hljs-title,
    .hljs-section,
    .hljs-built_in,
    .hljs-literal,
    .hljs-type,
    .hljs-addition,
    .hljs-tag,
    .hljs-quote,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class {
      color: $--color-primary;
    }
  }
</style>


