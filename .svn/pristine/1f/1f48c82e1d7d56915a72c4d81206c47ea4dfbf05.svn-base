<template>
  <section class="wrapper">
    <left-menu class="leftmenu"></left-menu>
    <section class="father">
      <my-header class="header" />
      <section  class="main">
        <transition name="fade" mode="out-in">
           <router-view v-loading="showLoading" />
        </transition>
      </section>
    </section>
  </section>
</template>

<script>
import MyHeader from "@/components/common/header";
import LeftMenu from "@/components/common/leftmenu";
export default {
  components: {
    MyHeader,
    LeftMenu
  },
  data() {
    return {};
  },
  watch:{
    '$route':function(){
      this.$store.commit('handleClickShowCheck',{state:false})
    }
  },
  computed: {
    showLoading() {
      return this.$store.state.globlaLoading
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .leftmenu {
    width: 220px;
    min-width: 200px;
    color: #fff;
    background-color: #2f3534;
  }
  .father {
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    height: 100%;
    background-color: #e8f0f0;

    .header {
      height: 80px;
      background-color: #009489;
    }
    .main {
      flex: 1;
      min-width:980px;
      padding: 20px;
      box-sizing: border;
    }
  }
}
.fade-enter-active, .fade-leave-active{
  transition: opacity .3s ease 
}
.fade-fade-enter, .fade-leave-to{
  opacity: 0
}
</style>

