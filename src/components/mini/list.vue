<template>
    <section class="wrapper">
    <div class="nav-top">
      <span>小程序</span>
    </div>
    <div class="detail">
      <nav>
        <span @click="handleChange(index)" :class="{'active' : current == index}" v-for="(item,index) in concatList" :key="item.id">{{item.correlation}}</span>
      </nav>
      <my-item-list @getFetchMsg="getFetchMsg" :list="list" :page="search.page" :type="search.cid" />
      <my-bottom @getCurrentPage="getCurrentPage" :total="total" />
    </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      concatList:[],
      search:{
        cid:1,
        page:1
      },
      list:[],
      total:0
    };
  },
  methods: {
    getCurrentPage(e){
      this.search.page = e
      this.fetchData()
    },
    getFetchMsg(e){
      e && this.fetchData()
    },
    handleChange(index){
      this.current = index
      this.search.cid = index + 1
      this.fetchData()
    },
    fetchData(){
      this.$http('Correlation/syncList',this.search)
        .then(res=>{
          this.list = res.list
          this.total = Number.parseInt(res.total)
        })
    },
    handleClickChange(type){
      this.current = type
    },
    getConcatList(){
      this.$http('Correlation/lists').then(res=>{
        this.concatList = res
      })
    }
  },
  created(){
    this.getConcatList()
    this.fetchData()
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  align-items: flex-start;
  justify-content: flex-start;
}
.nav-top {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: 22px;
  background-color: #e0e0e0;
  span {
    margin-left: 25px;
    padding-left: 15px;
    color: #00998d;
    border-left: 4px solid #00998d;
  }
}
div.detail {
  width: 100%;
  height: calc(100% - 60px);
  padding: 5px 15px;
  box-sizing: border-box;
  overflow: auto;
  nav {
    padding-bottom: 5px;
    margin-top: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #00998d;
    span {
      font-size: 16px;
      padding: 0 10px;
      padding-bottom: 5px;
      border: 1px solid #00998d;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    span.active {
      background-color: #00998d;
      color: #fff;
    }
    span:hover {
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
