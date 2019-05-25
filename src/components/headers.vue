<template>
	<div class="app-head">

		<div class="app-head-inner">

			<div class="head-img">
				<router-link to="/">
          <img src="../assets/logo.png" alt="">
        </router-link>
        <span>auto:全球最大的机车资讯网站</span>
			</div>

			<div class="head-nav">
				<ul class="nav-list">
					<li><router-link to="/info">资讯</router-link></li>
					<li class="nav-pile">|</li>
					<li><router-link to="/motorAll">机车</router-link></li>
					<li class="nav-pile">|</li>
					<li v-show="isShow"><router-link :to="{path:'/personal',
																							query:{
																									id:userId
																							}}">{{name}}</router-link></li>
					<!-- <li v-show="isShow"><router-link :to="{path:'/personal'}">{{name}}</router-link></li> -->
					<li v-show="isShow" class="nav-pile">|</li>
					<li v-show="isRlShow"><router-link to="/login">登录</router-link></li>
					<li v-show="isRlShow" class="nav-pile">|</li>
					<li v-show="isRlShow"><router-link to="/register">注册</router-link></li>
					<li v-show="isRlShow" class="nav-pile">|</li>
					<li><router-link to="/about">关于</router-link></li>
				</ul>
			</div>
		</div>

	</div>
</template>
<script>

export default{
	name:"headers",
	data(){
		return{
			name:'',
			isShow:false,
			isRlShow:false,
			user:{},
			userId:0,
		}
	},
	created(){
		this.getSession();
	},

	methods: {
		getSession(){
			this.name = null;
			// alert("ahh");
			this.name = sessionStorage.getItem("name");
			console.log(this.name);
			// var userJsonStr = sessionStorage.getItem('user');
			this.user = JSON.parse(sessionStorage.getItem('user'));
			if (this.user != null) {
				this.name = this.user.name;
			}
			console.log(this.name);
			if (this.name != null) {
				this.isShow = true;
				this.isRlShow = false;
			}else {
				console.log(this.name);
				this.isShow = false;
				this.isRlShow = true;
			}

			this.userId = this.user.id;
		}
	}
}

</script>
<style scoped>

.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 80px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner {
	height: 80px;
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.head-img{
	height: 80px;
	margin: auto;
	float: left;
}
.app-head-inner span{
  position: relative;
  top: -10px;
	font-family: fantasy;
}
.app-head-inner img {
  width: 50px;
  margin-top: 20px;
}
.head-nav {
  float: right;
	height: 80px;
	margin: auto;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}


</style>
