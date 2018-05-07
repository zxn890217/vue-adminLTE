// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/js/bootstrap.min.js'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './assets/adminlte/css/AdminLTE.min.css'
import './assets/adminlte/css/skins/_all-skins.min.css'
import './assets/style.css'
import './assets/adminlte/js/adminlte'
import '../node_modules/vue-easytable/libs/themes-base/index.css'
import {VTable,VPagination} from 'vue-easytable'

Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
