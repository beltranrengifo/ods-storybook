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
              negative
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
import { constants } from 'crypto';
export default {
  name: 'SamplesAccordion',

  props: {
    root: {
      type: Object
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
      const storyRoot = this.root.STORYBOOK_COMPONENT.extendOptions.STORYBOOK_WRAPS.extendOptions
      const template = this.root.STORYBOOK_COMPONENT.extendOptions.STORYBOOK_WRAPS.extendOptions.template
      /* const storyRoot = this.root.STORYBOOK_COMPONENT.extendOptions.STORYBOOK_WRAPS.extendOptions
      let dataFunction = storyRoot.data
      let data = dataFunction && dataFunction.toString().replace('function', '').replace(';', '').trim()
      let props = ''
      if (this.root.STORYBOOK_VALUES) {
        let i = 0
        let l = Object.keys(this.root.STORYBOOK_VALUES).length
        for (let key in this.root.STORYBOOK_VALUES) {
          props += `${key}: ${this.getPropStrValue(this.root.STORYBOOK_VALUES[key])}`
          i++
          props += i < l ? ',\n  ' : '\n'
        }
      }
      this.html = storyRoot.template ? `<!-- template --> ${storyRoot.template}` : ''
      this.js += data ? `// data\n{\n  ${data}\n}` : ''
      this.js += data ? `\n` : ''
      this.js += props ? `// props\n{\n  ${props}}` : '' */
      const getSamples = obj => {
        if (obj && Object.keys(obj).length) {
          let l = Object.keys(obj).length
          let str = ''
          let i = 0
          for (let key in obj) {
            str += `${key}: ${JSON.stringify(obj[key])}`
            i++
            str += i < l ? ',\n  ' : '\n'
          }
          return str
        }
      }
      let data = getSamples(this.sampleData)
      let props = getSamples(this.sampleProps)
      /* if (this.sampleData && Object.keys(this.sampleData).length) {
        let i = 0
        let l = Object.keys(this.sampleData).length
        for (let key in this.sampleData) {
          data += `${key}: ${JSON.stringify(this.sampleData[key])}`
          i++
          data += i < l ? ',\n  ' : '\n'
        }
      }
      if (this.sampleProps && Object.keys(this.sampleProps).length) {
        let i = 0
        let l = Object.keys(this.sampleProps).length
        for (let key in this.sampleProps) {
          props += `${key}: ${JSON.stringify(this.sampleProps[key])}`
          i++
          props += i < l ? ',\n  ' : '\n'
        }
      } */
      this.html = template ? `<!-- template --> ${template}` : ''
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
  .hljs {
    font-size: 16px;
    margin: 0 4px;
    padding: 8px 16px;
    width: 100%;
  }
</style>


