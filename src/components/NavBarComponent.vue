<template>
    <div class="flex flex-wrap items-center justify-center gap-4 md:gap-10 py-4 w-full md:w-3/5 lg:w-2/5 rounded-bl-2xl rounded-br-2xl mt-0 backdrop-blur-md bg-white/20 overflow-hidden">
      <router-link to="/">
        <button class="hover:-translate-y-1 text-white hover:text-white hover:scale-110 hover:bg-gray-600 duration-300 rounded-3xl px-4 py-2 transition ease-in-out delay-150">
          Home
        </button>
      </router-link>
      <router-link to="/roadmap">
        <button class="hover:-translate-y-1 text-white hover:text-white hover:scale-110 hover:bg-gray-600 duration-300 rounded-3xl px-4 py-2 transition ease-in-out delay-150">
          Roadmap
        </button>
      </router-link>
      <router-link to="/tech">
        <button class="hover:-translate-y-1 text-white hover:text-white hover:scale-110 hover:bg-gray-600 duration-300 rounded-3xl px-4 py-2 transition ease-in-out delay-150">
          Tech Experience
        </button>
      </router-link>
    </div>
  </template> 
  