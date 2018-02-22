import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './components/layout'
import IndexPage from './pages/index'
import vueResource from 'vue-resource'
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/detail/analysis'
import DetailForPage from  './pages/detail/forecast'
import DetailCouPage from './pages/detail/count'
import DetailPubPage from './pages/detail/publish'



Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(vueResource);

let router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:IndexPage
    },{
      path:'/detail',
      component:DetailPage,
      redirect:'/detail/analysis',
      children:[{
        path:'forecast',
        component:DetailForPage
      },{
        path:'analysis',
        component:DetailAnaPage
      },{
        path:'count',
        component:DetailCouPage
      },{
        path:'publish',
        component:DetailPubPage
      }

      ]
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
