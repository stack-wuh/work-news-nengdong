<template>
  <header class="header">
    <div class="img-box">
      <img src="../../../static/img/index-logo.png" alt="logo">
    </div>
    <div>
      <span @click="logout" class="my-icon-dianyuan">退出</span>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$http("User/logout").then(res=>{
        let error = res.error == 0 ? 'success' : 'error'
        _g.toastMsg(error,res.msg)
        if(res.error == 0){
          this.$router.replace('/login')
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
header.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  color: #fff;

  div {
    span.my-icon-dianyuan {
      margin-right: 40px;
      font-size: 24px;
    }
    span.my-icon-dianyuan:hover {
      cursor: pointer;
    }
  }
}
</style>
