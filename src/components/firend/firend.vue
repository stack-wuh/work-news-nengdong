<template>
  <section class="wrapper">
    <my-nav @confirm="getKeyWord" @getKeyWord="getKeyWord" type="1"/>
    <div class="content">
      <!-- <my-search @getSearchMsg="getSearchMsg" type='2' /> -->
    <div class="detail">
      <nav>
        <span :class="{'active' : current == 0}" @click="handleChange(0)">行业动态</span>
        <span :class="{'active' : current == 1}" @click="handleChange(1)">企业文化</span>
        <span :class="{'active' : current == 2}" @click="handleChange(2)">校友名录</span>
      </nav>
    </div>
      <my-item-list @getFetchMsg="getFetchMsg" :list="list" />
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
        list:'行业动态',
        keyword:''
      },
      total:0,
      current:0
    };
  },
  methods: {
    handleChange(index){
      this.current = index
      this.search.list = index == 0 ? '行业动态' : index == 1 ? '企业文化' : '校友名录'
      this.search.page = 1
      this.fetchData()
    },
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
      this.$http("News/manage",this.search).then(res => {
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
