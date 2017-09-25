import Vue from 'vue'
import Router from 'vue-router'

import classify from '../components/classify/classify.vue'
import home from '../components/home/home.vue'
import myPet from '../components/myPet/myPet.vue'
import shopCart from '../components/shopCart/shopCart.vue'

import shouye from '../components/shouye/shouye.vue'
import zhuliang from '../components/zhuliang/zhuliang.vue'
import maosha from '../components/maosha/maosha.vue'
import yiliao from '../components/yiliao/yiliao.vue'
import lingshi from '../components/lingshi/lingshi.vue'
import meirong from '../components/meirong/meirong.vue'

import zhuce from '../components/zhuce/zhuce.vue'



Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component: home,
      redirect: '/home/shouye',
      children:[
        {
          path: '/home/shouye',
          component: shouye
        },
        {
          path: '/home/zhuliang',
          component: zhuliang
        },
        {
          path: '/home/maosha',
          component: maosha
        },
        {
          path: '/home/yiliao',
          component: yiliao
        },
        {
          path: '/home/lingshi',
          component: lingshi
        },
        {
          path: '/home/meirong',
          component: meirong
        }
      ]
    },
    {
      path:'/classify',
      component:classify
    },
    {
      path:'/shopCart',
      component:shopCart
    },
    {
      path:'/myPet',
      component:myPet,
      children:[{
        path:'/zhuce',
        component:zhuce,
      }]
    },
  ]
})
