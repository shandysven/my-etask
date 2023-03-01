<template>

<header id="section-header" class="py-4">
    <div class="flex items-center">
        <div class="flex items-center space-x-4">
            <h5 class="heading-title m-0">{{ this.$route.meta.title }}</h5>
            <div class="text-xs uppercase font-medium">{{ this.$route.meta.breadcrumb }}</div>
        </div>
        <div class="grow border-t border-t-slate-200 mx-6"></div>
        <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-1">
                <div class="relative">
                    <a href="#!" class="btn btn-sm btn-icon !rounded-2xl"><i class="fi fi-rr-bell"></i></a>
                </div>
            </div>
            <div class="relative">
                <div class="flex items-center cursor-pointer space-x-1">
                    <div class="relative aspect-square w-10 rounded-2xl overflow-hidden">
                        <img src="//source.unsplash.com/random/?portrait" alt="" class="w-full h-full object-cover object-center">
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

</template>

<script>
export default {
    name: 'Headernavbar'
}
</script>