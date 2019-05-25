<template>
  <div class="parent">
    <Headers />
    <div class="app">

      <img style="width:300px;height=300px":src="info.img" alt="" >
      <br/>
      <br/>
      <p style="font-size:22px;">{{info.name}}</p><br/>
      <p style="font-size:18px;">厂家     ：{{info.manufacturer_name}}</p><br/>
      <p style="font-size:18px;">制造国     ：{{info.country}}</p><br/>
      <p style="font-size:18px;">上市时间  ：{{info.market_time}}</p><br/>
      <p style="font-size:18px;">零售价 ：{{info.retail_price}}</p><br/>
      <p style="font-size:18px;">排量 ：{{info.displacement}}</p><br/>
      <p style="font-size:18px;">缸数 ：{{info.cylinders_num}}</p><br/>
      <p style="font-size:18px;">冲程 ：{{info.stroke}}</p><br/>
      <p style="font-size:18px;">每缸气门数 ：{{info.per_cylinder_valve}}</p><br/>
      <p style="font-size:18px;">最大扭矩 ：{{info.maximum_torque}}</p><br/>
      <p style="font-size:18px;">油耗 ：{{info.fuel_consumption}}</p><br/>
      <p style="font-size:18px;">档位 ：{{info.gear}}</p><br/>
      <p style="font-size:18px;">邮箱容积 ：{{info.tank_capacity}}</p><br/>
      <p style="font-size:18px;">整车重量 ：{{info.weight}}</p><br/>
      <p style="font-size:18px;">制动系统 ：{{info.brake_system}}</p><br/>
      <p style="font-size:18px;">仪表形式 ：{{info.instrument}}</p><br/>
      <p style="font-size:18px;">最大速度 ：{{info.maximum_speed}}</p><br/>
      <p style="font-size:18px;">最大功率 ：{{info.maximum_power}}</p><br/>

    </div>
    <Footers />
  </div>

</template>

<script>
import Headers from "@/components/headers"
import Footers from "@/components/footers"
export default {
  name:"notorInfo",
  components:{
    Headers,
    Footers
  },
  data(){
    return{
      info:{},
      motorId:null,
		}
  },
  created(){
    this.motorId = this.$route.query.id;
    this.selectInfo(this.infoId);
  },
  methods: {
    //查询机车信息
    selectInfo(infoId){
      var that = this;
      this.$axios({
        method: 'get',
        url: this.GLOBAL.baseURL + "/auto/motor",
        params:{
          motorId:that.motorId
        }
      })
      .then(data => {
        console.log(data);
        that.info = (data.data.res);
      })
      .catch(error => {
        console.log(error)
      })
    },
  }
}
</script>

<style scoped>

.app{
  margin: 20px auto;
  width: 800px;
  height: 2000px;
}

</style>
