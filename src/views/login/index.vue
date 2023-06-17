<template>
  <div class='login'>
    <div class="middle-container">
      <el-form ref="form"
               :model="ruleForm"
               label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="onSubmit('form')">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { getUser } from "@/api/app"
export default {
  data () {
    return {
      ruleForm: {
        name: 'admin',
        password: 'admin123'
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid)
        {
          getUser().then(res => {
            console.log(res);
          })
        } else
        {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>
<style lang='scss' scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #32bdc5;
  overflow: hidden;
  position: relative;
  .middle-container {
    position: absolute;
    width: 30%;
    height: 50%;
    background-color: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 20px;
    overflow: hidden;
  }
}
</style>