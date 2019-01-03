<template>
  <div class="container">
    <Headers />
    <div class="about">
      关于我们

    </div>
      <div class="left">
        <img src="../assets/a.jpg" alt="">
      </div>
      <div class="right">
        <i class="el-icon-caret-right"></i>
        Auto:全球最大的机车资讯网站</br></br>
        <i class="el-icon-caret-right"></i>
        成立于2019年1月1日</br></br>
        <i class="el-icon-caret-right"></i>
        立足于广大的机车爱好者群体,为车友们提供了一个良好的机车鉴赏、交流平台。</br>
        我们将在这里发布第一手机车资讯、方便广大机车爱好者随时随地了解新车、热门车的
        各类资料。</br></br>
        <i class="el-icon-caret-right"></i>
        我们欢迎来到Auto的每一个人，无论你是资深机车迷还是刚接触机车的新人，我们都力图为
        你提供最全面的机车资讯以及最优质的机车服务。并希望与你携手，共同进步，绘制更加美好的未来。</br></br>


      </div>

    <Footers />
  </div>
</template>

<script>
import Headers from "../components/headers"
import Footers from "../components/footers"

export default {
  name:"about",
  components:{
    Headers,
    Footers
  }
}
</script>

<style>
.about{
  margin-top: 15px;
  height: 100px;
  text-align: center;
  font-size:50px;
  font-family:'楷体';
}
.left{
  float: left;
  margin-left: 30px;
  height: 1000px;
  width: 35%;
}
.right{
  float: left;
  margin-left: 40px;
  height: 1000px;
  width: 55%;
  font-size:25px;
  font-family:'楷体';
  line-height: 40px;
}
</style>
