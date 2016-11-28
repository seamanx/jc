<template>
  <ul id="articlelist">
    <li v-for="article in articlelists">
      <a v-link="{ name: 'articleview', params: { articleid: article.id }}">{{ article.title }}</a>
    </li>
  </ul>
  <div>
    <router-view></router-view>
  </div>
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
  },
  data: function() {
   return  { articlelists:[{id:1,title:'这是1'},{id:2,title:'bbbb'}] };
  }
}
</script>

<style lang="less">
  @import '../../styles/weui/widget/weui_progress/weui_progress';
</style>