<template>
    <particles-component />
    <!-- Navigation -->
    <div class="flex items-center justify-center top-0 sticky">
        <!-- <toast-component /> -->
        <navbar />
    </div>
    <!-- Body -->
    <div class="flex flex-col items-center justify-center mt-10">
        <avatar />
        <div class="mt-5">
            <!-- <typewrite-effect /> -->
            <about-component />
        </div>
    </div>
    <div class="bg-gray-800 text-white rounded-xl mx-auto px-4 py-2 w-[30%] text-center border border-white my-10 uppercase">
        Experience Roadmap
    </div>
    <div class="w-[800px] mx-auto border rounded-xl bg-gray-800 px-6">
        <timeline-component />
    </div>
    <div class="bg-gray-800 text-white rounded-xl mx-auto px-4 py-2 w-[30%] text-center border border-white my-10 uppercase">
        Technology experience
    </div>
    <Toast position="bottom-center" group="bc" @close="onClose">
    <template #message="slotProps">
        <div class="flex flex-column align-items-start" style="flex: 1">
            <div class="flex align-items-center gap-2">
                <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold text-900">Amy Elsner</span>
            </div>
            <div class="font-medium text-lg my-3 text-900">{{ slotProps.message.summary }}</div>
            <Button class="p-button-sm" label="Reply" @click="onReply()"></Button>
        </div>
    </template>
</Toast>
    <!-- <footer-component /> -->
</template>

<script>
</script>
