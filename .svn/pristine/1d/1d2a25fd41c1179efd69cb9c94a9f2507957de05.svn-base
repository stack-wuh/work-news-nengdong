import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home  = resolve => require(['@/components/home'],resolve)
const Index = resolve => require(['@/components/index'],resolve)
const NewsIndex = resolve => require(['@/components/news/news'],resolve)
const NewsDetail = resolve => require(['@/components/news/detail'],resolve)

const Publish = resolve => require(['@/components/common/publish'],resolve)

const NoteList = resolve => require(['@/components/note/list'],resolve)
const NotePrev = resolve => require(['@/components/note/child/prev'],resolve)
const NoteAll = resolve => require(['@/components/note/child/all'],resolve)
const NoteDetail = resolve => require(['@/components/note/detail'],resolve)

const MiniIndex = resolve => require(['@/components/mini/list'],resolve)

const Login = resolve => require(['@/components/login'],resolve)

const MessageIndex = resolve => require(['@/components/message/message'],resolve)
const MessageDetail = resolve => require(['@/components/message/detail'],resolve)

const FirendIndex = resolve => require(['@/components/firend/firend'],resolve)
const FirendDetail = resolve => require(['@/components/firend/detail'],resolve)

const StudentIndex = resolve => require(['@/components/student/student'],resolve)
const StudentDetail = resolve => require(['@/components/student/detail'],resolve)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      redirect:'/index',
      component:Home
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/index',
          name:'index',
          component:Index
        }
      ]
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/news',
          name:'news',
          component:NewsIndex
        },
        {
          path:'news/detail/:id',
          name:'NewsDetail',
          component:NewsDetail
        },
      ]
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/publish/:type',
          name:'publish',
          component:Publish
        }
      ]
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/note',
          name:'noteList',
          redirect:'/note/prev',
          component:NoteList,
          children:[
            {
              path:'/note/all',
              name:'noteAll',
              component:NoteAll
            },
            {
              path:'/note/prev',
              name:'notePrev',
              component:NotePrev
            },
          ]
        },
        {
          path:'/note/detail/:id',
          name:'noteDetail',
          component:NoteDetail
        }
      ]
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/mini',
          name:'mini',
          component:MiniIndex
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/message',
          name:'message',
          component:MessageIndex
        },
        {
          path:'/message/detail/:id',
          name:'messageDetail',
          component:MessageDetail
        }
      ]
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/firend',
          name:'firend',
          component:FirendIndex
        },
        {
          path:'/firend/detail/:id',
          name:'firendDetail',
          component:FirendDetail
        }
      ]
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/student',
          name:'student',
          component:StudentIndex
        },
        {
          path:'/student/detail/:id',
          name:'studentDetail',
          component:StudentDetail
        }
      ]
    }    
  ]
})
