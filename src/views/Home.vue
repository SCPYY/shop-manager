<template>
    <div id="basic-layout">
        <div class="nav-side">
            <div class="logo">
                <img src="./../assets/img/logo.png" alt="">
                <span>后台管理系统</span>
            </div>
            <!-- 左侧菜单 -->
            <el-menu
                default-active="1"
                class="nav-menu"
                background-color="#001529"
                text-color="#fff"
                :collapse="isCollapse"
                :router="true"
            >
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item index="users">用户列表</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>权限管理</span>
                    </template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>商品管理</span>
                    </template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="4">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>订单管理</span>
                    </template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="5">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>数据统计</span>
                    </template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </div>
        <div class="content-right">
            <div class="nav-top">
                <div class="nav-left">
                    <div class="bread">
                        <BreadCrumb></BreadCrumb>
                    </div>
                </div>
                <div class="nav-right">
                    <div class="user-info">
                        <el-badge :is-dot="noticeCount > 0 ? true : false"
                            class="user-badge"
                        >
                            <el-icon class="el-icon-bell">
                                <bell></bell>
                            </el-icon>
                        </el-badge>
                        <el-dropdown @command="handleLogout">
                            <span class="user-link">
                                {{userInfo.username}}
                                <el-icon class="el-icon--right">
                                <arrow-down />
                                </el-icon>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item command="email">邮箱:{{userInfo.email}}</el-dropdown-item>
                                    <el-dropdown-item command="mobile">手机号:{{userInfo.mobile}}</el-dropdown-item>
                                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                </div>
            </div>
            <div class="wrapper">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '../components/Breadcrumb.vue'
import { Setting, Fold, Bell, ArrowDown } from '@element-plus/icons-vue'
export default {
    name : "home",
    components : {
        BreadCrumb,
        ArrowDown,
        Bell
    },
    data() {
        return {
            userInfo : this.$store.state.userInfo,
            noticeCount : 1,
        }
    },
    methods : {
        handleLogout(key) {
            if(key == "email") {
                return
            }else {
                this.$store.commit('setUserInfo', '')
                this.$router.push('/login')
            }
        }
    },
    beforeMount() {
        if(!this.$store.state.token) this.$router.push('/login')
    }
}
</script>

<style lang='scss' scope>
#basic-layout {
    position: relative;
    .nav-side {
        position: fixed;
        width: 200px;
        height: 100vh;
        background-color: #001529;
        color: #fff;
        .logo {
            display: flex;
            align-items: center;
            font-size: 16px;
            height: 50px;
            img {
                margin: 0 15px;
                width: 32px;
                height: 32px;
            }
        }
    }
    .content-right {
        margin-left: 200px;
        .nav-top {
            height: 50px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ddd;
            padding: 0 20px;
            .nav-left {
                z-index: 10;
                display: flex;
                align-items: center;
                .menu-fold {
                    width: 20px;
                    height: 25px;
                    margin-right: 15px;
                }
            }
            .nav-right {
                display: flex;
                align-items: center;
                .user-info {
                    .user-badge {
                        margin-right: 15px;
                    }
                    .user-link {
                        cursor: pointer;
                        color: #409eff;
                    }
                }
            }
        }
        .wrapper{
            background-color: #eef0f3;
            padding: 20px;
            height: calc(100vh - 91px);
        }
    }
}
</style>