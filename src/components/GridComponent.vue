<template>
    <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <div v-for="(item, index) in items" :key="index"
            class="hover:cursor-pointer p-4 px-24 rounded-lg duration-300 hover:scale-125 hover:backdrop-blur-sm hover:bg-white/20 hover:bg-gray-500 relative mb-6 sm:mb-0">
            <img :src="item.img" alt="" class="mb-2 w-full h-32 object-cover" />
            <p>{{ item.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GridComponent',
    props: {
        items: {
            type: Array,
            required: true,
            default: () => ([])
        }
    }
}
</script>

<style scoped>
img {
    max-height: 100px;
    object-fit: cover;
}
</style>