import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../views/Home.vue"

const routes = [
    {
        name : "home",
        path : "/",
        meta : {
            name : "首页"
        },
        component : Home
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