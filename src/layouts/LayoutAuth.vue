<template>
  
<main class="relative isolate flex flex-col min-h-screen">
    <header class="py-12">
        <div class="max-w-screen-lg mx-auto my-auto px-4 grow lg:px-12 xl:px-0">
            <div class="brand-header max-w-min mx-auto">
                <div class="brand-logo w-12 h-12 bg-no-repeat bg-contain bg-center bg-[url(@/assets/img/logo_icon_4vm.svg)]"></div>
            </div>
        </div>
    </header>
    <section class="py-12 grow flex">
        <div class="max-w-screen-lg mx-auto my-auto px-4 grow lg:px-12 xl:px-0">
            <div class="grid md:grid-cols-12">
                <div class="grid-item md:col-span-6 md:col-start-4">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </section>
    <footer class="py-12">
        <div class="max-w-screen-lg mx-auto my-auto px-4 grow lg:px-12 xl:px-0">
            <div class="copyright text-center text-xs text-slate-400">© 2023 4visionmedia. All rights reserved.</div>
        </div>
    </footer>
</main>

</template>

<script>
export default {
    name: "LayoutAuth",
};
</script>