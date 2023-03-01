import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import RouterAuth from '@/router/router-auth'
import RouterDefault from '@/router/router-default'
import RouterDashboard from '@/router/router-dashboard'

// const routes = [
//     // { path:'/', name:'login', component:()=> import ('@/views/page.login.vue') },
//     // { path:'/qrlogin', name:'qrlogin', component:()=> import ('@/views/page.qrlogin.vue') }
//     {
//         path: '/',
//         name: 'layout',
//         component: import ('@/components/layoutAuth.vue'),
//         children: [
//             {
//                 path: '',
//                 name: 'login',
//                 component:() => import ('@/views/auth/login.vue')
//             },
//             {
//                 path: 'qrlogin',
//                 name: 'qrlogin',
//                 component:() => import ('@/views/auth/qrLogin.vue')
//             },
//         ]
//     } 
// ]

const router = createRouter({
    routes: [
        RouterAuth,
        RouterDefault,
        RouterDashboard
    ],
    history: createWebHistory(),
    linkActiveClass: 'is-active'
})

export default router