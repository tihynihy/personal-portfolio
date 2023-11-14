<template>
    <particles-component />
    <!-- Navigation -->
    <div class="flex items-center justify-center">
        <navbar />
    </div>
    <!-- Body -->
    <div class="flex flex-col items-center justify-center mt-10">
        <avatar />
        <div class="mt-10">
            <typewrite-effect />
            <about-component />
        </div>
    </div>
    <div class="bg-gray-800 text-white rounded-xl mx-auto px-4 py-2 w-[30%] text-center border border-white my-10">
        Experience Roadmap
    </div>
    <div class="w-[800px] mx-auto border rounded-xl bg-gray-800 px-6">
        <timeline-component />
    </div>
</template>

<script>
</script>
