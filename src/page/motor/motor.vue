<template>
<div id="MaterialManagement" class="">
    <el-form :inline="true" :model="formInline" ref="selectForm" class="ms-form-inline" style="height:62px;">
        <el-col :span="16">
            <el-form-item label="物料分类" prop="dicLabel">
                <el-select v-model="formInline.dicLabel" placeholder="请选择" style="width:300px;">
                    <el-option v-for="item in AllMenu" :key="item.dicCode" :label="item.dicLabel" :value="item.dicCode"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="物料名称" prop="materialName">
                <el-input v-model="formInline.materialName" placeholder="物料名称" style="width:300px;"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="8">
            <el-form-item :span="12" style="width:100%; text-align:right;">
                <el-button type="primary" @click="onSubmit" style="background:#6291f9 !important;">查询</el-button>
                <el-button type="primary" plain @click="resetForm('selectForm')">重置</el-button>
                <el-button type="info" @click="openAdd" v-if="permission.add">新增</el-button>
            </el-form-item>
        </el-col>
    </el-form>
    <div class="table-box" ref="tableBox">
        <el-table :data="tableData" style="width: 100%; height:100% !important;border:1px solid #F1F1F1; border-bottom:0;" height="tableHeight" :header-cell-style="{background:'#F1F1F1'}">
            <el-table-column type="index" width="50">
            </el-table-column>
            <el-table-column prop="materialName" label="物料名称">
            </el-table-column>
            <el-table-column prop="dicLabel" label="物料分类">
            </el-table-column>
            <el-table-column prop="flabel" label="配方单位">
            </el-table-column>
            <el-table-column prop="slabel" label="库存单位">
            </el-table-column>
            <el-table-column prop="stockUnitRate" label="换算率">
            </el-table-column>
            <el-table-column label="操作" v-if="(permission.update || permission.update) ? true : false">
                <template slot-scope="scope">
                    <span @click="handleEdit(scope.$index, scope.row)" style="margin-right:15px;cursor: pointer;" v-if="permission.update">编辑</span>
                    <span @click="handleDelete(scope.$index, scope.row)" style="color:#ff696b;cursor: pointer;" v-if="permission.delete">删除</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <el-dialog title="新增物料" :visible.sync="dialogFormVisible" class="add-menu" v-loading="loading">
        <el-form :model="form" :rules="rules2" ref="addform">
            <el-form-item label="物料名称" :label-width="formLabelWidth" prop="materialName">
                <el-input v-model="form.materialName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="物料分类" :label-width="formLabelWidth" prop="materialType">
                <el-select v-model="form.materialType" placeholder="请选择" :label-width="formLabelWidth">
                    <el-option v-for="item in AllMenu" :key="item.dicCode" :label="item.dicLabel" :value="item.dicCode"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="配方单位" :label-width="formLabelWidth" prop="formulaUnit">
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
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="closeAdd">取 消</el-button>
            <el-button type="primary" @click="addMenu">确 定</el-button>
        </div>
    </el-dialog>
    <el-dialog title="更改物料" :visible.sync="dialogChangeVisible" class="add-menu" v-loading="loading">
        <el-form :model="formChange" :rules="rules2" ref="formChange">
            <el-form-item label="物料名称" :label-width="formLabelWidth" prop="materialName">
                <el-input v-model="formChange.materialName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="物料分类" :label-width="formLabelWidth" prop="materialType">
                <el-select v-model="formChange.materialType" placeholder="请选择" :label-width="formLabelWidth">
                    <el-option v-for="item in AllMenu" :key="item.dicCode" :label="item.dicLabel" :value="item.dicCode"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="配方单位" :label-width="formLabelWidth" prop="formulaUnit">
                <el-select v-model="formChange.formulaUnit" placeholder="请选择" :label-width="formLabelWidth" @change="changeformulaUnit">
                    <el-option v-for="item in AllMaterialType.formulaUnitList" :key="item.dicCode" :label="item.dicLabel" :value="item.dicCode"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="库存单位" :label-width="formLabelWidth" prop="stockUnit">
                <el-select v-model="formChange.stockUnit" placeholder="请选择" :label-width="formLabelWidth" @change="changestockUnit">
                    <el-option v-for="item in AllMaterialType.stockUnitList" :key="item.dicCode" :label="item.dicLabel" :value="item.dicCode"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="换算率" :label-width="formLabelWidth" prop="stockUnitRate">
                1<el-input v-model="formChange.slabel" autocomplete="off" :disabled="true" style="width:100px;margin: 0 10px"></el-input>=
                <el-input v-model="formChange.stockUnitRate" autocomplete="off" style="width:100px;margin-right:10px"></el-input>
                <el-input v-model="formChange.flabel" autocomplete="off" :disabled="true" style="width:100px;"></el-input>
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
    name: 'MaterialManagement',
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
                dicLabel: '',
                materialName: ''
            },
            selectName: '',
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
                materialName: '',
                materialType: '',
                formulaUnit: '',
                stockUnit: '',
                stockUnitRate: '',
                materialId: '',
                slabel:'',
                flabel:'',
            },
            formChange: {
                materialName: '',
                materialType: '',
                formulaUnit: '',
                stockUnit: '',
                stockUnitRate: '',
                materialId: '',
                slabel:'',
                flabel:'',
            },
            rules2: {
                materialName: [{
                        required: true,
                        message: '请输入物料名称',
                        trigger: 'blur'
                    },
                    //{ validator: validaePass }
                ],
                materialType: [{
                        required: true,
                        message: '请选择物料分类',
                        trigger: 'blur'
                    },
                    //{ validator: validaePass2 }
                ],
                formulaUnit: [{
                        required: true,
                        message: '请选择配方单位',
                        trigger: 'blur'
                    },
                    //{ validator: validaePass2 }
                ],
                stockUnit: [{
                        required: true,
                        message: '请选择库存单位',
                        trigger: 'blur'
                    },
                    //{ validator: validaePass2 }
                ],
                stockUnitRate: [{
                        required: true,
                        message: '请输入换算率',
                        trigger: 'blur'
                    }, {
                        validator: number

                    }
                    //{ validator: validaePass2 }
                ]
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
            this.selectMaterial(this.formInline.dicLabel, this.formInline.materialName);
        },
        openAdd() {

            this.clearFrom()
            this.dialogFormVisible = true;
            if (this.$refs.addform == undefined) {

            } else {

                this.$refs.addform.resetFields();
            }
        },
        handleEdit(index, row) {
            // console.log(index, row);
            this.dialogChangeVisible = true;
            this.formChange = Object.assign({}, row)
            // console.log(this.tableData[index]);
            // console.log(this.changeList);
        },
        handleDelete(index, row) {
            // console.log(index, row);
            var that = this;
            this.$confirm('此操作将删除物料, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                var data = that.$Qs.stringify({
                    materialId: row.materialId
                })
                that.$axios.post('/nmk/material/deleteMaterial', data)
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
                    that.selectMaterial('', '');
                    that.selectAllMenu();
                })
                .catch(function(error) {
                    // console.log(error);
                    that.selectMaterial('', '');
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
            this.form.materialName = '';
            this.form.materialType = '';
            this.form.formulaUnit = '';
            this.form.stockUnit = '';
            this.form.stockUnitRate = '';
        },
        resetForm(formName) {
            // console.log(this.$refs[formName]);
            this.selectName = ''
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
                    formData.append('materialName', this.form.materialName);
                    formData.append('materialType', this.form.materialType);
                    formData.append('formulaUnit', this.form.formulaUnit);
                    formData.append('stockUnit', this.form.stockUnit);
                    formData.append('stockUnitRate', this.form.stockUnitRate);
                    console.log(this.form.formulaUnit);
                    // console.log(formData);
                    // var data = this.$Qs.stringify({
                    //     imageTitle: this.form.imageTitle,
                    //     image: this.form.imageRef,
                    //     enable:this.form.enable
                    // })
                    this.loading = true;
                    this.$axios.post('/nmk/material/insertMaterial', formData)
                        .then(function(response) {
                            console.log(response);
                            that.loading = false;
                            if (response.data.status == '2') {
                                that.$message.error(response.data.msg);
                            }else {

                                that.dialogFormVisible = false;
                                that.clearFrom();
                                that.selectMaterial('', '');
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
            console.log(this.formChange);
            this.$refs.formChange.validate((valid) => {
                if (valid) {
                    let formData = new FormData();
                    formData.append('materialId', this.formChange.materialId);
                    formData.append('materialName', this.formChange.materialName);
                    formData.append('materialType', this.formChange.materialType);
                    formData.append('formulaUnit', this.formChange.formulaUnit);
                    formData.append('stockUnit', this.formChange.stockUnit);
                    formData.append('stockUnitRate', this.formChange.stockUnitRate);
                    // console.log(formData);
                    // var data = this.$Qs.stringify({
                    //     imageTitle: this.form.imageTitle,
                    //     image: this.form.imageRef,
                    //     enable:this.form.enable
                    // })
                    this.loading = true;
                    this.$axios.post('/nmk/material/updateMaterial', formData)
                        .then(function(response) {
                            console.log(response);
                            that.loading = false;
                            if (response.data.status == '2') {
                                that.$message.error(response.data.msg);
                            }else {

                                that.dialogChangeVisible = false;
                                that.clearFrom();
                                that.selectMaterial('', '');
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
        formChangeDialog() {

        },
        //更改菜单 end
        // 查询菜单
        selectMaterial(materialType, materialName) {
            // console.log(id);
            var that = this;
            this.$axios.get('/nmk/material/selectMaterial', {
                    params: {
                        materialType: materialType,
                        materialName: materialName
                    }
                })
                .then(function(response) {
                    console.log(response);
                    that.tableData = response.data.res.materialList;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        // 查询下拉列表
        selectAllMenu() {
            var that = this;
            this.$axios.get('/nmk/material/selectMaterialType', {
                    params: {

                    }
                })
                .then(function(response) {
                    console.log(response);
                    that.AllMenu = response.data.res.materialTypeList;
                    that.AllMaterialType = response.data.res
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
    },
    mounted: function() {
        this.permission =  this.getPermission(this.$route.path);
        let height = this.$refs.tableBox.offsetHeight;
        this.tableHeight = height;
        this.selectMaterial('');
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
}

.danwei-wid {
    width: 50px;
    display: inline-block;
}
</style>
