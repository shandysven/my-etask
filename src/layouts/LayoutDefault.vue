<template>

<main class="grid grid-cols-[auto_1fr]">

<aside id="section-sidebar-start" class="flex flex-col bg-slate-100">
    <SidebarPrimary></SidebarPrimary>
</aside>

<section id="section-page" class="grid grid-cols-[18rem_1fr]">
    <aside id="section-sidebar" class="bg-slate-100">
        <SidebarDefault></SidebarDefault>
    </aside>
    <div class="py-4 px-8 grow flex flex-col">
        <HeaderNavbar></HeaderNavbar>
        <section id="page-content" class="py-8 grow">
            <router-view></router-view>
        </section>
        <SectionFooter></SectionFooter>
    </div>
</section>

</main>

</template>

<script>
import SimpleBar from 'simplebar-vue'
import HeaderNavbar from '@/layouts/includes/HeaderNavbar.vue'
import SidebarPrimary from '@/layouts/includes/Sidebar.vue'
import SidebarDefault from '@/layouts/includes/SidebarDefault.vue'
import SectionFooter from '@/layouts/includes/Footer.vue'
export default {
    name: 'LayoutDefault',
    components: {
        SidebarPrimary,
        SidebarDefault,
        HeaderNavbar,
        SectionFooter,
        SimpleBar
    }
}
</script>