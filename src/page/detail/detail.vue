<template>
  <div class="app">
    <div class="top">
      <br/>
      <p style="font-size:30px;">这是标题</p><br/><br/><br/>
      <p style="font-size:20px;">这是作者</p><br/>
      <p style="font-size:18px;">2019-01-01</p><br/><br/>
      <p style="font-size:15px;">这是文章摘要</p><br/>
    </div>
    <div class="left">
      <div class="left-content">
      后来
      我总算学会了 如何去爱
      可惜你 早已远去
      消失在人海
      后来 终于在眼泪中明白
      有些人 一旦错过就不再
      你都如何回忆我
      带着笑或是很沉默
      这些年来
      有没有人能让你不寂寞
      后来
      我总算学会了 如何去爱
      可惜你 早已远去
      消失在人海
      后来 终于在眼泪中明白
      有些人 一旦错过就不再
      后来
      我总算学会了 如何去爱
      可惜你 早已远去
      消失在人海
      后来 终于在眼泪中明白
      有些人 一旦错过就不再
      </div>
      <div class="left-img">
        <img src="../../assets/images/g.png" alt="" >
      </div>
    </div>



    <div class="midd">
      <div class="midd-in">
      <div class="midd-img">
        <img src="../../assets/images/tx.jpg" alt="">
      </div>
      <div class="midd-name">
        吕小小英雄
      </div>
      <div class="midd-content">
        这是个人介绍这是个人介绍这是个人介绍这是个人介绍这是个人介绍这是个人介绍这是个人介绍这是个人介绍这是个人介绍
      </div>
      <hr/>
      <div class="midd-tittle">
        <p>-----他的文章-----</p><br/><br/>
        《这是标题111》<br/><br/>《这是标题222》<br/><br/>《这是标题333》<br/><br/>
      </div>
    </div>
    </div>
    <div class="footer">
      <div class="footer-1">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="点击评论" name="1" style="text-align:center;">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item>
                <el-input v-model="form.comment"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">发表</el-button>
              </el-form-item>
            </el-form>
          </el-collapse-item>
        </el-collapse>
      </div>


      <div class="footer-2-0">
      <el-rate
        v-model="value2"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </el-rate><br/>
      </div>
      <div class="footer-2-1">
        <i class="el-icon-view">：999次</i>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="el-icon-star-on">：999次</i>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <el-button type="warning" icon="el-icon-star-off" circle size="mini"></el-button>
      </div>
      <hr/>

      <div class="footer-3">

        <div class="footer-3-1">
          来自用户--吕小小英雄--的评论：
        </div>
        <div class="footer-3-2">
          你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！
          <hr/>
        </div><br/>

        <div class="footer-3-1">
          来自用户--吕中中英雄--的评论：
        </div>
        <div class="footer-3-2">
          你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！
          <hr/>
        </div><br/>

        <div class="footer-3-1">
          来自用户--吕大大英雄--的评论：
        </div>
        <div class="footer-3-2">
          你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！你的牌打的忒好啦！
          <hr/>
        </div><br/>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form: {
          comment: ''
        },
      id:"",
      value2: null
    }
  },
  created() {
      this.id = this.$route.query.id;
  }
}
</script>

<style scoped>
.top{
  height: 200px;
  text-align: center;
  background-color: #d1e9e9;
}

.left{
  height: 900px;
  float: left;
  width: 65%;

}
.left-content{
  margin-top: 40px;
  margin-left: 50px;
  margin-right: 20px;
  font-size: 20px;
}
.left-img{
  margin-top: 40px;
  margin-left: 50px;
  margin-right: 20px;
  width: 700px;
  height: 500px;
  background-color: black;
}
.left-img img{
  width: 700px;
  height: 500px;
}
.midd{
  height: 900px;
  float: left;
  width: 35%;

}
.midd-in{
  height: 800px;
  margin-left: 10%;
  margin-right: 20%;
  width: 70%;
  background-color: white;
  border-radius:25px;
}
.midd-img{
  margin-top: 40px;
  margin-left: 30%;
  height:130px;
  width: 130px;
  border-radius:250px;
  overflow: hidden;
}
.midd-name{
  margin-top: 30px;
  margin-left: 37%;
  font-size: 20px;
}
.midd-content{
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 15px;
}
.midd-tittle{
    margin-top: 30px;
    text-align: center;
    font-size: 20px;
}

.footer{
  float: left;
  margin-left: 5%;
  margin-right: 5%;
  height: 800px;
  width: 90%;
  background-color: white;
  border-radius:25px;
}
.footer-1{
  margin-left: 15%;
  margin-top: 20px;
  width: 70%;
}
.footer-2-0{
  margin-top: 20px;
  margin-left: 40%;
  float: left;
}
.footer-2-1{
  margin-left: 60%;
  margin-top: 20px;
  width: 70%;
}
.footer-3-1{
  margin-left: 20px;
  font-size: 15px;
}
.footer-3-2{
  margin-top: 10px;
  margin-left: 10%;
  margin-right: 10%;
}
</style>
