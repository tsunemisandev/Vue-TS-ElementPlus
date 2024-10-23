<template>
    <el-card class="form-card" shadow="hover">
      <h2>User Registration</h2>
      <el-form :model="form" :rules="rules" ref="registerForm" label-width="120px">
        <el-form-item label="Name" prop="name">
          <el-input v-model="form.name" placeholder="Enter your name"></el-input>
        </el-form-item>
  
        <el-form-item label="Email" prop="email">
          <el-input v-model="form.email" placeholder="Enter your email"></el-input>
        </el-form-item>
  
        <el-form-item label="Password" prop="password">
          <el-input type="password" v-model="form.password" placeholder="Enter your password"></el-input>
        </el-form-item>
  
        <el-form-item>
          <el-button type="primary" @click="submitForm" id="register">Register</el-button>
          <el-button @click="resetForm"  id="reset">Reset</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { ElMessage } from 'element-plus'
  
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
  