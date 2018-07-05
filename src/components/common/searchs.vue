<template>
  <section class="wrapper">
    <nav>
      <span class="title">分类:</span>
      <span @click="handleSearch(index,item)" :class="['item',{active:index == current}]" v-for="(item,index) in searchs.list" :key="index">{{item.name}}</span>
    </nav>
  </section>  
</template>

<script>
export default {
  props:['type'],
  data() {
    return {
      lists:[
        {
          type:1,
          list:[
            {
              name:'全部'
            },
            {
              name:'工会活动'
            },
            {
              name:'班级建设'
            },
            {
              name:'心理健康'
            },
            {
              name:'社团活动'
            },
            {
              name:'学院党建'
            },
            {
              name:'新闻分类'
            }
          ]
        },
        {
          type:2,
          list:[
            {
              name:'全部'
            },
            {
              name:'院办'
            },
            {
              name:'研工办'
            },
            {
              name:'学工办'
            },
            {
              name:'科研办'
            },
            {
              name:'教学办'
            },
            {
              name:'党办'
            }
          ]
        },
        {
          type:3,
          list:[
            {
              name:'学习考试'
            },
            {
              name:'阅读交流'
            },
            {
              name:'国际交流'
            },
            {
              name:'就业指南'
            },
            {
              name:'招聘公告'
            },
            {
              name:'办事指南'
            },
            {
              name:'安全法制'
            },
            {
              name:'信息查询'
            }
          ]
        }
      ],
      current:0
    };
  },
  computed:{
    searchs(){
      return this.lists.find(item => item.type == this.type)
    }
  },
  methods:{
    handleSearch(index,item){
      this.current = index
      this.$emit('getSearchMsg',{change:true,value:item.name})
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper{
  height:40px;
  width:100%;
}
nav{
  span.item{
    display: inline-block;
    margin-right:10px;
    padding:0 5px;
    font-size: 14px;
    color: #666;
  }
  span.active{
    color: #00998d;
    border:1px solid #00998d;
  }
  span.title~span:hover{
    cursor: pointer;
  }
}
</style>
