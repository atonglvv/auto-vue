<template>
  <div class="app">
    <div class="personal-top">



      <!--  头像  -->
      <div class="top-left">
        <img :src="user.head" alt="">
      </div>

      <!--  个人信息  -->
      <div class="top-right">
        <div class="t-r-t">
          {{user.name}}
        </div>

        <div class="t-r-m">
          <router-link style="color:blue" to="/"><i class="el-icon-back"></i>返回首页</router-link>
        </div>
        <div class="t-r-m">
          <router-link style="color:blue" :to="{path:'/modify',
																							query:{
																									id:userId
																							}}"><i class="el-icon-edit-outline"></i>修改资料</router-link>
        </div>
      </div>
    </div>




    <div class="personal">
      <el-tabs :tab-position="tabPosition" style="height: 800px;">


        <!--  用户所有发布的信息列表  -->
        <el-tab-pane>
          <span slot="label"><i class="el-icon-tickets"></i> 我的发布</span>
          <div class="personal-i">我的发布</br>
          </div><hr>
          <div class="info">
            <div class="out" v-for="item in mypost">
              <div class="personal-title" style="font-size:25px;margin-top:-1px;">
                <br/><br/>
                {{item.title}}
              </div>
              <div class="comment">
                内容摘要：{{item.title}}
              </div>
              <div class="personal-content">
                发布日期：{{item.createdTime}}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-button type="danger" icon="el-icon-delete" circle @click="deletepost(item.id)"></el-button>
              </div>
            </div>
          </div>

          <el-pagination
            class="pagination"
            @current-change="handleCurrentChange"
            :page-size="pageSizeInfo"
            layout="prev, pager, next"
            :total="totalInfo">
            <!-- :pager-count="pageCountInfo" -->
          </el-pagination>
        </el-tab-pane>



        <!--  用户评论过的资讯列表  -->
        <el-tab-pane>
          <span slot="label"><i class="el-icon-edit"></i> 我的评论</span>
          <div class="personal-i">我的评论</br>
          </div><hr>
          <div class="info">
            <div class="out" v-for="item in myComment">
              <div class="personal-title" style="font-size:25px;margin-top:-1px;">
                <br/><br/>
                {{item.title}}
              </div>
              <div class="comment">
                来自我的评论：{{item.content}}
              </div>
              <div class="personal-content">
                评论日期：{{item.createdTime}}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-button type="danger" icon="el-icon-delete" circle @click="deleteComment(item.id)"></el-button>
              </div>
            </div>
          </div>

          <el-pagination
            class="pagination"
            @current-change="handleCommentChange"
            :page-size="pageSizeComment"
            layout="prev, pager, next"
            :total="totalComment">
          </el-pagination>
        </el-tab-pane>




        <!--  用户收藏的资讯列表  -->
        <el-tab-pane>
          <span slot="label"><i class="el-icon-star-on"></i> 我的收藏</span>
          <div class="personal-i">
            我的收藏</br>
          </div><hr>
          <div class="info">
            <div class="out" v-for="item in myCollection">
              <div class="personal-title"style="font-size:25px;margin-top:1px;">
                <br/><br/>
                {{item.title}}
              </div>
              <div class="personal-content">
                收藏日期：{{item.createdTime}}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-button type="primary" round>查看</el-button> -->
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-button type="danger" icon="el-icon-delete" circle @click="deleteCollection(item.id)"></el-button>
              </div>
            </div>
          </div>

          <el-pagination
            class="pagination"
            @current-change="handleCollectionChange"
            :page-size="pageSizeCollection"
            layout="prev, pager, next"
            :total="totalCollection">
          </el-pagination>

        </el-tab-pane>



        <!--  用户发布资讯界面  -->
        <el-tab-pane>
          <span slot="label"><i class="el-icon-circle-plus"></i> 资讯发布</span>
          <div class="personal-i">资讯发布</br>
          </div><hr>
          <div class="out-2">
            <!-- <div class="out2top">
              有什么第一手资讯分享给大家？
            </div> -->
            <div class="out2body">
              <!-- <el-form ref="form" :model="form" label-width="80px">
                <el-form-item>
                  <el-input v-model="form.name" style="width:450px;"placeholder="请输入标题"></el-input>
                </el-form-item>

                <el-form-item >
                  <el-input type="textarea":rows="15" v-model="form.desc" style="width:500px;"></el-input>
                </el-form-item>

                <el-form-item >
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                  </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                  </el-dialog>
                </el-form-item>

              </el-form> -->

              <el-form :model="form" :rules="rules2" ref="addform" label-width="80px">
                <el-form-item>
                  <el-input v-model="form.title" style="width:450px;"placeholder="请输入标题"></el-input>
                </el-form-item>
                <el-form-item >
                  <el-input type="textarea":rows="15" v-model="form.desc" style="width:500px;"></el-input>
                </el-form-item>
                <el-form-item  :label-width="formLabelWidth">
                    <el-upload action="" list-type="picture-card" :on-change="handlePictureCardChange" :on-remove="handleRemove" :limit="1" :before-upload="beforeAvatarUpload" :auto-upload="false" :file-list="formList">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="imageRef" alt="">
                    </el-dialog>
                </el-form-item>
              </el-form>
              <div slot="footer" class="post-footer">
                  <el-button type="primary" @click="postInfo">确 定</el-button>
              </div>
            </div>

          </div>
        </el-tab-pane>



        <!--  用户账户信息  -->
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
            <li>{{user.name}}</li><br/><br/>
            <li>性别：{{user.gender == 1 ? "男" : "女"}}</li><br/><br/>
            <li><i class="el-icon-date"></i>注册：{{user.createdTime}}</li><br/><br/>

            <li><i class="el-icon-mobile-phone"></i>电话：{{user.phone}}</li><br/><br/>
            </ul>
          </div>
          <div class="u-img">
            <ul>
              <li>个人介绍：{{user.personalProfile}}</li><br/><br/>
              <li>账号类别：普通用户</li><br/><br/>
              <li>居住地点：{{user.location}}</li><br/><br/>
              <li>个人邮箱：{{user.email}}</li><br/><br/>
            </ul>
          </div>
          <div class="btn">
            <el-button type="danger" round @click="logout">退出登录</el-button>
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
      userId:'',
       form: {
          title:'',
          desc:'',
          file: '',
          imageRefSize:''
       },
       fileList3: [{
          name: '',
          url: ''
        },
        {
          name: '',
          url: ''
        }],
      tabPosition: 'left',

      mypost:[],
      pageSizeInfo:2,
      pageCountInfo:1,
      totalInfo:0,

      myComment:[],
      pageSizeComment:2,
      pageCountComment:1,
      totalComment:0,

      myCollection:[],
      pageSizeCollection:2,
      pageCountCollection:1,
      totalCollection:0,

      user:{},

    }
  },


  created(){
    this.userId = this.$route.query.id;
    this.selectMyPost(this.userId,1,2);
    this.selectMyComment(this.userId,1,2);
    this.selectMyCollection(this.userId,1,2);
    this.selectUser(this.userId);
  },


  methods:{
    // 删除资讯
    deletepost(infoId){
      // 确认框
      this.$confirm('是否要删除该条资讯?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
          this.$axios({
            method: 'post',
            url:"http://localhost:8088/auto/info/deleteInfo",
            data:this.$qs.stringify({
              id:infoId
            })
          })
          .then(data => {
            this.selectMyPost(1,this.pageCountInfo,this.pageSizeInfo);
          })
          .catch(error => {
            console.log(error)
          })
        }).catch(() => {
        this.$message({
            type: 'info',
            message: '已取消删除'
        });
      });
    },

    // 删除评论
    deleteComment(commentId){
      // 确认框
      this.$confirm('是否要删除该条评论?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
          this.$axios({
            method: 'post',
            url:"http://localhost:8088/auto/comment/deleteComment",
            data:this.$qs.stringify({
              id:commentId
            })
          })
          .then(data => {
            this.selectMyComment(1,this.pageCountComment,this.pageSizeComment);
          })
          .catch(error => {
            console.log(error)
          })
        }).catch(() => {
          this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },

    // 取消收藏
    deleteCollection(collectionId){
      // 确认框
      this.$confirm('是否要取消关注?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
          this.$axios({
            method: 'post',
            url:"http://localhost:8088/auto/collection/deleteCollection",
            data:this.$qs.stringify({
              id:collectionId
            })
          })
          .then(data => {
            this.selectMyCollection(1,this.pageCountComment,this.pageSizeComment);
          })
          .catch(error => {
            console.log(error)
          })
        }).catch(() => {
          this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },

    //Info分页
    handleCurrentChange(val) {
        this.pageCountInfo = val;
        this.selectMyPost(this.userId,this.pageCountInfo,this.pageSizeInfo);
    },
    //Comment分页
    handleCommentChange(val) {
      this.pageCountComment = val;
      this.selectMyComment(this.userId,this.pageCountComment,this.pageSizeComment);
    },
    handleCollectionChange(val) {
      this.selectMyCollection(this.userId,val,this.pageSizeComment);
    },

    // 调用后台用户发布资讯接口
    selectMyPost(userId,pageNum,pageSize){
      this.$axios({
        method: 'get',
        url:"http://localhost:8088/auto/info",
        params:{
          pageNum:pageNum,
  				pageSize:2,
          userId:this.userId
        }
      })
      .then(data => {
        console.log(data)
        this.mypost = data.data.res.list;
        this.totalInfo = data.data.res.total;
      })
      .catch(error => {
        console.log(error)
      })
    },

    selectMyComment(userId,pageNum,pageSize){
      this.$axios({
        method: 'get',
        url:"http://localhost:8088/auto/comment/queryMyComment",
        params:{
          pageNum:pageNum,
          pageSize:pageSize,
          userId:this.userId
        }
      })
      .then(data => {
        console.log(data)
        this.myComment = data.data.res.list;
        this.totalComment = data.data.res.total;
      })
      .catch(error => {
        console.log(error)
      })
    },

    selectMyCollection(userId,pageNum,pageSize){
      this.$axios({
        method: 'get',
        url:"http://localhost:8088/auto/collection/queryMyCollection",
        params:{
          pageNum:pageNum,
          pageSize:pageSize,
          userId:this.userId
        }
      })
      .then(data => {
        console.log(data)
        this.myCollection = data.data.res.list;
        this.totalCollection= data.data.res.total;
      })
      .catch(error => {
        console.log(error)
      })
    },

    postInfo() {
        var that = this;
        this.$refs.addform.validate((valid) => {

          if (valid) {
            console.log(this.form);
            if (this.form.title == '') {
                // this.$message.error('上传图片不能为空!');
                this.$message.error('标题不能为空');
                return false;
            }
            if (this.form.desc == '') {
                this.$message.error('内容不能为空');
                return false;
            }
            if (this.form.file == '') {
                this.$message.error('上传图片不能为空!');
                return false;
            }
            if (this.form.imageRefSize > 1) {
                this.$message.error('上传图片大小不能超过 2MB!');
                return false;
            }
            let formData = new FormData();
            formData.append('id',this.userId);
            formData.append('title', this.form.title);
            formData.append('image', this.form.file);
            formData.append('content', this.form.desc);
            console.log(formData);
            console.log("file = " + this.form.file);
            // that.loading = true;
            this.$axios.post('http://localhost:8088/auto/info/insertInfo', formData)
              .then(function(response) {
                  console.log(response);
                  that.$message({
                    type: 'success',
                    message: '发布成功，可在我的发布中查看'
                  });
                  that.clearFrom();
                  // this.selectMyPost(that.userId,1,2);
                  // this.selectMyComment(that.userId,1,2);
                  // this.selectMyCollection(that.userId,1,2);
              })
              .catch(function(error) {
                  console.log(error);
                  // that.loading = false;
              });
            } else {
                console.log('error submit!!');
                return false;
            }
      });
    },

    handlePictureCardChange(file, fileList) {
        // this.form.imageRef = file.url;
        this.form.file = file.raw;
        this.form.imageRefSize = file.size / 1024 / 1024;
    },
    //清空资讯发布表单
    clearFrom() {
            //清理表单
            this.form.title = '';
            this.form.desc = '';
            this.form.imageRefSize = '';
            this.formList = [];
    },
    //清空sessionStorage
    logout(){
      sessionStorage.clear();
      this.$router.push({
        path: '/',
      })
    },
    selectUser(id){
      this.$axios({
        method: 'get',
        url:"http://localhost:8088/auto/user/queryUser",
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

  }
}
</script>

<style scoped>
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
  margin-top: 20px;
  font-size: 15px;
  text-align: center;
}
.out{
  border:1px dashed;
  border-radius:20px;
  margin-left: 100px;
  background-color: white;
  width: 70%;
}
.out-2{
  border:1px dashed;
  border-radius:20px;
  margin-left: 100px;
  background-color: white;
  width: 70%;
  height: 800px;
}
.out2top{
  margin-top: 20px;
  margin-left: 50px;
  font-size: 20px;
  font-family: sans-serif;
  color: #87CEFA;
}
.out2body{
  margin-top: 20px;
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


.personal-content{
  margin-top: 30px;
  margin-left: 280px;
  margin-bottom: 20px;
  font-size: 18px;
}
.personal-title{
  margin-left: 85px;
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
.app{
  height: 100%;
}

.info{
  height: 500px;
}
.pagination{
  padding-left: 400px;
}
.post-footer{
  margin-left: 80px;
}
</style>
