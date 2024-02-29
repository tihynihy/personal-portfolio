<template>
    <div class="flex items-center justify-center gap-10 py-4 w-[40%] rounded-bl-2xl rounded-br-2xl mt-0 backdrop-blur-sm bg-white/20 overflow-hidden ">
        <router-link to="/">
        <button
            class="hover:-translate-y-1 text-white hover:text-white hover:scale-110 hover:bg-gray-600 duration-300 rounded-3xl px-4 py-2 transition ease-in-out delay-150">
            Home
        </button>
    </router-link>
        <router-link to="/roadmap">
            <button
            class="hover:-translate-y-1 text-white hover:text-white hover:scale-110 hover:bg-gray-600 duration-300 rounded-3xl px-4 py-2 transition ease-in-out delay-150">
            Experience Roadmap
        </button>
    </router-link>
    <router-link to="/about">
        <button
            class="hover:-translate-y-1 text-white hover:text-white hover:scale-110 hover:bg-gray-600 duration-300 rounded-3xl px-4 py-2 transition ease-in-out delay-150">
            About me
        </button>
    </router-link>
    </div>
</template>
