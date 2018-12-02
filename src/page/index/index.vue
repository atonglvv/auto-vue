<template>
  <div id="app">
    <el-container>
        <el-header>

          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">首页</el-menu-item>

            <el-submenu index="2">
              <template slot="title">资讯</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>

            </el-submenu>
            <el-menu-item index="3">口碑</el-menu-item>
            <el-menu-item index="4">论坛</el-menu-item>
            <el-menu-item index="5">专题</el-menu-item>
            <el-menu-item index="6">品鉴</el-menu-item>
            <el-menu-item index="7"><a href="">用户登录</a></el-menu-item>
            <el-menu-item index="8">新用户注册</el-menu-item>
          </el-menu>
        </el-header>
        <el-main>
          <el-carousel indicator-position="outside">
             <el-carousel-item v-for="item in 4" :key="item">
               <h3>{{ item }}</h3>
             </el-carousel-item>
           </el-carousel>
          <h3> 资讯</h3><br/><hr/>
           <el-popover
             placement="top-start"
             title="标题"
             width="200"
             height="200"
             trigger="hover"
             content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
             <el-button slot="reference" style="width:33%; height:200px">资讯1</el-button>



           </el-popover>
           <el-popover
             placement="top-start"
             title="标题"
             width="200"
             height="200"
             trigger="hover"
             content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
             <el-button slot="reference" style="width:33%; height:200px">资讯2</el-button>



           </el-popover>
           <el-popover
             placement="top-start"
             title="标题"
             width="200"
             height="200"
             trigger="hover"
             content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
             <el-button slot="reference" style="width:33%; height:200px">资讯3</el-button>



           </el-popover>
           <el-popover
             placement="top-start"
             title="标题"
             width="200"
             height="200"
             trigger="hover"
             content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
             <el-button slot="reference" style="width:33%; height:200px">资讯4</el-button>



           </el-popover><el-popover
             placement="top-start"
             title="标题"
             width="200"
             height="200"
             trigger="hover"
             content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
             <el-button slot="reference" style="width:33%; height:200px">资讯5</el-button>



           </el-popover><el-popover
             placement="top-start"
             title="标题"
             width="200"
             height="200"
             trigger="hover"
             content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
             <el-button slot="reference" style="width:33%; height:200px">资讯6</el-button>
           </el-popover>






             <h3>品鉴</h3><br/><hr/>
           <el-popover
             placement="top-start"
             title="标题"
             width="200"
             height="200"
             trigger="hover"
             content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
             <el-button slot="reference" style="width:33%; height:200px">品鉴1</el-button>



           </el-popover><el-popover
             placement="top-start"
             title="标题"
             width="200"
             height="200"
             trigger="hover"
             content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
             <el-button slot="reference" style="width:33%; height:200px">品鉴2</el-button>



           </el-popover><el-popover
             placement="top-start"
             title="标题"
             width="200"
             height="200"
             trigger="hover"
             content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
             <el-button slot="reference" style="width:33%; height:200px">品鉴3</el-button>



           </el-popover>
           <el-popover
             placement="top-start"
             title="标题"
             width="200"
             height="200"
             trigger="hover"
             content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
             <el-button slot="reference" style="width:33%; height:200px">品鉴4</el-button>



           </el-popover><el-popover
             placement="top-start"
             title="标题"
             width="200"
             height="200"
             trigger="hover"
             content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
             <el-button slot="reference" style="width:33%; height:200px">品鉴5</el-button>



           </el-popover><el-popover
             placement="top-start"
             title="标题"
             width="200"
             height="200"
             trigger="hover"
             content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
             <el-button slot="reference" style="width:33%; height:200px">品鉴6</el-button>
           </el-popover>
        </el-main>
        <el-footer>
          <br/><br/><br/>
          <hr/>

            <a href="">网站简介</a>&nbsp&nbsp&nbsp&nbsp&nbsp<a href="">联系我们</a>&nbsp&nbsp&nbsp&nbsp&nbsp
            <a href="">业务介绍</a>&nbsp&nbsp&nbsp&nbsp&nbsp<a href="">官方QQ群</a>


        </el-footer>

    </el-container>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        currentDate: new Date()
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>

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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
