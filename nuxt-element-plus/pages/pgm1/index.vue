<template>
    <el-card class="form-card" shadow="hover">
      <h2>User Registration</h2>
      <el-form :model="form" :rules="rules" ref="registerForm" label-width="120px">
        <el-form-item>
          <el-button type="primary" @click="submitForm" id="register" :disabled="disable">Register</el-button>
          <el-button type="default" @click="()=>disable = true" id="set_disable">Set Disable</el-button>
          <el-button @click="resetForm"  id="reset">Reset</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { ElMessage } from 'element-plus'
  
  const disable = ref(false)
  const form = ref({
    name: '',
    email: '',
    password: '',
  })
  
  const rules = {
    name: [
      { required: true, message: 'Please input your name', trigger: 'blur' },
    ],
    email: [
      { required: true, message: 'Please input your email', trigger: 'blur' },
      { type: 'email', message: 'Please enter a valid email address', trigger: 'blur' },
    ],
    password: [
      { required: true, message: 'Please input your password', trigger: 'blur' },
      { min: 6, message: 'Password should be at least 6 characters', trigger: 'blur' },
    ],
  }
  
  const registerForm = ref(null)
  
  const submitForm = () => {
    registerForm.value.validate((valid) => {
      if (valid) {
        ElMessage({
          message: 'Registration successful!',
          type: 'success',
        })
      } else {
        ElMessage({
          message: 'Please complete the form correctly!',
          type: 'error',
        })
      }
    })
  }
  
  const resetForm = () => {
    registerForm.value.resetFields()
  }
  </script>
  
  <style scoped>
  .form-card {
    max-width: 400px;
    width: 100%;
    padding: 20px;
    background-color: white;
  }
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  