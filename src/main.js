// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/store'

import {Button,Input,Pagination,Form,FormItem,Select,Option,Table,TableColumn,Message,Loading,Dialog,Checkbox,CheckboxGroup,MessageBox} from 'element-ui'
import '../static/el-base/index.css'
import '../static/less/base.less'
import '../static/font/iconfont.css'
import '../static/less/el.less'

import apiMethods from '../static/js/http'
import _g from '../static/js/global'

Vue.config.productionTip = false
Vue.prototype.$http = apiMethods
Vue.prototype.$message = Message
Vue.prototype.$store = store
Vue.prototype.$messageBox = MessageBox

window.rootPath = '/adminapi/'
window.axios = axios
window.$bus = new Vue()
window._g = _g
window.store = store

Vue.prototype.$ElEMENT = {size:'small',zIndex:3000}
Vue.use(Button)
Vue.use(Input)
Vue.use(Pagination)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Loading)
Vue.use(Dialog)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
import Nav from '@/components/common/nav'  // 页面顶部按钮导航
Vue.component('my-nav',Nav)

import Searchs from '@/components/common/searchs'  // 页面条件搜索
Vue.component('my-search',Searchs)

import ItemList from '@/components/common/itemList' // 列表
Vue.component('my-item-list',ItemList)

import MyBottom from '@/components/common/bottom'  // 底部按钮/分页
Vue.component('my-bottom',MyBottom)

import MyCheck from '@/components/common/check'  // 批量操组件
Vue.component('my-check',MyCheck)

import ItemInfo from '@/components/common/itemInfo' //列表详情
Vue.component('my-item-info',ItemInfo)

router.beforeEach((to,from,next)=>{
  if(to.path != '/login'){
    axios.get(rootPath + 'User/checkLogin').then(res=>{
      if(!res.data){
        router.replace('/login')
      }else{
        next()
      }
    })
  }else{
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
