import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cpdx from '@/components/cpdx'
import cphe from '@/components/cphe'
import cpsxb from '@/components/cpsxb'
import cpjj from '@/components/cpjj'
import cpxz from '@/components/cpxz'
import cpai from '@/components/cpai'
import yhd from '@/components/yhd'
import ysd from '@/components/ysd'
import xw from '@/components/xw'
//import gywm from '@/components/gywm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld,
//    children: [  //这里就是二级路由的配置
//      {
//        path: 'cpdx',
//        component:cpdx
//      }]
    },
      {
      path: '/HelloWorld',
      component: HelloWorld
    },
     {
      path: '/cpdx',
      component: cpdx
    },
     {
      path: '/cphe',
      component: cphe
    },
     {
      path: '/cpsxb',
      component: cpsxb,
   
    },
      {
      path: '/cpjj',
      component: cpjj
    }
      ,
      {
      path: '/cpxz',
      component: cpxz
    },
      {
      path: '/cpai',
      component: cpai
    },
       {
      path: '/yhd',
      component: yhd
    },
    {
      path: '/ysd',
      component: ysd
    },
     {
      path: '/xw',
      component: xw
  }
 ]
})
