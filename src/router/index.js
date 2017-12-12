import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import enter from '@/components/enter'
import register from '@/components/register'
import allkind from '@/components/allkind'
import seek from '@/components/seek'
import sign from '@/components/sign'
import transportation from '@/components/transportation'
import man from '@/components/man'
import woman from '@/components/woman'
import mine from '@/components/mine'
import search from '@/components/search'
import shoppingAddr from '@/components/shoppingAddr'
import shoppingCar from '@/components/shoppingCar'
import enterOrder from '@/components/enterOrder'
import submitOrder from '@/components/submitOrder'
import seckill from '@/components/seckill'
import shoppingContent from '@/components/shoppingContent'
import shoppingList from '@/components/shoppingList'



Vue.use(Router)

export default new Router({
    routes: [
   	    {
        path: '/index',
        name: 'index',
        component: index
    },
    {
        path: '/enter',
        name: 'enter',
        component: enter
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
    {
        path:'/allkind',
        name: 'allkind',
        component:allkind
    },
    {
        path: '/seek',
        name: 'seek',
        component: seek
    },
    {
        path: '/sign',
        name: 'sign',
        component: sign
    },
    {
        path: '/transportation',
        name: 'transportation',
        component: transportation
    },
    {
        path: '/man',
        name: 'man',
        component: man
    },
    {
        path: '/woman',
        name: 'woman',
        component: woman
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
     {
      path: '/search',
      name: 'search',
      component: search
    },
     {
      path: '/shoppingAddr',
      name: 'shoppingAddr',
      component: shoppingAddr
    },
    {
      path: '/shoppingCar',
      name: 'shoppingCar',
      component: shoppingCar
    },
      {
      path: '/enterOrder',
      name: 'enterOrder',
      component: enterOrder
    },

    {
      path: '/submitOrder',
      name: 'submitOrder',
      component: submitOrder
    },
    {
      path: '/seckill',
      name: 'seckill',
      component: seckill
    },
    {
      path: '/shoppingContent',
      name: 'shoppingContent',
      component: shoppingContent
    },
    {
      path: '/shoppingList',
      name: 'shoppingList',
      component: shoppingList
    },




    {
		path:"/",
		redirect:"/index"
    }]
    // ,
    // scrollBehavior (to, from, savedPosition) {  
    //     //滚动行为。让所有的路由页面滚蛋到顶部
    //     return { x: 0, y: 0 }
    // }
    
})
