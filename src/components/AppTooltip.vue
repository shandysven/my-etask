<template>

<div id="tooltip-home" role="tooltip" class="absolute z-10 invisible py-2 px-3 text-white bg-slate-900 rounded-xl hidden tooltip">
    <span class="text-xs font-medium">Home</span>
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
<div id="tooltip-dashboard" role="tooltip" class="absolute z-10 invisible py-2 px-3 text-white bg-slate-900 rounded-xl hidden tooltip">
    <span class="text-xs font-medium">Dashboard</span>
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
<div id="tooltip-announcement" role="tooltip" class="absolute z-10 invisible py-2 px-3 text-white bg-slate-900 rounded-xl hidden tooltip">
    <span class="text-xs font-medium">Announcement</span>
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
<div id="tooltip-ranking" role="tooltip" class="absolute z-10 invisible py-2 px-3 text-white bg-slate-900 rounded-xl hidden tooltip">
    <span class="text-xs font-medium">Ranking</span>
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
<div id="tooltip-setting" role="tooltip" class="absolute z-10 invisible py-2 px-3 text-white bg-slate-900 rounded-xl hidden tooltip">
    <span class="text-xs font-medium">Setting</span>
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

</template>

<script>
export default {
    name: 'TooltipSidebarPrimary'
}
</script>