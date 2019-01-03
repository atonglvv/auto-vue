<template>

  <div id="app">
    <el-container>
      <el-header>
        <h2>新用户注册</h2>
      </el-header>
      <el-aside style="width:35%">
        <p>已有账号？点击<a href="">登录</a></p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <!-- <el-form-item label="手机号:" prop="mobil" :rules="filter_rules({required:true,type:'mobile'})">
          <el-input v-model="dynamicValidateForm.mobil"></el-input>
        </el-form-item> -->
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="mail">
          <el-input v-model="ruleForm.mail" onblur="sendEmail()"></el-input>
        </el-form-item>
        <el-form-item label="生日" required>
          <el-col :span="11">
            <el-form-item prop="birthday">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birthday" style="width: 200%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>

        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="ruleForm.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>


        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        </el-form>
        <router-view/>
      </el-aside>

      <el-main>
          <img src="src\page\img\1.png">
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
    data() {
      return {
        ruleForm: {
          name: '',
          password: '',
          mail: '',
          sex: '',
          birthday:''

        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
          ],
          mail: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
          ],
          birthday: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          sex: [
            { type: 'array', required: true, message: '请选择性别', trigger: 'change' }
          ],

        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  width: 100%;
  height: 100%;
  align-items: center;
}
</style>
