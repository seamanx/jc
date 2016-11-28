<template>
  <div></div>
</template>

<script> 

export default { 
  props: {
    percent: {
      type: Number,
      default: 0
    },
    showCancel: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    cancel () {
      this.$emit('on-cancel')
    }
  }
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui_progress/weui_progress';
</style>
