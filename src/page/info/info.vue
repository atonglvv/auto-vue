<template>
  <div class="parent">
    <Headers />
    <div class="app">

      <!-- <el-row :gutter="12" class="el-row"> -->
        <el-col :span="8" v-for="item in datainfo" class="el-col">
          <el-card shadow="hover">
            <div class="card-left">
              <img :src="item.image" class="info-img">
              <!-- <img src="../../assets/slideShow/j2.jpg" class="info-img"> -->
            </div>
            <div class="card-right">
              <div class="content-top">
                {{item.title}}
              </div>
              <div class="content">
                {{item.title}}
              </div>
              <div class="content-bottom">
                  <div class="author">
                    {{item.name}}
                  </div>
                  <div class="time">
                    {{item.createdTime}}
                  </div>
              </div>
            </div>
          </el-card>
        </el-col>
      <!-- </el-row> -->
    </div>
    <Footers />
  </div>

</template>

<script>
// import Headers from "../../components/headers"
// import Footers from "../../components/footers"
import Headers from "@/components/headers"
import Footers from "@/components/footers"
export default {
  name:"info",
  components:{
    Headers,
    Footers
  },
  data(){
    return{
      title:'',
			datainfo: []
		}
  },
  created(){
    this.$axios({
      method: 'get',
      url:"http://localhost:8088/auto/info"
    })
    .then(data => {
      console.log(data)
      this.datainfo = data.data.res;
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>

<style>

.app{
  margin: auto;
  width: 800px;
  height: 2000px;
}

.el-col{
  width: 800px;
  height: 240px;
  margin: 10px auto;
}

.el-card{
  height: 240px;
}

.el-card__body{
  height: 200px;
}

.info-img{
  width: 100%;
  height: 100%;
}

.card-left{
  float:left;
  width: 270px;
  height: 100%;
}
.card-right{
  float:left;
  width: 450px;
  height: 200px;
  margin: 10px 10px;
}
.author{
  width: 100px;
  float: left;
}
/* 标题样式 */
.content-top{
  display: block;
  font-size: 18px;
  color: #31424e;
  font-weight: bold;
  text-align: left;
}
.content{
  font-size: 14px;
  text-align: left;
  color: #5e6b73;
  line-height: 22px;
  padding: 52px 0;
  text-align: left;

}

</style>
