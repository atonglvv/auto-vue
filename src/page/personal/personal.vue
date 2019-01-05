<template>
  <div class="app">
    <div class="personal-top">
      <div class="top-left">
        <img src="../../assets/images/tx.jpg" alt="">
      </div>
      <div class="top-right">
        <div class="t-r-t">
          吕小小英雄
        </div>
        <div class="t-r-m">
          <router-link style="color:blue" to="/modify"><i class="el-icon-edit-outline"></i>修改资料</router-link>
        </div>
      </div>
    </div>

    <div class="personal">
      <el-tabs :tab-position="tabPosition" style="height: 800px;">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-edit"></i> 我的评论</span>
          <div class="personal-i">我的评论</br>
          </div><hr>
          <div class="personal-title">
            《这是标题》
          </div>
          <div class="comment">
            来自我的评论：你的牌打的也忒好啦
          </div>
          <div class="personal-content">
            评论日期：2019-1-1

            <el-button type="danger" icon="el-icon-delete" circle></el-button>
            <hr/>
          </div>
        </el-tab-pane>



        <el-tab-pane>
          <span slot="label"><i class="el-icon-star-on"></i> 我的收藏</span>
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



        <el-tab-pane>
          <span slot="label"><i class="el-icon-setting"></i> 账户信息</span>
          <div class="personal-i">账户信息</br>
          </div>
          <hr>
          <div class="img">
            <img src="../../assets/images/tx.jpg" alt="">
          </div>
          <div class="r-img">
            <ul>
            <li>吕小小英雄</li><br/><br/>
            <li>性别：男</li><br/><br/>
            <li><i class="el-icon-date"></i>注册：2019-1-1</li><br/><br/>

            <li><i class="el-icon-mobile-phone"></i>电话：123</li><br/><br/>
            </ul>
          </div>
          <div class="u-img">
            <ul>
              <li>个人介绍：12345677653211111111111111111111111111111111111111111。</li><br/><br/>
              <li>账号类别：普通用户</li><br/><br/>
              <li>居住地点：青岛</li><br/><br/>
              <li>个人邮箱：lxxyx@163.com</li><br/><br/>
            </ul>
          </div>
          <div class="btn">
            <el-button type="danger" round>退出登录</el-button>
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
  margin-top: 50px;
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
  margin-top: 30px;
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
  margin-right: 80px;
  width: 200px;
  height: 200px;

}
.comment{
  margin-top: 50px;
  margin-left: 130px;
}
.r-img{
  margin-top: 40px;
  margin-left: 50px;
  font-size: 20px;

}
.u-img{
  margin-top: 5px;
  margin-left: 80px;
  font-size: 20px;
}
.btn{
  width: 100%;
  text-align: center;
}
</style>
