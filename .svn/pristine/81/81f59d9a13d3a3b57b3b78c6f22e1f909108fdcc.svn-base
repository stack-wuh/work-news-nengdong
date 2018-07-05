<template>
  <section class="wrappers">
    <div class="btn-list">
      <span @click="item.click" v-for="(item,index) in newList.list" :key="index" class="btn">{{item.name}}</span>
    </div>
    <el-input clearable @change="$emit('confirm',keyword)" v-model="keyword"  v-show="newList.isShowInput" placeholder="请输入内容" class="my-input">
      <template slot="append">
        <span @click="$emit('getKeyWord',keyword)" class='my-tag'>搜索</span>
      </template>
    </el-input>
  </section>
</template>

<script>
export default {
  props: ["type"],
  data() {
    return {
      list: [
        {
          type: 1,
          isShowInput:true,
          list: [
            {
              name: "发布",
              click:this.publish
            },
            {
              name: "批量操作",
              click:this.handleShowCheck
            }
          ]
        },
        {
          type:2,
          isShowInput:true,
          list:[
            {
              name:'返回上一级',
              click:this.goBack
            }
          ]
        }
      ],
      keyword:''
    };
  },
  computed:{
    newList(){
      return this.list.find(item=>{
        return item.type == this.type
      })
    }
  },
  methods:{
    handleShowCheck(){
      let state = this.$store.state.showCheck
      this.$store.commit('handleClickShowCheck',{state:!state})
    },
    publish(){
      let name = this.$route.name , type = ''
      switch(name){
        case 'news' : type = 'news'
                    break;
        case 'message' : type = 'notice'
                    break;
        case 'firend' : type = 'company'
                    break;
        case 'student' : type = 'student'
                    break;
      }
      this.$router.push('/publish/'+type)
    },
    goBack(){
      this.$router.go(-1)
    }
  }

};
</script>

<style lang="less" scoped>
.wrappers {
  display: flex !important;
  flex-flow: row nowrap !important;
  justify-content: space-between !important;
  align-items: center !important;
  width:100%;
  height: 60px;
  padding:0 20px;
  background-color: #e0e0e0;
  box-sizing: border-box;
  .my-input{
    width:220px;
    .my-tag{
      display: inline-block;
      width:50px;
      height:38px;
      line-height:38px;
      text-align: center;
      color: #fff;
      background-color: #00998d;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
}
</style>
