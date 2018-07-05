<template>
  <section class="wrapper">
    <el-table border stripe :data="list">
      <el-table-column align="center" label="留言内容" prop="content"></el-table-column>
      <el-table-column align="center" label="身份" prop="shenfen"></el-table-column>
      <el-table-column align="center" label="姓名" prop="name"></el-table-column>
      <el-table-column align="center" label="回复内容" prop="reply"></el-table-column>
      <el-table-column align="center" label="是否展示" prop="isshow">
        <template slot-scope="scope">
          <span>{{scope.row.isshow == 0 ? '否' : '是'}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" >
        <template slot-scope="scope">
          <el-button @click="jump2Detail(scope.row.mid)" v-if="!scope.row.reply" size="mini" type="text">回复</el-button>
          <!-- <el-button size="mini" type="text">删除</el-button> -->
          <el-button :class="[scope.row.isshow == 0 ? 'info' : 'active']" @click="changeState(scope.row.mid)" size="mini" type="text">{{scope.row.isshow == 0 ? '不展示' : '展示'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <my-bottom :total="total" />
  </section>
</template>

<script>
export default {
  data(){
    return{
      list:[],
      total:0,
      search:{
        page:1,
        keyword:''
      }
    }
  },
  methods:{
    changeState(e){
      this.$http('Message/show',{id:e}).then(res=>{
        let error = res.error == 0 ? 'success' : 'error'
        _g.toastMsg(error,res.msg)
        if(res.error == 0){
          this.fetchData()
        }
      })
    },
    jump2Detail(e){
      this.$router.push('/note/detail/' + e)
    },
    fetchData(){
      this.$http('Message/manage',this.search).then(res=>{
        this.total = Number.parseInt(res.total)
        this.list = res.list
      })
    }
  },
  created(){
    this.fetchData()
  }
}
</script>


<style lang="less" scoped>
.active{
  color: #00998d;
}
.info{
  color: #999;
}
</style>
