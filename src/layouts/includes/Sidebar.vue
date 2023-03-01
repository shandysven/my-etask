<template>

<div class="flex flex-col p-4 h-screen sticky top-0">
    <div class="relative grow flex flex-col bg-gradient-to-b from-blue-600 to-blue-600 rounded-2xl z-10 overflow-hidden">
        <div class="grow flex flex-col min-h-0">
            <div class="section-header p-4">
                <div class="brand-header relative flex items-center space-x-4">
                    <div class="brand-logo w-10 h-10 bg-no-repeat bg-contain bg-center bg-[url(@/assets/img/logo_icon_4vm_white.svg)]"></div>
                </div>
            </div>
            <SimpleBar class="grow flex flex-col py-4 overflow-auto">
                <div class="menu-group my-auto">
                    <div class="menu-group-item space-y-4">
                        <ul class="menu-list flex flex-col space-y-4">
                            <li class="menu-item">
                                <router-link :to="{name: 'IndexHome'}" class="menu-link flex tems-center relative group px-4" data-tooltip-target="tooltip-home" data-tooltip-placement="right">
                                    <div class="menu-icon w-10 h-10 flex items-center justify-center text-white/60 rounded-2xl text-lg group-hover:bg-white/10 group-hover:text-white">
                                        <i class="fi fi-rr-home"></i>
                                    </div>
                                </router-link>
                            </li>
                            <li class="menu-item">
                                <router-link :to="{name: 'IndexDashboard'}" class="menu-link flex tems-center relative group px-4" data-tooltip-target="tooltip-dashboard" data-tooltip-placement="right">
                                    <div class="menu-icon w-10 h-10 flex items-center justify-center text-white/60 rounded-2xl text-lg group-hover:bg-white/10 group-hover:text-white">
                                        <i class="fi fi-rr-dashboard"></i>
                                    </div>
                                </router-link>
                            </li>
                            <li class="menu-item">
                                <router-link :to="{name: 'IndexAnnouncement'}" class="menu-link flex tems-center relative group px-4" data-tooltip-target="tooltip-announcement" data-tooltip-placement="right">
                                    <div class="menu-icon w-10 h-10 flex items-center justify-center text-white/60 rounded-2xl text-lg group-hover:bg-white/10 group-hover:text-white">
                                        <i class="fi fi-rr-megaphone"></i>
                                    </div>
                                </router-link>
                            </li>
                            <li class="menu-item">
                                <router-link :to="{name: 'IndexRanking'}" class="menu-link flex tems-center relative group px-4" data-tooltip-target="tooltip-ranking" data-tooltip-placement="right">
                                    <div class="menu-icon w-10 h-10 flex items-center justify-center text-white/60 rounded-2xl text-lg group-hover:bg-white/10 group-hover:text-white">
                                        <i class="fi fi-rr-crown"></i>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </SimpleBar>
            <div class="flex flex-col py-4">
                <div class="menu-group-item space-y-4">
                    <ul class="menu-list flex flex-col space-y-4">
                        <li class="menu-item">
                            <router-link :to="{name: 'SectionLogin'}" class="menu-link flex tems-center relative group px-4" data-tooltip-target="tooltip-setting" data-tooltip-placement="right">
                                <div class="menu-icon w-10 h-10 flex items-center justify-center text-white/60 rounded-2xl text-lg group-hover:bg-white/10 group-hover:text-white">
                                    <i class="fi fi-rr-settings"></i>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import SimpleBar from 'simplebar-vue'
export default {
    name: 'SidebarPrimary',
    components: {
        SimpleBar
    }
}
</script>