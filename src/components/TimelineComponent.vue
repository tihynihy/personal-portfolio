<template>
    <ol class="items-center sm:flex">
        <li v-for="(item, index) in items" :key="index" class="hover:cursor-pointer p-4 rounded-lg duration-300 hover:scale-125 hover:backdrop-blur-sm hover:bg-white/20 hover:bg-gray-500 relative mb-6 sm:mb-0">
            <div class="flex items-center">
                <div
                    class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <!-- <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg> -->
                </div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ item.title }}</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{
                    item.releaseDate }}
                </time>
                <p class="text-base font-normal text-white">{{ item.description }}</p>
            </div>
        </li>
    </ol>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { title: 'University Basics', releaseDate: 'December 2, 2021', description: 'Started my journey in coding with the basics.' },
                { title: 'Hackathons', releaseDate: 'December 23, 2021', description: 'Winner of the BEST 2022 Hackathon in Sarajevo | BEST Mostar Hackathon 2021.' },
                { title: 'Frontend Development', releaseDate: 'January 5, 2022', description: 'Worked full time as a Vue.js developer | Figma UI/UX development' },
            ],
        };
    },
};
</script>