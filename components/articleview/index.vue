<template>
  <div>
    <div v-if="$loadingRouteData">Loading ...</div>
    <div v-if="!$loadingRouteData">
      <span>{{articleID}} </span>
      <span @click="getArticle">{{$route.params.articleid}}</span>
    </div>
  </div>
</template>

<script> 

import VueRouter from 'vue-router'; 

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
    getArticle:function(){
      console.log(this.articleID);
      this.articleID=this.$route.params.articleid;
    }
  },
  data:function() { 
   return { articleID:0};
  },
    route: RouteHelper('articleview')
}

function RouteHelper(name) {
    var route = { 
      //加载和设置当前组件的数据
        data: function(transition) {
          this.articleID=this.$route.params.articleid;
            console.log('执行组件' + name + '的钩子函数:data')
            transition.next()
        }
    }
    return route;
}

</script>

<style lang="less">
  @import '../../styles/weui/widget/weui_progress/weui_progress';
</style>