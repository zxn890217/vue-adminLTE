<template>
  <section class="content-header" v-if="title">
    <template v-if="parentTitle">
      <h1>
        {{title}}
        <small v-if="subTitle">{{subTitle}}</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i :class="parentIconClass"></i>{{parentTitle}}</a></li>
        <li class="active">{{title}}</li>
      </ol>
    </template>
    <template v-else>
      <h1>
        {{title}}
        <small v-if="subTitle">{{subTitle}}</small>
      </h1>
    </template>
  </section>
</template>

<script>
  export default {
    name: "ContentHeader",
    data(){
      return {
        title: null,
        subTitle: null,
        parentTitle: null,
        parentIconClass: null
      }
    },
    props: ["eventHub"],
    mounted: function(){
        var _this = this;
        this.eventHub.$on("selectedNavMenu", function(msg){
            if(msg.child){
              _this.title = msg.child.title;
              _this.subTitle = msg.child.subTitle;
              if(msg.parent){
                _this.parentTitle = msg.parent.title;
                _this.parentIconClass = msg.parent.iconClass;
              }
              else{
                _this.parentTitle = null;
                _this.parentIconClass = null;
              }
            }
            else{
              _this.title = null;
              _this.subTitle = null;
              _this.parentTitle = null;
              _this.parentIconClass = null;
            }
        })
    }
  }
</script>
