<template>

<div class="space-y-8">
    <div class="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px" viewBox="0 0 250 250"><rect x="0" y="0" fill="transparent"></rect><g transform="scale(11.905)"><g transform="translate(0,0)"><path fill-rule="evenodd" d="M8 0L8 1L9 1L9 0ZM10 0L10 2L8 2L8 5L9 5L9 6L8 6L8 7L9 7L9 6L10 6L10 7L11 7L11 8L8 8L8 9L7 9L7 8L6 8L6 9L7 9L7 10L5 10L5 9L4 9L4 8L0 8L0 10L2 10L2 11L3 11L3 13L5 13L5 12L6 12L6 13L8 13L8 14L9 14L9 15L13 15L13 14L12 14L12 13L13 13L13 12L12 12L12 10L15 10L15 9L14 9L14 8L13 8L13 5L12 5L12 4L13 4L13 3L12 3L12 1L13 1L13 0ZM10 2L10 4L9 4L9 5L11 5L11 4L12 4L12 3L11 3L11 2ZM11 6L11 7L12 7L12 6ZM16 8L16 9L17 9L17 11L14 11L14 12L15 12L15 13L14 13L14 14L15 14L15 16L12 16L12 17L11 17L11 16L10 16L10 17L11 17L11 18L10 18L10 20L9 20L9 17L8 17L8 21L11 21L11 18L12 18L12 19L13 19L13 21L14 21L14 19L16 19L16 18L20 18L20 17L21 17L21 15L16 15L16 14L15 14L15 13L16 13L16 12L17 12L17 11L18 11L18 9L19 9L19 8ZM20 8L20 9L21 9L21 8ZM2 9L2 10L3 10L3 9ZM8 9L8 10L7 10L7 11L6 11L6 12L10 12L10 13L9 13L9 14L10 14L10 13L12 13L12 12L11 12L11 10L9 10L9 9ZM4 10L4 12L5 12L5 10ZM8 10L8 11L9 11L9 10ZM19 10L19 12L18 12L18 13L17 13L17 14L19 14L19 12L21 12L21 11L20 11L20 10ZM0 11L0 13L1 13L1 11ZM17 16L17 17L20 17L20 16ZM12 17L12 18L13 18L13 19L14 19L14 17ZM15 17L15 18L16 18L16 17ZM17 19L17 20L16 20L16 21L17 21L17 20L18 20L18 19ZM19 20L19 21L20 21L20 20ZM0 0L0 7L7 7L7 0ZM1 1L1 6L6 6L6 1ZM2 2L2 5L5 5L5 2ZM14 0L14 7L21 7L21 0ZM15 1L15 6L20 6L20 1ZM16 2L16 5L19 5L19 2ZM0 14L0 21L7 21L7 14ZM1 15L1 20L6 20L6 15ZM2 16L2 19L5 19L5 16Z" fill="#3b82f6"></path></g></g></svg>
    </div>
    <div class="title text-center">
        <h5 class="heading-title">{{ title }}</h5>
    </div>
    <form @submit.prevent="this.$router.push({name: 'IndexHome'})">
        <div class="input-group mb-6">
            <label class="input-label" for="input-otp">Masukan OTP <small class="text-red-500">*</small></label>
            <div class="flex gap-4">
                <input id="input-otp" class="input-form" type="number" placeholder="Masukan OTP" autocomplete="off">
            </div>
        </div>
        <div class="input-btn flex mt-8">
            <button type="submit" class="btn grow btn-primary-light"><span>Verify</span></button>
        </div>
    </form>
    <div class="caption-btn text-center">
        <router-link :to="{name: 'SectionLogin'}" class="inline-flex items-center space-x-3 text-slate-400">
            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white">
                <i class="fi fi-br-angle-small-left"></i>
            </div>
            <span class="font-medium text-sm">Kembali</span>
        </router-link>
    </div>
</div>

</template>

<script>
export default {
    name: 'SectionQrLogin',
    data() {
        return {
            title: 'Scan QR Code to get OTP',
        };
    },
}
</script>

<style>

</style>