<template>
    <div class="bg-gray-800">
        <ol class="relative border-s border-gray-200">
            <li v-for="(item, index) in portfolioData" :key="index"
                class="mb-10 ms-4 px-4 py-4 rounded-xl hover:cursor-pointer hover:bg-sky-700 text-white hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white">
                </div>
                <time class="mb-1 text-sm font-normal leading-none">{{ item.date }}</time>
                <h3 class="text-lg font-semibold">{{ item.title }}</h3>
                <p class="mb-4 text-base font-normal">{{ item.description }}</p>
                <a :href="item.link"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none">
                    Learn more
                    <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </li>
        </ol>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            portfolioData: [
                {
                    date: 'February 2022',
                    title: 'Application UI code in Tailwind CSS',
                    description:
                        'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
                    link: '#',
                },
                {
                    date: 'February 2022',
                    title: 'Application UI code in Tailwind CSS',
                    description:
                        'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
                    link: '#',
                },
                {
                    date: 'February 2022',
                    title: 'Application UI code in Tailwind CSS',
                    description:
                        'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
                    link: '#',
                },
            ],
        };
    },
};
</script>
  