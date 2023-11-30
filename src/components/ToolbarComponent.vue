<template>
    <Toolbar class="bg-gray-900 shadow-2" style="border-radius: 3rem; background-image: linear-gradient(to right, var(--bluegray-500), var(--bluegray-800))">
    <template #start>
        <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="..." fill="#ffffff" />
            <path d="..." fill="#10b981" />
        </svg>
    </template>

    <template #center>
        <div class="flex flex-wrap align-items-center gap-3">
            <button class="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200"><i class="pi pi-home text-2xl"></i></button>
            <button class="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200"><i class="pi pi-user text-2xl"></i></button>
            <button class="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200"><i class="pi pi-search text-2xl"></i></button>
        </div>
    </template>

    <template #end>
        <div class="flex align-items-center gap-2">
            <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
            <span class="font-bold text-bluegray-50">Amy Elsner</span>
        </div>
    </template>
</Toolbar>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>