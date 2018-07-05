<template>
  <section class="wrapper">
    <nav>
      <img v-show="choose == false" @click="handleClickChange"  src="../../../static/img/icon-check-default.png" alt="check">
      <img v-show="choose == true" @click="handleClickChange"  src="../../../static/img/icon-check-action.png" alt="check">
      <span @click="handleClickChange">全选</span>
      <span @click="$emit('chooseAllDel',true)">删除</span>
      <img @click="handleClickHideCheck" src="../../../static/img/icon-close.png" alt="close">
    </nav>
  </section>  
</template>

<script>
export default {
  props:['chooseList'],
  data() {
    return {
      choose:false
    };
  },
  methods: {
    handleClickChange(){
      this.choose = !this.choose
      this.$emit('chooseAll',this.choose)
    },
    handleClickHideCheck(){
      this.$store.commit('handleClickShowCheck',{state:false})
    },

  }
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  nav {
    display: flex;
    align-items: center;
    height: 40px;
    width: 100%;
    padding: 0 10px;
    background-color: #e0e0e0;
    user-select: none;
    span {
      margin-right: 15px;
    }
    span:last-of-type {
      flex: 1;
    }
    span:hover,
    img:hover {
      cursor: pointer;
    }
    img {
      margin-right: 15px;
    }
    img[alt="check"] {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
