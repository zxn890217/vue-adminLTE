<template>
  <!-- sidebar: style can be found in sidebar.less -->
  <section class="sidebar">
    <!-- sidebar menu: : style can be found in sidebar.less -->
    <ul class="sidebar-menu" data-widget="tree">
      <li class="header">MAIN NAVIGATION</li>
      <template v-for="m in menus">
        <li v-if="m.children" class="treeview">
          <a href="#">
            <i :class="m.iconClass"></i>
            <span>{{m.title}}</span>
          </a>
          <ul class="treeview-menu">
            <li v-for="c in m.children">
              <a href="#" @click="navTo(c, m)"><i :class="c.iconClass"></i>{{c.title}}</a>
            </li>
          </ul>
        </li>
        <li v-else>
          <a href="#" @click="navTo(m, null)"><i :class="m.iconClass"></i><span>{{m.title}}</span></a>
        </li>
      </template>
    </ul>
  </section>
  <!-- /.sidebar -->
</template>
<script>
  export default{
    name:"NavMenu",
    props: ["eventHub"],
    data(){
      return {
        menus:[
          {title: 'Home', iconClass: 'fa fa-dashboard', children:[
            {title: 'TableDemo', subTitle: 'easy table', iconClass: 'fa fa-circle-o', path:'tableDemo'},
            {title: 'TableDemo1', subTitle: 'easy table', iconClass: 'fa fa-circle-o', path:'tableDemo1'}
          ]},
          {title: 'TableDemo1', iconClass: 'fa fa-calendar', path:'tableDemo2'}
        ]
      }
    },
    methods:{
      navTo: function(menu, parent){
        this.$router.push(menu.path);
        this.eventHub.$emit("selectedNavMenu",{child: menu, parent: parent});
      }
    }
  }
</script>
