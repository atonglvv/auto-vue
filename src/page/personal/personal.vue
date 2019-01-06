<template>
  <div class="app">
    <div class="personal-top">



      <!--  头像  -->
      <div class="top-left">
        <img src="../../assets/images/tx.jpg" alt="">
      </div>

      <!--  个人信息  -->
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
          <div class="out">
            <div class="personal-title"style="font-size:25px;margin-top:1px;">
              <br/><br/>
              《这是标题》
            </div>
            <div class="personal-content">
              收藏日期：2019-1-1
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <el-button type="primary" round>查看</el-button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </div></div>
        </el-tab-pane>



        <!--  用户发布资讯界面  -->
        <el-tab-pane>
          <span slot="label"><i class="el-icon-circle-plus"></i> 资讯发布</span>
          <div class="personal-i">资讯发布</br>
          </div><hr>
          <div class="out-2">
            <div class="out2top">
              有什么第一手资讯分享给大家？
            </div>
            <div class="out2body">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item>
                  <el-input v-model="form.name" style="width:450px;"placeholder="请输入标题"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input type="textarea":rows="15" v-model="form.desc" style="width:500px;"></el-input>
                </el-form-item>


                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-change="handleChange"
                    :file-list="fileList3">
                    <el-form-item>
                      <el-button  type="primary" style="margin-left:200px;"><i class="el-icon-picture"></i></el-button>
                      <el-button type="primary" @click="onSubmit">发布资讯</el-button>
                    </el-form-item>

                </el-upload>


              </el-form>
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
       form: {
          title:'',
          desc:''
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
      totalComment:0
    }
  },


  created(){
    this.selectMyPost(1,1,2);
    this.selectMyComment(1,1,2);

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
        that.$message({
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
          that.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },

    //Info分页
    handleCurrentChange(val) {
        this.pageCountInfo = val;
        this.selectMyPost(1,this.pageCountInfo,this.pageSizeInfo);
    },
    //Comment分页
    handleCommentChange(val) {
      this.pageCountComment = val;
      this.selectMyComment(1,this.pageCountComment,this.pageSizeComment);
    },

    // 调用后台用户发布资讯接口
    selectMyPost(userId,pageNum,pageSize){
      this.$axios({
        method: 'get',
        url:"http://localhost:8088/auto/info",
        params:{
          pageNum:pageNum,
  				pageSize:2,
          userId:1
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
          userId:1
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
    }
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
  margin-top: 40px;
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
  height: 600px;
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
</style>
