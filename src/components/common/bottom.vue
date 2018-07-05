<template>
  <section class="wrapper">
    <el-pagination @current-change="handleClickCurrentChange" :page-size="15" :total="total" layout="total,prev,pager,next,jumper"></el-pagination>
  </section>
</template>

<script>
export default {
  props:['total'],
  data() {
    return {

    }
  },
  methods:{
    handleClickCurrentChange(e){
      this.$emit('getCurrentPage',e)
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper{
  display: flex;
  align-items: center;
  margin:15px 0;
}
</style>
