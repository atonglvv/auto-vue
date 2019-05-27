<template>
  <div class="app">
    <div class="top">
      <br/>
      <p style="font-size:30px;">{{info.title}}</p><br/><br/><br/>
      <p style="font-size:20px;">{{info.name}}</p><br/>
      <p style="font-size:18px;">{{info.createdTime}}</p><br/><br/>
      <p style="font-size:15px;">{{info.title}}</p><br/>
    </div>
    <div class="left">
      <div class="left-content">
        {{info.textBody}}
      </div>
      <div class="left-img">
        <img :src="info.image" alt="" >
      </div>
    </div>



    <div class="midd">
      <div class="midd-in">
      <div class="midd-img">
        <img :src="user.head" alt="">
      </div>
      <div class="midd-name">
        {{user.name}}
      </div>
      <div class="midd-content">
        {{user.personalProfile}}
      </div>
    </div>
    </div>
    <div class="footer">
      <div class="footer-1">
        <el-collapse>
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


      <!-- <div class="footer-2-0">
      <el-rate
        v-model="value2"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </el-rate><br/>
      </div> -->
      <div class="footer-2-1">
        <i class="el-icon-view">：{{info.clicks}}次</i>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <!-- <i class="el-icon-star-on">：999次</i> -->
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <el-button :type="type" icon="el-icon-star-off" circle size="mini" @click="collection"></el-button>
      </div>
      <hr/>

      <div class="footer-3" v-for="item in comments">

        <div class="footer-3-1">
          {{item.name}}：
        </div>
        <div class="footer-3-2">
          {{item.content}}
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
      infoId:null,
      value2: null,
      info:{},
      user:{},
      userId:'',
      sessionId:'',
      comments:[],
      type:"info",
    }
  },
  created() {
      this.infoId = this.$route.query.id;
      this.sessionId = sessionStorage.getItem("id");
      this.clicks(this.infoId);
      this.selectInfo(this.infoId,1,1);
      // this.selectUser(this.userId);
      this.selectUser(1);
      this.selectComment(this.infoId);
      this.selectCollection(this.infoId,this.sessionId);
  },
  methods:{
    // 调用资讯查询接口
    selectInfo(infoId,pageNum,pageSize){
      var that = this;
      this.$axios({
        method: 'get',
        url: this.GLOBAL.baseURL + "/auto/info",
        params:{
          pageNum:pageNum,
  				pageSize:pageSize,
          infoId:that.infoId
        }
      })
      .then(data => {
        console.log(data);
        that.info = (data.data.res);
        that.userId = that.info.userId,
        //查询该用户信息
        selectUser(that.userId);
        console.log("this.info = " + that.info);
        console.log("this.info.userId = " + that.userId);
        // console.log("this.info = ");
      })
      .catch(error => {
        console.log(error)
      })
    },
    //查询用户
    selectUser(id){
      console.log("this.id = " + id);
      this.$axios({
        method: 'get',
        url:  this.GLOBAL.baseURL + "/auto/user/queryUser",
        params:{
          userId:id
        }
      })
      .then(data => {
        console.log(data)
        this.user= data.data.res;
      })
      .catch(error => {
        console.log(error)
      })
    },
    onSubmit(){

      if (this.sessionId == '' || this.sessionId == null) {
        this.$message({
          showClose: true,
          message: '请先登录',
          type: 'error'
        });
        return false;
      }

      var that = this;
      this.$axios({
        method: 'post',
        url: this.GLOBAL.baseURL + "/auto/comment/insertComment",
        data:this.$qs.stringify({
          userId:this.sessionId,
          infoId:this.info.id,
          content:this.form.comment
        })
      })
      .then(data => {
        that.$message({
          type: 'success',
          message: '评论成功'
        });
        that.clearFrom();
        that.selectComment(that.infoId);
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    //清空资讯发布表单
    clearFrom() {
      //清理表单
      this.form.comment = '';
    },

    //查询该资讯下所有评论
    selectComment(infoId){
      var that = this;
      this.$axios({
        method: 'get',
        url: this.GLOBAL.baseURL + "/auto/comment/queryInfoComment",
        params:{
          infoId:that.infoId
        }
      })
      .then(data => {
        console.log(data);
        that.comments = data.data.res;
      })
      .catch(error => {
        console.log(error)
      })
    },

    selectCollection(infoId,userId){
      var that = this;
      this.$axios({
        method: 'get',
        url: this.GLOBAL.baseURL + "/auto/collection/queryIsCollection",
        params:{
          infoId:that.infoId,
          userId:that.sessionId,
        }
      })
      .then(data => {
        console.log(data);
        if (data.data.status == 1) {
          that.type = "warning";
        }else {
          that.type = "info";
        }
      })
      .catch(error => {
        console.log(error)
      })
    },

    clicks(id){
      this.$axios({
        method: 'post',
        url: this.GLOBAL.baseURL + "/auto/info/clickInfo",
        data:this.$qs.stringify({
          infoId:id
        })
      })
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
    },

    collection(){

      if (this.sessionId == '' || this.sessionId == null) {
        this.$message({
          showClose: true,
          message: '请先登录',
          type: 'error'
        });
        return false;
      }

      if (this.type == "info") {
        var that = this;
        this.$axios({
          method: 'post',
          url: this.GLOBAL.baseURL + "/auto/collection/insertCollection",
          data:this.$qs.stringify({
            infoId:that.infoId,
            userId:that.sessionId,
          })
        })
        .then(data => {
          console.log(data);
          if (data.data.status == 1) {
            that.type = "warning";
          }else {
            that.type = "info";
          }
        })
        .catch(error => {
          console.log(error)
        })
      }else if (this.type == "warning") {
        var that = this;
        this.$axios({
          method: 'post',
          url: this.GLOBAL.baseURL + "/auto/collection/cancelCollection",
          data:this.$qs.stringify({
            infoId:that.infoId,
            userId:that.sessionId,
          })
        })
        .then(data => {
          console.log(data);
          this.type = "info";
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
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
  font-size: 20px;
  text-align:center;
}
.midd-content{
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 15px;
  text-align:center;
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
