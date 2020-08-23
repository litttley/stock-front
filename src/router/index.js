import Vue from 'vue'
import VueRouter from 'vue-router'

import GridLayout from "../views/GridLayout";

import Login from "../components/Login";
import Home from "../views/Home";
import Welcome from "../views/Welcome";
//导入全局样式
import '../assets/css/global.css'

//导入全局样式
import '../assets/fonts/iconfont.css'
Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/grid',
        component: GridLayout
    },

    {
        path: '/home',
        component: Home,
        redirect: '/welcome',
        children:[
            {
                path:'/welcome',
                component: Welcome
            }
        ]
    },

]

const router = new VueRouter({
    routes
})

export default router
