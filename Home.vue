<template>
  <div>
    <swiper :list="demo01_list" :index="demo01_index" @on-index-change="demo01_onIndexChange"></swiper> 
  </div>
  <a v-link="'/a'"> article list</a>
</template>
 
<script>
  import { Swiper,SwiperItem,Cell, Group, Badge } from './components-vux';
  import Icon from 'vue-awesome';
  import { articlelist} from './components/articlelist';

  const baseList =
  [{
  url: 'javascript:',
  img: './src/assets/img/1.jpg',
  title: '如何手制一份秋意的茶？'
  }, {
  url: 'javascript:',
  img: './src/assets/img/2.jpg',
  title: '茶包VS原叶茶'
  }, {
  url: 'javascript:',
  img: './src/assets/img/3.jpg',
  title: '播下茶籽，明春可发芽？'
  }]

  export default {
  components: {
  Swiper,
  SwiperItem,
  Cell,
  Group,
  Badge,
  Icon
  },
  methods: {
  demo01_onIndexChange (index) {
  this.demo01_index = index
  }},
  data () {
  return {
  demo01_list: baseList,
  demo01_index:0
  }
  }
  }
</script>

<style>
  @import './styles/global.less';
  @import './demos/style.css';
  .center {
    margin-top: 15px;
    text-align: center;
  }
  
  .vux-notice {
    color: #666;
    line-height: 40px;
  }
  
  .vux-title {
    vertical-align: middle;
    text-align: center;
    color: #04BE02;
    display: inline-block;
    width: 75px;
    height: 75px;
    line-height: 75px;
    border-radius: 50%;
  }
</style>