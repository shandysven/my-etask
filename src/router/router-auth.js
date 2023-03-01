import LayoutAuth from '@/layouts/LayoutAuth.vue'

export default {
    path: '/',
    component: LayoutAuth,
    children: [
        { path: '/', name: 'SectionLogin', component:()=> import ('@/views/auth/Login.vue') },
        { path: 'qrlogin', name: 'SectionQrLogin', component: ()=> import ('@/views/auth/QrLogin.vue') },
    ]
}