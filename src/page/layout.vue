<template>

<div class="app">
	<Headers />
	<div class="index-wrap">
		<div class="index-left">
			<div class="index-left-block">
				<h2>热门机型</h2>
				<template v-for="(product,index) in productList">
					<h3>{{ product.category }}</h3>
					<ul>
						<li v-for="item in product.list">
							<a target="_blank" :href="item.url">{{ item.name }}</a>
							<span v-if="item.hot" class="hot-tag">HOT</span>
						</li>
					</ul>
					<div v-if="index%2 == 0" class="hr"></div>
				</template>
			</div>
			<div class="index-left-block lastest-news">
				<h2>热门资讯</h2>
				<ul>
					<li v-for="item in news">
						<a target="_blank" :href="item.url">{{ item.author_name }}</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="index-right">
			<!-- 轮播图片 -->
			<div class="card">
				<el-carousel :interval="5000" arrow="always">
			    <el-carousel-item v-for="item in dataimg" :key="item">
			      <!-- <h3>{{ item }}</h3> -->
						<img class="card-img" :src="item.src" />

			    </el-carousel-item>
			  </el-carousel>
			</div>
			<!-- 热门资讯 -->
			<div class="index-board-list">
				<div class="index-board-item" v-for="(borad,index) in boradList" :class="['index-board-'+ borad.tag ,{'line-last' : index%2 !==0}]">
					<div class="index-board-item-inner">
						<h2>{{ borad.title }}</h2>
						<p>{{ borad.desc }}</p>
						<div class="index-board-button">
							<router-link :to="{path:'/details/'+borad.tag}" class="button">立即购买</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<Footers />
</div>




</template>


<script>

import Headers from "../components/headers"
import Footers from "../components/footers"

export default{
	name:"layout",
	components:{
    Headers,
    Footers
  },
	data(){
		return{

			dataimg: [
				{
						src: require("../assets/slideShow/j1.jpg"),
						txt: '"Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."',
						txt2: '一站式服务',
						txt3: 'Miami, FL'
					},
					{
						src: require("../assets/slideShow/j2.jpg"),
						txt: '"Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor."',
						txt2: '国际服务',
						txt3: 'Greensboro, NC'
					},
					{
						src: require("../assets/slideShow/j3.jpg"),
						txt: '"Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."',
						txt2: '全网渠道',
						txt3: 'Charlotte, NC'
					}
			],
      boradList:[
      	{
      		title:"开放产品",
      		desc:"开放产品是一款开放产品",
      		tag:"earth"
      	},
      	{
      		title:"品牌营销",
      		desc:"品牌营销帮助你的产品更好地找到定位",
      		tag:"loud"
      	},
      	{
      		title:"使命必达",
      		desc:"使命必达快速迭代永远保持最前端的速度",
      		tag:"car"
      	},
      	{
      		title:"勇攀高峰",
      		desc:"帮你勇闯高峰，到达事业的顶峰",
      		tag:"hill"
      	}
      ],
			news:[],
			productList:[
				{
					category:"跑车",
					list:[
						{
							name:"本田CBR600RR",
							url:"http://www.wwtliu.com/blog",
							hot:false
						},
						{
							name:"铃木GSX-R600",
							url:"http://www.wwtliu.com/blog",
							hot:true
						},
						{
							name:"川崎Ninja 250R",
							url:"http://www.wwtliu.com/blog",
							hot:false
						}
					]
				},
				{
					category:"街车",
					list:[
						{
							name:"杜卡迪大魔鬼Diavel",
							url:"http://www.wwtliu.com/blog",
							hot:false
						},
						{
							name:"杜卡迪Monster 796",
							url:"http://www.wwtliu.com/blog",
							hot:true
						},
						{
							name:"川崎GTR1400",
							url:"http://www.wwtliu.com/blog",
							hot:false
						},
						{
							name:"雅马哈FJR1300",
							url:"http://www.wwtliu.com/blog",
							hot:true
						}
					]
				}
			]
		}
	},
	created(){
		this.$axios.get("http://www.wwtliu.com/sxtstu/news/juhenews.php",{
			params:{
				count:10,
				type:"top"
			}
		})
		.then(res => {
			this.news = res.data;
		})
		.catch(error => {
			console.log(error)
		})
	}
}

</script>
<style scoped>

.index-wrap {
  width: 1200px;
  margin: auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  height: 350px;
}
.index-left-block .hr {
  margin-bottom: 20px;
  height: 1px;
  width: 100%;
  background: #ddd;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
  margin-top: 15px;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 350px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.swiperimg{
	width: 100%;
}

.button{
	background: #4fc08d;
	color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
}

/* 轮播图片 */

.card{
	margin-top: 15px;
}

.card-img{
	width: 890px;
	height:100%;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
