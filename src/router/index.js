import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home'
import TableDemo from '@/components/home/TableDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Login', component: Login
    },
    {path: '/home', name: 'Home', component: Home, children:[
        {path: '/tableDemo', name: 'TableDemo', component: TableDemo}
      ]
    }
  ]
})
