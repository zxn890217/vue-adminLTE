<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-body">
        <ul class="search-form">
          <li>
            <input maxlength="32" class="form-control" v-model="searchForm.name" placeholder="姓名">
          </li>
          <li>
            <button class="btn btn-primary" @click="search"><i class="fa fa-search"></i>搜索</button>
          </li>
          <li>
            <button class="btn btn-default" type="reset" @click="reset"><i class="fa fa-undo"></i>重置</button>
          </li>
        </ul>
      </div>
    </div>
    <v-table
      is-horizontal-resize
      style="width:100%"
      :columns="tableConfig.columns"
      :table-data="tableConfig.tableData"
      row-hover-color="#eee"
      row-click-color="#edf7ff"
    ></v-table>
    <div class="mt20 mb20 bold"></div>
    <v-pagination @page-change="pageChange"
                  @page-size-change="pageSizeChange"
                  :total="tableTotal"
                  :page-size="pageSize"
                  :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']">
    </v-pagination>
  </div>
</template>
<script>
  export default {
    name: "TableDemo",
    data(){
      return {
        pageIndex:1,
        pageSize:20,
        tableTotal:0,
        searchForm:{
          name:''
        },
        tableConfig:{
          tableData: [
            {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
            {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
            {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
            {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
            {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
          ],
          columns: [
            {field: 'name', title: '姓名', width: 80, titleAlign: 'center', columnAlign: 'center',isResize:true},
            {field: 'tel', title: '手机号码', width: 150, titleAlign: 'center', columnAlign: 'center',isResize:true},
            {field: 'hobby', title: '爱好', width: 150, titleAlign: 'center', columnAlign: 'center',isResize:true},
            {field: 'address', title: '地址', width: 280, titleAlign: 'center', columnAlign: 'left',isResize:true}
          ]
        }
      };
    },
    methods:{
      pageSizeChange: function(){

      },
      pageChange: function(){

      },
      search: function(){

      },
      reset: function(){

      }
    }
  }
</script>
