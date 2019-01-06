<template>
  <div class="app">
    <div class="personal-top">
      <div class="top-left">
        <img src="../../assets/images/tx.jpg" alt="">
      </div>
      <div class="top-right">
        <div class="t-r-t">
          修改个人信息
        </div>
        <div class="t-r-m">
          <router-link style="color:blue" to="/personal">返回个人主页</router-link>
        </div>
      </div>
    </div>

    <div class="personal">
      <el-tabs :tab-position="tabPosition" style="height: 800px;">

        <el-tab-pane>
          <span slot="label"><i class="el-icon-edit"></i> 信息编辑</span>
          <div class="personal-i">信息编辑</br>
          </div><hr>
          <div class="upload">
            <el-upload class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              点击上传头像
          </div>
          <div class="r-img">
            <el-form :inline="true" :model="form" class="demo-form-inline">
              <ul><br/>
                <li>
                  <el-form-item label="姓名：">
                    <el-input v-model="form.name" placeholder="吕小小英雄"></el-input>
                  </el-form-item>
                </li><br/>

                <li>
                  <el-form-item label="性别：">
                    <el-radio-group v-model="form.sex">
                      <el-radio label="男"></el-radio>
                      <el-radio label="女"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                  </li><br/>

                  <li>
                    <el-form-item label="生日：">
                      <el-col :span="11">
                        <el-date-picker type="date" placeholder="请选择" v-model="form.birthday" style="width: 200px;"></el-date-picker>
                      </el-col>
                    </el-form-item>
                  </li><br/>
                  <li>
                    <el-form-item label="电话：">
                      <el-input v-model="form.phone" placeholder="123"></el-input>
                    </el-form-item>
                  </li><br/>
            </ul>
            </el-form>
          </div>
          <div class="btn">
            <i class="el-icon-upload"></i>
              <el-button type="info" round>保存</el-button>
          </div>
        </el-tab-pane>



        <el-tab-pane>
          <span slot="label"><i class="el-icon-edit"></i> 修改密码</span>
          <div class="personal-i">
            修改密码</br>
          </div><hr>
          <div class="password">
            <el-form :inline="true" :model="form" class="demo-form-inline">
              <el-form-item label="请输入原始密码：" prop="password">
                <el-input v-model="form.password"></el-input>
              </el-form-item><br/>
              <el-form-item label="请输入新的密码：" prop="newpassword">
                <el-input v-model="form.newpassword"></el-input>
              </el-form-item>
            </el-form>

          </div>
          <div class="btn">
            <i class="el-icon-upload"></i>
              <el-button type="info" round>保存</el-button>
          </div>
        </el-tab-pane>

        <el-tab-pane>
          <span slot="label"><i class="el-icon-edit"></i> 个人介绍</span>
          <div class="personal-i">
            个人介绍</br>
          </div><hr>
          <div class="text">
            <el-form :inline="true" :model="form">
              <el-form-item label="个人介绍：">
                <el-input type="textarea" v-model="form.personal"style="width: 600px; height:100px;"></el-input>
              </el-form-item>
            </el-form>
          </div>

          <div class="btn">
            <i class="el-icon-upload"></i>
              <el-button type="info" round>保存</el-button>
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
          name: '',
          sex: '',
          birthday:'',
          phone: '',
          password:'',
          newpassword:'',
          personal:''
        },
      tabPosition: 'left',
      imageUrl: ''
    };
  },
  methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    },
    rules: {
      sex: [
        { required: true, required: true, message: '请选择性别', trigger: 'change' }
      ],
      birthday: [
        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
      ],
      newpassword: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
      ],
    }
}
</script>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
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

.upload{
  float: left;
  margin-left: 80px;
  margin-top: 60px;
  margin-right: 80px;
  width: 200px;
  height: 300px;
  text-align: center;
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
  margin-top: 20px;
  width: 80%;
  text-align: center;
}
.password{
  margin-top: 80px;
  width: 80%;
  text-align: center;
}
.text{
  margin-top: 80px;
  width: 80%;
  height: 100px;
  text-align: center;
}
</style>
