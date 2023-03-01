<template>

<div class="flex flex-col p-4 h-screen sticky top-0">
    <SimpleBar class="grow flex flex-col p-4 -mx-4 overflow-auto">
        <div class="menu-group">
            <div class="menu-group-item">
                <ul class="sidebar-menu-list flex flex-col space-y-2">
                    <li class="menu-item">
                        <router-link :to="{name: 'IndexDashboard'}">Dashboard</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <ul class="sidebar-menu-list flex flex-col space-y-2">
            <li class="menu-item">
                <router-link :to="{name: 'IndexDashboard'}">Dashboard</router-link>
            </li>
            <li class="menu-item">
                <router-link :to="{name: 'IndexMyTask'}">My Task</router-link>
            </li>
            <li class="menu-item">
                <router-link :to="{name: 'IndexProject'}">Project</router-link>
            </li>
        </ul>
    </SimpleBar>
</div>

</template>

<script>
import SimpleBar from 'simplebar-vue'
export default {
    name: 'SidebarSecondary',
    components: {
        SimpleBar
    }
}
</script>