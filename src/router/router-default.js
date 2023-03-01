import LayoutDefault from '@/layouts/LayoutDefault.vue'

export default {
    path: '/',
    component: LayoutDefault,
    children: [
        { path: 'home', name: 'IndexHome', component:()=> import ('@/views/home/IndexHome.vue'), meta: { title:'Overview'} },
        { path: 'announcement', name: 'IndexAnnouncement', component:()=> import ('@/views/announcement/IndexAnnouncement.vue'), meta: { title:'Announcement'} },
        { path: 'ranking', name: 'IndexRanking', component:()=> import ('@/views/ranking/IndexRanking.vue'), meta: { title:'Ranking'} },
        { path: 'setting', name: 'IndexSetting', component:()=> import ('@/views/setting/IndexSetting.vue'), meta: { title:'Setting'} }
    ]
}
