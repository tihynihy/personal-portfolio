<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        <div v-for="(item, index) in items" :key="index"
            class="hover:cursor-pointer p-4 sm:p-6 md:p-8 rounded-lg duration-300 hover:scale-80 hover:backdrop-blur-sm hover:bg-white/20 hover:bg-gray-500 relative mb-6 sm:mb-0">
            <img :src="item.img" class="mb-2 w-full object-contain h-32 sm:h-32 md:h-32 lg:h-32" />
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