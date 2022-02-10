import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../views/Home.vue"

const routes = [
    {
        name : "home",
        path : "/",
        meta : {
            title : "首页"
        },
        redirect : "/welcome",
        component : Home,
        children : [
            {
                name : 'welcome',
                path : '/welcome',
                meta : {
                    title : "欢迎页"
                },
                component : () => import('../views/Welcome.vue')
            },
            {
                name : "users",
                path : '/users',
                meta : {
                    title : "用户列表"
                },
                component : () => import('../views/Users.vue')
            }
        ]
    },
    {
        name : "login",
        path : "/login",
        meta : {
            title : "登录页"
        },
        component : () => import('../views/Login.vue')
    }
]

const router = createRouter({
    history : createWebHashHistory(),
    routes
})

export default router