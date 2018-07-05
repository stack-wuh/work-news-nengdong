<template>
  <section class="wrapper">
    <section class="info">
      <article>
        <h4>{{info.title}}</h4>
        <p><span>类型: </span><span>{{info.list}}</span><span>时间: </span><span>{{info.pubtime}}</span></p>
        <p>{{info.abstract}}</p>
        <p v-html="info.content"></p>
      </article>
      <img @click="handleClickDel" src="../../../static/img/icon-delete.png" alt="delete">
    </section>
  </section> 
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {};
  },
  methods: {
    handleClickDel(){
      let name = this.$route.name , url = '' , data = {}
      switch(name){
        case 'NewsDetail' : url = 'News/delete' , data.id = this.info.tid
                    break;
        case 'messageDetail' : url = 'Notice/delete' ,data.id = this.info.nid
                    break;
        case 'firendDetail' : url = 'News/delete' , data.id = this.info.tid
                    break;
      }
      this.$http(url,data).then(res=>{
        let error = res.error == 0 ? 'success' : 'error'
        _g.toastMsg(error,res.msg)
        if(res.error == 0){
          setTimeout(()=>{
            this.$router.go(-1)
          },1000)  
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  height: 100%;
  box-sizing: border-box;
  .info {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;
    width: 90%;
    height: 100%;
    padding: 10px 30px;
    margin: 0 auto;
    margin-bottom: 15px;
    border: 1px solid #eee;
    box-sizing: border-box;
    overflow: auto;
    article {
      flex: 1;
      h4 + p {
        margin: 5px 0;
        span:nth-child(2n) {
          margin-right: 10px;
          color: #999;
        }
      }
      text-align: center;
    }
    img:hover {
      cursor: pointer;
    }
  }
}
</style>
