<template>
<div id="MaterialManagement" class="">
    <el-form :inline="true" :model="formInline" ref="selectForm" class="ms-form-inline" style="height:62px;">
        <el-col :span="16">
            <!-- <el-form-item label="物料分类" prop="dicLabel">
                <el-select v-model="formInline.dicLabel" placeholder="请选择" style="width:300px;">
                    <el-option v-for="item in AllMenu" :key="item.dicCode" :label="item.dicLabel" :value="item.dicCode"></el-option>
                </el-select>
            </el-form-item> -->
            <el-form-item label="机车名称" prop="motorName">
                <el-input v-model="formInline.title" placeholder="机车名称" style="width:300px;"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="8">
            <el-form-item :span="12" style="width:100%; text-align:right;">
                <el-button type="primary" @click="onSubmit" style="background:#6291f9 !important;">查询</el-button>
                <!-- <el-button type="primary" plain @click="resetForm('selectForm')">重置</el-button> -->
                <el-button type="info" @click="openAdd" style="background:#6291f9" >新增</el-button>
                <el-button type="info" @click="back" style="background:#6291f9" >返回首页</el-button>
            </el-form-item>
        </el-col>
    </el-form>
    <div class="table-box" ref="tableBox">
        <el-table :data="tableData" style="width: 100%; height:100% !important;border:1px solid #F1F1F1; border-bottom:0;" height="tableHeight" :header-cell-style="{background:'#F1F1F1'}">
            <el-table-column type="index" width="50">
            </el-table-column>
            <el-table-column prop="name" label="机车名称">
            </el-table-column>
            <!-- <el-table-column prop="manufacturer_name" label="厂商">
            </el-table-column> -->
            <el-table-column prop="country" label="制造国">
            </el-table-column>
            <el-table-column prop="retail_price" label="零售价">
            </el-table-column>
            <el-table-column prop="weight" label="整车重量">
            </el-table-column>
            <el-table-column prop="displacement" label="排量">
            </el-table-column>
            <el-table-column prop="cylinders_num" label="缸数">
            </el-table-column>
            <el-table-column prop="maximum_power" label="最大功率">
            </el-table-column>
            <el-table-column prop="maximum_torque" label="最大扭矩">
            </el-table-column>
            <el-table-column prop="maximum_speed" label="最高速度">
            </el-table-column>
            <!-- v-if="(permission.update || permission.update) ? true : false" -->
             <!-- v-if="permission.update"
             v-if="permission.delete" -->
            <el-table-column label="操作" >
                <template slot-scope="scope">
                    <span @click="handleEdit(scope.$index, scope.row)" style="margin-right:15px;cursor: pointer;">编辑</span>
                    <span @click="handleDelete(scope.$index, scope.row)" style="color:#ff696b;cursor: pointer;" >删除</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <el-dialog title="新增机车" :visible.sync="dialogFormVisible" class="add-menu" v-loading="loading">
        <el-form :model="form" :rules="rules2" ref="addform">
            <el-form-item label="机车名称" :label-width="formLabelWidth" prop="name">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="制造国" :label-width="formLabelWidth" prop="madeCountry">
                <el-select v-model="form.madeCountry" placeholder="请选择" :label-width="formLabelWidth">
                    <el-option v-for="item in AllMenu" :key="item.ccode" :label="item.country" :value="item.ccode"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="零售价" :label-width="formLabelWidth" prop="retailPrice">
                <el-input v-model="form.retailPrice" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="整车重量" :label-width="formLabelWidth" prop="weight">
                <el-input v-model="form.weight" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="最大扭矩" :label-width="formLabelWidth" prop="maximumTorque">
                <el-input v-model="form.maximumTorque" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="最大速度" :label-width="formLabelWidth" prop="maximumSpeed">
                <el-input v-model="form.maximumSpeed" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="最大功率" :label-width="formLabelWidth" prop="maximumPower">
                <el-input v-model="form.maximumPower" autocomplete="off"></el-input>
            </el-form-item>
            <!-- <el-form-item label="配方单位" :label-width="formLabelWidth" prop="formulaUnit">
                <el-select v-model="form.formulaUnit" placeholder="请选择" :label-width="formLabelWidth" @change="changeformulaUnit">
                    <el-option v-for="item in AllMaterialType.formulaUnitList" :key="item.dicCode" :label="item.dicLabel" :value="item.dicCode"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="库存单位" :label-width="formLabelWidth" prop="stockUnit">
                <el-select v-model="form.stockUnit" placeholder="请选择" :label-width="formLabelWidth" @change="changestockUnit">
                    <el-option v-for="item in AllMaterialType.stockUnitList" :key="item.dicCode" :label="item.dicLabel" :value="item.dicCode"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="换算率" :label-width="formLabelWidth">
                1<el-input v-model="form.slabel" autocomplete="off" :disabled="true" style="width:100px;margin: 0 10px" :value="'1'+form.stockUnit"></el-input>=
                <el-form-item label="" :label-width="formLabelWidth0" prop="stockUnitRate" style="width:100px;margin-right:10px;display:inline-block">
                <el-input v-model="form.stockUnitRate" autocomplete="off" ></el-input>
                </el-form-item>
                <el-input v-model="form.flabel" autocomplete="off" :disabled="true" style="width:100px;"></el-input>
            </el-form-item> -->
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="closeAdd">取 消</el-button>
            <el-button type="primary" @click="addMenu">确 定</el-button>
        </div>
    </el-dialog>
    <el-dialog title="更改机车" :visible.sync="dialogChangeVisible" class="add-menu" v-loading="loading">
        <el-form :model="formChange" :rules="rules2" ref="formChange">
          <el-form-item label="机车名称" :label-width="formLabelWidth" prop="name">
              <el-input v-model="formChange.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="制造国" :label-width="formLabelWidth" prop="madeCountry">
              <el-select v-model="formChange.madeCountry" placeholder="请选择" :label-width="formLabelWidth">
                  <el-option v-for="item in AllMenu" :key="item.ccode" :label="item.country" :value="item.ccode"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="零售价" :label-width="formLabelWidth" prop="retailPrice">
              <el-input v-model="formChange.retailPrice" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="整车重量" :label-width="formLabelWidth" prop="weight">
              <el-input v-model="formChange.weight" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="最大扭矩" :label-width="formLabelWidth" prop="maximumTorque">
              <el-input v-model="formChange.maximumTorque" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="最大速度" :label-width="formLabelWidth" prop="maximumSpeed">
              <el-input v-model="formChange.maximumSpeed" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="最大功率" :label-width="formLabelWidth" prop="maximumPower">
              <el-input v-model="formChange.maximumPower" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogChangeVisible = false">取 消</el-button>
            <el-button type="primary" @click="changeMenu">确 定</el-button>
        </div>
    </el-dialog>
</div>
</template>
<script>
export default {
    name: 'motor',
    data() {
        var number = (rule, value, callback) => {
            var re = /^[0-9]+.?[0-9]*$/;
            // console.log(re.test(value));
            if (re.test(value)) {
                callback();
            } else {
                callback(new Error('必须是数字'));
            }
        };
        return {
            tableHeight: 700,
            formInline: {
                // dicLabel: '',
                title: ''
            },
            selectName: '',
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
              name: '',
              madeCountry: '',
              retailPrice:'',
              weight:'',
              maximumTorque:'',
              maximumPower:'',
              maximumSpeed:'',
              id:'',
                // motorName: '',
                // materialType: '',
                // formulaUnit: '',
                // stockUnit: '',
                // stockUnitRate: '',
                // materialId: '',
                // slabel:'',
                // flabel:'',
            },
            formChange: {
                name: '',
                madeCountry: '',
                retailPrice:'',
                weight:'',
                maximumTorque:'',
                maximumPower:'',
                maximumSpeed:'',
                id:'',
                // formulaUnit: '',
                // stockUnit: '',
                // stockUnitRate: '',
                // materialId: '',
                // slabel:'',
                // flabel:'',
            },
            rules2: {
                name: [{
                        required: true,
                        message: '请输入机车名称',
                        trigger: 'blur'
                    },
                    //{ validator: validaePass }
                ],
                madeCountry: [{
                        required: true,
                        message: '请选择制造国',
                        trigger: 'blur'
                    },
                    //{ validator: validaePass2 }
                ],
                retailPrice: [{
                        required: true,
                        message: '请输入零售价',
                        trigger: 'blur'
                    },
                    //{ validator: validaePass2 }
                ],
                weight: [{
                        required: true,
                        message: '请输入整车重量',
                        trigger: 'blur'
                    },
                    //{ validator: validaePass2 }
                ],
                maximumTorque: [{
                        required: true,
                        message: '请输入最大扭矩',
                        trigger: 'blur'
                    },
                    //{ validator: validaePass2 }
                ],
                maximumPower: [{
                        required: true,
                        message: '请输入最大功率',
                        trigger: 'blur'
                    },
                    //{ validator: validaePass2 }
                ],
                maximumSpeed: [{
                        required: true,
                        message: '请输入最大速度',
                        trigger: 'blur'
                    },
                    //{ validator: validaePass2 }
                ],
                // formulaUnit: [{
                //         required: true,
                //         message: '请选择配方单位',
                //         trigger: 'blur'
                //     },
                //     //{ validator: validaePass2 }
                // ],
                // stockUnit: [{
                //         required: true,
                //         message: '请选择库存单位',
                //         trigger: 'blur'
                //     },
                //     //{ validator: validaePass2 }
                // ],
                // stockUnitRate: [{
                //         required: true,
                //         message: '请输入换算率',
                //         trigger: 'blur'
                //     }, {
                //         validator: number
                //
                //     }
                //     //{ validator: validaePass2 }
                // ]
            },
            dialogVisible: false,
            dialogChangeVisible: false,
            formLabelWidth: '120px',
            formLabelWidth0: '0px',
            tableData: [],
            AllMenu: [],
            AllMaterialType: [],
            permission: {},
            loading: false
        }
    },
    methods: {
        onSubmit() {
            console.log(this.formInline);
            this.selectAllAuto();
        },
        openAdd() {

            this.clearFrom()
            this.dialogFormVisible = true;
            if (this.$refs.addform == undefined) {

            } else {

                this.$refs.addform.resetFields();
            }
        },
        back() {
          this.$router.push({
            path: '/',
          })
        },
        handleEdit(index, row) {
            // console.log(index, row);
            this.dialogChangeVisible = true;
            //clone
            let ds = Object.assign({}, row);
            // console.log(ds);
            this.formChange.name = ds.name;
            this.formChange.id = ds.id;
            this.formChange.maximumPower = ds.maximum_power;
            this.formChange.madeCountry = ds.country;
            this.formChange.maximumSpeed = ds.maximum_speed;
            this.formChange.maximumTorque = ds.maximum_torque;
            this.formChange.retailPrice = ds.retail_price;
            this.formChange.weight = ds.weight;

            // console.log(this.formChange);

        },
        handleDelete(index, row) {
            // console.log(index, row);
            var that = this;
            this.$confirm('此操作将删除机车信息, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
              // console.log("gono");
              //   var data = that.$Qs.stringify({
              //       id: row.id
              //   })
              //   console.log("gono1");
              //   that.$axios.delete( this.GLOBAL.baseURL + '/auto/motor', data)
              console.log(row.id);
              this.$axios({
                method: 'delete',
                url: this.GLOBAL.baseURL + "/auto/motor?id=" + row.id,
                // data:this.$qs.stringify({
                //   id: row.id,
                // })
              })
              .then(function(response) {
                  // console.log(response);
                  if (response.data.status == '2') {
                      that.$message.error(response.data.msg);
                  }else {

                      that.$message({
                          type: 'success',
                          message: '删除成功!'
                      });
                  }
                  that.selectAllAuto();
                  that.selectAllMenu();
              })
              .catch(function(error) {
                  // console.log(error);
                  that.selectAllAuto();
              });
            }).catch(() => {
                that.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        clearFrom() {
            //清理表单
            this.form.motorName = '';
            this.form.materialType = '';
            this.form.formulaUnit = '';
            this.form.stockUnit = '';
            this.form.stockUnitRate = '';
        },
        resetForm(formName) {
            // console.log(this.$refs[formName]);
            this.selectName = ''
            // this.formInline = ''
            this.$refs[formName].resetFields();
        },
        //新家菜单 start
        changeformulaUnit(){
            for (var i = 0; i < this.AllMaterialType.formulaUnitList.length; i++) {
                if (this.AllMaterialType.formulaUnitList[i].dicCode == this.form.formulaUnit) {
                    this.form.flabel = this.AllMaterialType.formulaUnitList[i].dicLabel
                }
            }
            this.form.formulaUnit = this.form.formulaUnit
        },
        changestockUnit(){
            for (var i = 0; i < this.AllMaterialType.stockUnitList.length; i++) {
                if (this.AllMaterialType.stockUnitList[i].dicCode == this.form.stockUnit) {
                    this.form.slabel = this.AllMaterialType.stockUnitList[i].dicLabel
                }
            }
            this.form.stockUnit = this.form.stockUnit
        },
        addMenu() {
            var that = this;
            console.log(that.form);
            this.$refs.addform.validate((valid) => {
                if (valid) {

                    let formData = new FormData();
                    console.log(this.form.madeCountry + ' = madeCountry');
                    formData.append('name', this.form.name);
                    formData.append('madeCountry', this.form.madeCountry);
                    formData.append('retailPrice', this.form.retailPrice);
                    formData.append('weight', this.form.weight);
                    formData.append('maximumTorque', this.form.maximumTorque);
                    formData.append('maximumPower', this.form.maximumPower);
                    formData.append('maximumSpeed', this.form.maximumSpeed);
                    // console.log(this.form.formulaUnit);
                    // console.log(formData);
                    // var data = this.$Qs.stringify({
                    //     imageTitle: this.form.imageTitle,
                    //     image: this.form.imageRef,
                    //     enable:this.form.enable
                    // })
                    this.loading = true;
                    // this.$axios({
                    //   method: 'post',
                    //   url: this.GLOBAL.baseURL + "/auto/motor",
                    //   data: this.$qs.stringify({
                    //     // infoId:that.infoId,
                    //     // userId:that.sessionId,
                    //     name: that.form.name,
                    //     madeCountry: that.form.madeCountry,
                    //     retailPrice: that.form.retailPrice,
                    //     weight: that.form.weight,
                    //     maximumTorque: that.form.maximumTorque,
                    //     maximumPower: that.form.maximumPower,
                    //     maximumSpeed: that.form.maximumSpeed,
                    //   })
                    // })
                    this.$axios.post(this.GLOBAL.baseURL + '/auto/motor', formData)
                        .then(function(response) {
                            console.log(response);
                            // that.loading = false;
                            if (response.data.status == '2') {
                                that.$message.error(response.data.msg);
                            }else {

                                that.dialogFormVisible = false;
                                that.clearFrom();
                                that.selectAllAuto();
                                // that.selectMaterial('', '');
                                that.selectAllMenu();
                            }
                        })
                        .catch(function(error) {
                            console.log(error);
                            that.loading = false;
                        });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });

        },
        closeAdd() {
            this.dialogFormVisible = false;
            this.clearFrom()
        },
        formAddDialog() {

        },
        //新家菜单 end
        //更改菜单 start
        changeformulaUnit2(){
            for (var i = 0; i < this.AllMaterialType.formulaUnitList.length; i++) {
                if (this.AllMaterialType.formulaUnitList[i].dicCode == this.formChange.formulaUnit) {
                    this.formChange.flabel = this.AllMaterialType.formulaUnitList[i].dicLabel
                }
            }
            this.formChange.formulaUnit = this.formChange.formulaUnit
        },
        changestockUnit2(){
            for (var i = 0; i < this.AllMaterialType.stockUnitList.length; i++) {
                if (this.AllMaterialType.stockUnitList[i].dicCode == this.formChange.stockUnit) {
                    this.formChange.slabel = this.AllMaterialType.stockUnitList[i].dicLabel
                }
            }
            this.formChange.stockUnit = this.formChange.stockUnit
        },
        changeMenu() {
          var that = this;
          this.$refs.formChange.validate((valid) => {
              if (valid) {

                  let formData = new FormData();
                  formData.append('id', this.formChange.id);
                  formData.append('name', this.formChange.name);
                  formData.append('madeCountry', this.formChange.madeCountry);
                  formData.append('retailPrice', this.formChange.retailPrice);
                  formData.append('weight', this.formChange.weight);
                  formData.append('maximumTorque', this.formChange.maximumTorque);
                  formData.append('maximumPower', this.formChange.maximumPower);
                  formData.append('maximumSpeed', this.formChange.maximumSpeed);

                  this.loading = true;

                  this.$axios.post(this.GLOBAL.baseURL + '/auto/motorUpdate', formData)
                      .then(function(response) {
                          console.log(response);
                          // that.loading = false;
                          if (response.data.status == '2') {
                              that.$message.error(response.data.msg);
                          }else {

                              that.dialogFormVisible = false;
                              that.clearFrom();
                              that.selectAllAuto();
                              // that.selectMaterial('', '');
                              that.selectAllMenu();
                          }
                          console.log("update success");
                      })
                      .catch(function(error) {
                          console.log(error);
                          that.loading = false;
                      });
              } else {
                  console.log('error submit!!');
                  return false;
              }
          });
        },
        formChangeDialog() {

        },
        //更改菜单 end
        // 查询所有机车信息
        selectAllAuto() {
            // console.log(id);
            var that = this;
            this.$axios({
              method: 'get',
              url: this.GLOBAL.baseURL + "/auto/queryAuto",
              params:{
                name:this.formInline.title
              }
            })
            .then(data => {
              console.log(data)
              that.tableData = data.data.res;
            })
            .catch(error => {
              console.log(error)
            })
        },
        // 查询国家code
        selectAllMenu() {
            var that = this;
            this.$axios({
              method: 'get',
              url: this.GLOBAL.baseURL + "/auto/queryCountry",
            })
            .then(function(response) {
                console.log(response);
                that.AllMenu = response.data.res;
                // that.AllMaterialType = response.data.res
            })
            .catch(function(error) {
                console.log(error);
            });
        },
    },
    mounted: function() {
        // this.permission =  this.getPermission(this.$route.path);
        // let height = this.$refs.tableBox.offsetHeight;
        // console.log(height + 'height');
        // this.tableHeight = height;
        this.selectAllAuto();
        this.selectAllMenu();
    },
    computed: {}
}
</script>
<style scoped>
#MaterialManagement {
    background: #fff;
    padding: 14px;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.table-box {
    flex: 1;
    overflow: hidden;
    height: 800px;
}

.danwei-wid {
    width: 50px;
    display: inline-block;
}
</style>
