<template>
  <div class="app">
    <div class="personal-top">
      <div class="top-left">
        <img src="../../assets/images/tx.jpg" alt="">
      </div>
      <div class="top-right">
        <div class="t-r-t">吕小小英雄</div>
        <div class="t-r-m"><i class="el-icon-edit"></i>修改资料</div>
      </div>
    </div>
    <div class="personal">
      <el-tabs :tab-position="tabPosition" style="height: 200px;">
        <el-tab-pane label=">>我的评论">我的评论</el-tab-pane>
        <el-tab-pane label=">>我的收藏">我的收藏</el-tab-pane>
        <el-tab-pane label=">>账户设置">账户设置</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tabPosition: 'left'
    }
  }
}
</script>

<style>
.personal-top{

  height: 230px;
  background-color: black;
  background: url(../../assets/images/personal.jpg);

}
.top-left{
  float: left;
  margin-left: 180px;
  margin-top: 50px;
  background-color: black;
  height:130px;
  width: 130px;
  border-radius:250px;
  overflow: hidden;
}
.top-right{
  float: left;
  margin-top: 50px;
  width: 200px;
  height: 130px;
}
.t-r-t{
  margin-top: 40px;
  font-size: 20px;
  text-align: center;
}
.t-r-m{
  margin-top: 40px;
  font-size: 15px;
  text-align: center;
}
.personal{
  margin-top: 30px;
  margin-left: 150px;
}
</style>
