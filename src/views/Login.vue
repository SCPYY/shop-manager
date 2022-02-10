<script>
import { User, View } from '@element-plus/icons-vue'
import userApi from '../api/users'
import { ElMessage } from 'element-plus'
export default {
    name : "login",
    data () {
        return {
            user : {
                username : '',
                password : ''
            },
            rules : {
                userName : [{require : true, message : "请输入用户名", trigger : "blur"}],
                userPwd : [{require : true, message : "请输入密码", trigger : "blur"}]
            }
        }
    },
    methods : {
      login() {
        this.$refs.userForm.validate((res) => {
          if(res) {
            userApi.login(this.user).then((res) => {
              this.$store.commit("setToken", res.token)
              delete res.token
              this.$store.commit('setUserInfo', res)
              ElMessage({
                message : "登录成功！",
                type : "success"
              })
              this.$router.push('/')
            })
          }
        })
      }
    },
    computed : {
        userI() {
            return User
        },
        viewI() {
            return View
        }
    },
}
</script>

<template>
  <div class="login-wrapper">
    <div class="modal">
      <el-form :model="user" :rules="rules" status-icon ref="userForm">
        <div class="title">登录页</div>
        <el-form-item prop="userName">
          <el-input type="text" :prefix-icon="userI" v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input type="password" :prefix-icon="viewI" v-model="user.password"></el-input>
        </el-form-item >
        <el-form-item>
          <el-button type="primary" class="btn-login" size="large" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9fcff;
    width: 100vw;
    height: 100vh;
    .modal {
        width: 400px;
        padding: 35px;
        background-color: #fff;
        box-shadow: 0px 0px 10px 3px #c7c9cb4d;
        .title {
            font-size: 35px;
            line-height: 1.5;
            text-align: center;
            margin-bottom: 20px;
        }
        .btn-login {
            width: 100%;
        }
    }
}
</style>
