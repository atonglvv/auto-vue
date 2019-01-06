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
    <div class="right">

    </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id:""
    }
  },
  created() {
      this.id = this.$route.query.id;
  }
}
</script>

<style>
.top{
  height: 200px;
  text-align: center;
  background-color: #d1e9e9;
}

.left{
  height: 1200px;
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
  height: 1200px;
  float: left;
  width: 27%;
}
.midd-in{
  height: 1000px;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
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
.right{
  height: 1200px;
  width: 8%;
  float: left;
}
</style>
