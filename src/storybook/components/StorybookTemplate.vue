<template>
  <div
    class="ods-storybook__basic-template">
    <component-badges
      v-if="componentVersion || componentlastUpdate"
      :badges="[versionBadge, updatedBadge]"/>
    <ods-module
      class="ods-storybook__container ods-storybook__component"
      :class="{
        'is-negative': negative,
        'justify-center': center,
        'is-tall': tall
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
import ComponentBadges from './ComponentBadges'
export default {
  name: 'StoryBookTemplate',

  components: {
    SamplesAccordion,
    ComponentBadges
  },

  props: {
    negative: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    tall: {
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
      sampleMethods: null,
      componentVersion: null,
      versionBadge: '',
      componentlastUpdate: null,
      updatedBadge: ''
    }
  },

  methods: {
    refreshSamples () {
      this.samplesAccordionKey++
      this.sampleTemplate = this.getTemplate()
    },
    getTemplate () {
      if (this.$slots.default[0].componentInstance) {
        // when the slot has components
        return this.$slots.default[0].componentInstance.$root.STORYBOOK_COMPONENT.extendOptions.STORYBOOK_WRAPS.extendOptions.template.replace(/\s*:key="componentKey"\s*/g, '')
      } else {
        // when the slot has plain HTML (ie. icon)
        return `\n${this.$slots.default[0].elm.outerHTML}`
      }
    },
    setBadges () {
			const baseUrl = 'https://img.shields.io/badge/'
			const urlOptions = '-blue.svg?style=flat&colorA=2c3e50&colorB=2E6C99'
			this.versionBadge = this.componentVersion && `${baseUrl}version-${this.componentVersion}${urlOptions}`
			this.updatedBadge = this.componentlastUpdate && `${baseUrl}updated-${this.componentlastUpdate}${urlOptions}`
    }
  },

  mounted () {
    this.componentVersion = this.$slots.default[0].componentOptions && this.$slots.default[0].componentOptions.Ctor.extendOptions.version
    this.componentlastUpdate = this.$slots.default[0].componentOptions && this.$slots.default[0].componentOptions.Ctor.extendOptions.lastDate
    this.setBadges()
    this.$nextTick(() => {
      this.sampleProps = this.demoData && this.demoData.props
      this.sampleData = this.demoData && this.demoData.data
    })
    this.sampleTemplate = this.getTemplate()
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
  .is-tall {
    min-height: 300px;
    /deep/ .ods-logo a {
      min-height: 340px;
      width: 100% !important;
    }
  }
</style>
