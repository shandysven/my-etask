<template>

<div class="space-y-8">
    <div class="title px-8 text-center mb-8">
        <h2 class="heading-title">{{ title }}</h2>
    </div>
    <form @submit.prevent="this.$router.push({name: 'IndexHome'})">
        <div class="input-group mb-6">
            <label for="input-username" class="input-label">Username <span class="text-red-500">*</span></label>
            <input type="text" id="input-username" class="input-form" placeholder="Masukan username">
        </div>
        <div class="input-group mb-6">
            <label for="input-password" class="input-label">Password <span class="text-red-500">*</span></label>
            <input type="password" id="input-password" class="input-form" placeholder="Masukan password">
        </div>
        <div class="input-group mb-6">
            <div class="input-checkbox">
                <input type="checkbox" id="input-remember" class="hidden">
                <label for="input-remember">
                    <div class="checkbox-icon">
                        <i class="fi fi-br-check text-2xs"></i>
                    </div>
                    <div class="checkbox-label font-medium text-slate-900">Remember Me</div>
                </label>
            </div>
        </div>
        <div class="input-btn flex mt-8">
            <button class="btn grow btn-primary" type="submit"><span>Login</span></button>
            <router-link class="btn btn-icon btn-primary-light" :to="{name: 'SectionQrLogin'}"><i class="fi fi-rr-qrcode"></i></router-link>
        </div>
    </form>
</div>

</template>

<script>
export default {
    name: 'SectionLogin',
    data() {
        return {
            title: 'Login to Your Account',
        };
    }
}
</script>