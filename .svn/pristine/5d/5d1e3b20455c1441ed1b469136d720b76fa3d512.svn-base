<template>
    <section class="wrapper">
      <div class="img-box"></div>
      <div class="form-area">
        <h3>能动学院新闻公告管理平台</h3>
        <el-input class="my-input" v-model="form.username" placeholder="请输入您的账号">
          <template slot="prepend">
            <div class="input-bg">
              <img src="../../static/img/user.png" alt="user">
            </div>
          </template>
        </el-input>
        <el-input type="password" class="my-input" v-model="form.password" placeholder="请输入您的密码">
          <template slot="prepend">
            <div class="input-bg">
              <img src="../../static/img/pwd.png" alt="pwd">
            </div>
          </template>
        </el-input>
        <el-button @click="login" class="my-button">登录</el-button>
      </div>
    </section>
</template>

<script>
export default {
  data(){
    return{
      form:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    login(){
      if(!this.form.username){  
        _g.toastMsg('error','请输入用户名')
        return
      }
      if(!this.form.password){
        _g.toastMsg('error','请输入登陆密码')
        return
      }
      this.$http('User/login',this.form).then(res=>{
        let error = res.error == 0 ? 'success' : 'error'
        _g.toastMsg(error,res.msg)
        if(res.error == 0){
          setTimeout(()=>{
            this.$router.push('/index')
          },1000)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper{
  position: relative;
  display: flex;
  width: 100%;
  height:100%;
  background:url('../../static/img/bg.png') no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  .img-box{
    position: absolute;
    bottom:-140px;
    left:0;
    width:100%;
    height:238px;
    background: url('../../static/img/bg-white.png') no-repeat;
    background-size: 100% 238px;
  }

  .form-area{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: column wrap;
    width:500px;
    height:400px;
    align-self: center;
    margin:0 auto;
    padding:40px 0;
    background-color: #fff;
    box-sizing: border-box;
    h3{
      flex:.3;
      font-size: 30px;
      line-height:24px;
    }
    .my-input{
      width:400px;
      div.input-bg{
        width:50px;
        height:38px;
        text-align:center;
        background-color: #00998d;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        img{
          margin-top:5px;
        }
      }
    }
    .my-button{
      width:400px;
    }
  }
}
</style>
