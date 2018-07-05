<template>
  <section class="wrapper">
    <div class="nav-top">
      <span>留言管理</span>
      <el-input class="my-input">
        <template slot="append"><span class="my-tag">搜索</span></template>
      </el-input>
    </div>
    <div class="detail">
      <p>留言回复</p>
      <p>留言内容:</p>
      <p>{{info.content || '无'}}</p>
      <p>留言人:</p>
      <p>{{info.shenfen || '学生'}}：{{info.name || '无'}}</p>
      <p>留言时间:</p>
      <p>{{info.pubtime}}</p>
      <p>回复:</p>
      <el-input v-model="reply" class="my-input" type="textarea" :rows="4" placeholder="请编辑回复内容"></el-input>
    </div>
    <div class="btn-area">
      <span @click="submit" class="btn">提交</span>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      info:{},
      reply:''
    }
  },
  methods:{
    submit(){
      if(!this.reply){
        _g.toastMsg('error','请编辑回复内容')
        return
      }
      this.$http('Message/reply',{id:this.$route.params.id,reply:this.reply}).then(res=>{
        let error = res.error == 0 ? 'success' : 'error'
        _g.toastMsg(error,res.msg)
        if(res.error == 0){
          setTimeout(()=>{
            this.$router.go(-1)
          },500)
        }
      })
    },
    fetchData(){
      this.$http('Message/detail',{id:this.$route.params.id}).then(res=>{
        this.info = res
      })
    }
  },
  created(){
    this.fetchData()
  }
}
</script>

<style lang="less" scoped>
.wrapper{
  justify-content: flex-start;
  align-items: flex-start;
}
.nav-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  font-size: 20px;
  background-color: #e0e0e0;

  span{
    margin-left: 25px;
    padding-left: 15px;
    color: #00998d;
    border-left: 4px solid #00998d;
  }
  .my-input{
    width:220px;
    margin-right:15px;
    .my-tag{
      display: inline-block;
      width:50px;
      height:38px;
      padding:0;
      margin:0;
      line-height:38px;
      text-align: center;
      color: #fff;
      background-color: #00998d;
      border-radius: 4px;
    }
  }
}
.detail{
  width:100%;
  padding:10px 20px;
  box-sizing: border-box;
  p:nth-child(2n-1){
    margin:5px 0;
    color: #999;
  }
  p:first-child{
    color: #00998d;
  }
  .my-input{
    width:90%;
    margin-top:5px;
  }
}
.btn-area{
  width:100%;
  text-align:center;
}

</style>
