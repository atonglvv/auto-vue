<template>
  <div class="app">
    <div class="personal-top">
      <div class="top-left">
        <img src="../../assets/images/tx.jpg" alt="">
      </div>
      <div class="top-right">
        <div class="t-r-t">吕小小英雄</div>
        <div class="t-r-m"><i class="el-icon-edit-outline"></i>修改资料</div>
      </div>
    </div>

    <div class="personal">
      <el-tabs :tab-position="tabPosition" style="height: 500px;">
        <el-tab-pane label=">>我的评论">
          <div class="personal-i">我的评论</br>
          </div><hr>
          <div class="personal-title">
            《这是标题》
          </div>
          <div class="personal-content">
            评论日期：2019-1-1
            <el-button type="primary" round>查看</el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
            <hr/>
          </div>
        </el-tab-pane>



        <el-tab-pane label=">>我的收藏">
          <div class="personal-i">
            我的收藏</br>
          </div><hr>
          <div class="personal-title">
            《这是标题》
          </div>
          <div class="personal-content">
            收藏日期：2019-1-1
            <el-button type="primary" round>查看</el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
            <hr/>
          </div>
        </el-tab-pane>



        <el-tab-pane label=">>账户信息">
          <div class="personal-i">账户信息</br>
          </div>
          <hr>
          <div class="img">
            <img src="../../assets/images/tx.jpg" alt="">
          </div>
          <div class="xx">
            <ul>
            <li>吕小小英雄</li><br/><br/>
            <li>性别：男</li><br/><br/>
            <li><i class="el-icon-date"></i>注册：2019-1-1</li><br/><br/>

            <li><i class="el-icon-mobile-phone"></i>电话：123</li><br/><br/>
            <li></li><br/><br/>
            <li></li><br/><br/>
            <li></li><br/><br/>
            </ul>
          </div>
        </el-tab-pane>
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
  height: 600px;
}
.personal hr{
  margin-top:25px;
  border:1px solid gray;
}
.personal-i{
  margin-left:100px;
  font-size: 20px;
  color: red;
}
.personal-content hr{
  border:1px dashed gray;
}

.personal-content{
  margin-top: 45px;
  margin-left: 100px;
  font-size: 18px;
}
.personal-title{
  margin-left:100px;
  margin-top: 20px;
  font-size: 15px;
  color: red;
}
.img{
  float: left;
  margin-left: 80px;
  margin-top: 40px;
  width: 200px;
  height: 200px;

}
.xx{
  float: left;
  margin-top: 40px;
  margin-left: 30px;
  font-size: 20px;
}
</style>
