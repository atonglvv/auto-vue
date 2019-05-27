<template>

  <div id="app">
    <el-container class="container" >
      <el-header height="30px">
        <h2>用户登录</h2>
      </el-header>
      <el-aside style="width:35%;margin:auto;height:260px">
        <p>还没有账号？点击<router-link style="color:blue" to="/register">注册</router-link></p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="66px" class="demo-ruleForm" style="margin:10px 0px">
        <el-form-item label="邮箱" prop="mail" >
          <!-- <el-input v-model="ruleForm.mail" onblur="sendEmail()"></el-input> -->
          <el-input v-model="ruleForm.mail"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        </el-form>
        <p v-model="ruleForm.errorMsg" style="color:red">{{ruleForm.errorMsg}}</p>
        <router-view/>

      </el-aside>

    </el-container>
  </div>
</template>

<script>
export default {
    data() {
      return {
        ruleForm: {
          mail: '',
          sex: '',
          errorMsg: ''
        },
        rules: {
          mail: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios({
              method: 'post',
              url:this.GLOBAL.baseURL + "/auto/user/login",
              data:this.$qs.stringify({
                email:this.ruleForm.mail,
                userPassword:this.ruleForm.password
              })
            })
            .then(data => {
              console.log(data);
              // 判断用户名密码是否正确，如果正确则跳转到首页
              if (data.data.status == 1) {
                if (data.data.res.isAdmin == '1') {
                  this.$router.push({
                    path: '/motor',
                  })
                }else {
                  sessionStorage.setItem("name", data.data.res.name);
                  sessionStorage.setItem("id", data.data.res.id);
                  sessionStorage.setItem("user", JSON.stringify(data.data.res));
                  this.$router.push({
                    path: '/',
                  })
                }
              }else {
                console.log(data.data.msg)
                this.ruleForm.errorMsg = data.data.msg
                console.log(data.data.msg)
              }
            })
            .catch(error => {
              console.log(error)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 20px; */
  width: 100%;
  height: 100%;
  align-items: center;
  margin: auto;
}

.container{
  width: 50%;
  margin: 120px auto;
}
</style>
