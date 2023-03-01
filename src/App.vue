<template>
    <router-view></router-view>
    <AppTooltip></AppTooltip>
</template>

<script>
import AppTooltip from '@/components/AppTooltip.vue'
export default {
    components: {
        AppTooltip
    },
}
</script>