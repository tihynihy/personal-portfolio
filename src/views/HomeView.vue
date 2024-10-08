<template>
  <div class="flex flex-col md:flex-row items-center justify-center mt-[5%]">
    <img
  src="../../public/me.jpg"
  alt="avatar image"
  class="rounded-full h-40 w-100 object-contain block mb-[5%] md:hidden"
/>

    <!-- Left side div for text -->
    <div class="w-full md:w-1/2 p-4">
      <div
        class="backdrop-blur-sm bg-white/20 text-white rounded-2xl h-auto md:h-300 w-full md:w-[450px] p-8 mx-auto relative"
      >
        <h1 class="text-2xl font-semibold py-2">Hello, I am Nihad</h1>
        <p class="text-lg">
          I'm a recent graduate at
          <a href="https://www.ius.edu.ba/en" target="_blank">IUS University</a
          >, majored in Software Engineering. My areas of interest include
          problem-solving, full-stack, mobile development, and IoT. With a
          detail-oriented focus, I enjoy creating simple but effective solutions
          to improve application performance, ease of maintenance, and user
          experience.
        </p>
        <p class="text-2xl font-semibold mt-6">Sources:</p>
        <div class="flex space-x-4 py-2">
          <!-- Icon links -->
          <button
            class="hover:-translate-y-1 text-white hover:text-white hover:scale-110 duration-300 rounded-3xl py-2 transition ease-in-out delay-150"
          >
            <a
              href="https://www.linkedin.com/in/nihad-jusovi%C4%87-16788a226/"
              target="_blank"
            >
              <img
                src="../assets/linkedin.svg"
                alt="LinkedIn"
                class="h-10 w-10"
              />
            </a>
          </button>
          <button
            class="hover:-translate-y-1 text-white hover:text-white hover:scale-110 duration-300 rounded-3xl py-2 transition ease-in-out delay-150"
          >
            <a href="https://github.com/tihynihy" target="_blank">
              <img src="../assets/github.svg" alt="GitHub" class="h-10 w-10" />
            </a>
          </button>
          <button
            class="hover:-translate-y-1 text-white hover:text-white hover:scale-110 duration-300 rounded-3xl py-2 transition ease-in-out delay-150"
          >
            <a href="mailto:nihad.jusovich@gmail.com">
              <img src="../assets/mail.svg" alt="Email" class="h-10 w-10" />
            </a>
          </button>
        </div>
        <button
          @click="isOpen = true"
          class="border bg-white mt-2 font-bold hover:-translate-y-1 text-black hover:scale-110 duration-300 px-4 py-3 transition ease-in-out delay-150 rounded-3xl flex"
        >
          Show CV
        </button>
        <!-- CV Rendering -->
        <teleport to="body">
          <div
            v-if="isOpen"
            class="fixed top-0 left-0 bg-black bg-opacity-70 w-full h-full flex justify-center items-center z-50"
            @click.self="isOpen = false"
          >
            <div class="cv-container">
              <h2 class="text-xl font-semibold mb-4">
                Curriculum Vitae Details
              </h2>
              <iframe
                src="/personal-portfolio/CV-Nihad-Jusovic.pdf"
                frameborder="0"
                class="cv-frame"
              ></iframe>
              <button
                @click="isOpen = false"
                class="mt-[10%] md:mt-[5%] p-2 bg-white font-bold hover:-translate-y-1 text-black hover:scale-110 duration-300 px-4 py-3 transition ease-in-out delay-150 rounded-3xl flex"
              >
                Close
              </button>
            </div>
          </div>
        </teleport>
        <!-- end -->
      </div>
    </div>
    <div
      class="w-full md:w-auto flex justify-center md:justify-start px-10 mt-10 md:mt-0"
    >
      <!-- Right side div for image -->
      <div class="relative">
        <img
          src="../../public/me.jpg"
          alt="profile image"
          class="h-100 w-80 object-cover rounded-2xl relative hidden md:block"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>

<style scoped>
.cv-container {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  height: 90%;
  max-width: 1200px;
  max-height: 800px;
}

.cv-frame {
  width: 100%;
  height: calc(100% - 60px);
  border: none;
}

@media (max-width: 768px) {
  .cv-container {
    width: 95%;
    height: 80%;
  }

  .cv-frame {
    height: calc(
      100% - 60px
    );
  }
}
</style>
