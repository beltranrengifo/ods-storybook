<template>
  <div
    class="ods-storybook__basic-template">
    <ods-module
      class="ods-storybook__container ods-storybook__component"
      :class="{
        'is-negative': negative,
        'justify-center': center
      }">
      <slot/>
    </ods-module>
    <samples-accordion
      :key="samplesAccordionKey"
      :sampleTemplate="sampleTemplate"
      :sampleProps="sampleProps"
      :sampleData="sampleData"/>
  </div>
</template>

<script>
import SamplesAccordion from './SamplesAccordion'

export default {
  name: 'StoryBookTemplate',

  components: {
    SamplesAccordion
  },

  props: {
    negative: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      sampleTemplate: '',
      samplesAccordionKey: 0,
      sampleProps: null,
      sampleData: null,
      sampleMethods: null
    }
  },

  methods: {
    refreshSamples () {
      this.samplesAccordionKey++
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.sampleProps = this.demoData.props
      this.sampleData = this.demoData.data
    })
    this.sampleTemplate = this.$slots.default[0].componentInstance.$root.STORYBOOK_COMPONENT.extendOptions.STORYBOOK_WRAPS.extendOptions.template.replace(/\s*:key="componentKey"\s*/g, '')
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/_variables.scss';

  .ods-storybook {
    &__basic-template {
      padding: 36px;
      @media screen and (max-width: 1023px) {
        padding: 8px;
      }
    }
    &__component {
      min-height: 160px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      &.is-negative {
        background: $--color-onesait-logo;
      }
      & > /deep/ .ods-module__body {
        padding: 0;
        width: 100%;
      }
    }
    &__container {
      padding: 32px;
      margin-bottom: 48px;
      border: 1px solid  $--color-neutral-5;
      overflow: visible;
    }
  }

  .justify-center {
    display: flex;
    justify-content: center;
    /deep/ .ods-module__body {
      width: auto;
    }
  }
  h6 {
    margin: 0;
  }
  /deep/ .ods-actions-menu__button--text {
    width: 120px;
  }
</style>
