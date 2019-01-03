<template>
	<div class="app-head">

		<div class="app-head-inner">
    
			<div class="head-img">
				<router-link to="/">
          <img src="../assets/timg.png" alt="">
        </router-link>
        <span>auto:全球最大的机车资讯网站</span>
        <input></input>
        <el-button size="mini">搜索</el-button>
			</div>

			<div class="head-nav">
				<ul class="nav-list">
					<li><router-link to="/login">登录</router-link></li>
					<li class="nav-pile">|</li>
					<li><router-link to="/register">注册</router-link></li>
					<li class="nav-pile">|</li>
					<li>关于</li>
				</ul>
			</div>
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				  <el-menu-item index="1">首页</el-menu-item>
					<el-menu-item index="2">品牌车型</el-menu-item>
					<el-menu-item index="3">机车鉴赏</el-menu-item>
					<el-menu-item index="4">最新资讯</el-menu-item>
					<el-menu-item index="5">改装欣赏</el-menu-item>
				  <el-menu-item index="6">赛事报道</el-menu-item>
					<el-menu-item index="7">车友交流</el-menu-item>
					<el-menu-item index="8">驾驶技巧</el-menu-item>
					<el-menu-item index="9">维护保养</el-menu-item>
				</el-menu>
		</div>

	</div>
</template>
<script>

export default{
	name:"headers",
	data(){
		return{

		}
	}
}

</script>
<style scoped>

.app-head {
  background: white;
  color: #b2b2b2;
  height: 110px;
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
	float: left;
}
.app-head-inner span{
  position: relative;
  top: -1px;
	font-family: fantasy;

}
.app-head-inner img {
  width: 70px;
  margin-top: 20px;
}
.head-nav {
  float: right;
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
