<script>
export default {
  data () {
    return {
      componentKey: 0
    }
  },

  methods: {
    refreshKey () {
      this.componentKey++
    }
  },

  mounted () {
    if (
      this.$props && 
      this.$children[0] && 
      this.$children[0].refreshSamples ) {
        [this.$data, this.$props].forEach( obj => {
          Object.keys(obj).forEach(e => this.$watch(e, () => this.$children[0].refreshSamples()))
        })
        this.$children[0].demoData = {}
        this.$children[0].demoData.props = this.$props
        this.$children[0].demoData.data = this.$data
    }
    if (this.watchers) {
      this.watchers.forEach(w => this.$watch(w, () => this.refreshKey()))
    }
  }
}
</script>
