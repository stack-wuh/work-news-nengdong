<template>
  <section class="wrapper">
    <my-nav type="2" />  
    <p>当前位置: 通知公告>详情</p>
    <my-item-info :info="info"  />
  </section> 
</template>

<script>
export default {
  data() {
    return {
      info:{}
    }
  },
  methods:{
    fetchData(){
      this.$http('Notice/detail',{id:this.$route.params.id}).then(res=>{
        this.info = res
      })
    }
  },
  created(){
    this.fetchData()
  }
};
</script>


<style lang="less" scoped>
.wrapper {
  p {
    padding: 20px;
    font-size: 14px;
    color: #999;
  }
}
</style>
