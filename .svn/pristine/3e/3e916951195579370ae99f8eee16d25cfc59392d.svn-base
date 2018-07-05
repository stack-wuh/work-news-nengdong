<template>
  <section class="wrapper">
    <my-nav @confirm="getKeyWord" @getKeyWord="getKeyWord" type="1"/>
    <div class="content">
      <my-search @getSearchMsg="getSearchMsg" type='2' />
      <my-item-list @getFetchMsg="getFetchMsg" :list="list" :type="search.list" />
      <my-bottom @getCurrentPage="getCurrentPage" :total="total" />
    </div>
  </section>
</template>

<script>
import MyNav from "@/components/common/nav";
import Searchs from "@/components/common/searchs";
import ItemList from "@/components/common/itemList";
export default {
  components: {
    MyNav,
    Searchs,
    ItemList
  },
  data() {
    return {
      list: [],
      search:{
        page:1,
        list:'',
        keyword:''
      },
      total:0
    };
  },
  methods: {
    getSearchMsg(e){
      this.search.list = e.value == '全部' ? '' : e.value
      e.change && this.fetchData()
    },
    getFetchMsg(e){
      e && this.fetchData()
    },
    getCurrentPage(e){
      this.search.page = e
      this.fetchData()
    },
    getKeyWord(e){
      this.search.keyword = e
      this.fetchData()
    },
    fetchData() {
      this.$http("Notice/manage",this.search).then(res => {
        this.list = res.list;
        this.total = Number.parseInt(res.total);
      });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style lang="less" scoped>

</style>
