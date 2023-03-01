import LayoutDashboard from '@/layouts/LayoutDashboard.vue'

export default {
    path: '/dashboard',
    component: LayoutDashboard,
    meta: { title:'Dashboard'},
    children: [
        { path: '', name: 'IndexDashboard', component:()=> import ('@/views/dashboard/IndexDashboard.vue') },
        { path: 'my-task', name: 'IndexMyTask', component:()=> import ('@/views/dashboard/IndexMyTask.vue'), meta: { breadcrumb:'My Task'} },
        { path: 'project', name: 'IndexProject', component:()=> import ('@/views/dashboard/IndexProject.vue'), meta: { breadcrumb:'Project'} },
    ]
}
