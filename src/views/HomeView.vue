<template>
<div class="flex">
  <!-- Left side div for text -->
  <div class="w-1/2 p-4">
    <div class="backdrop-blur-sm bg-white/20 text-white rounded-2xl h-300 w-[450px] p-8">
        <h1 class="text-2xl font-semibold py-2">Hello, I am Nihad</h1>
        <!-- Your text content goes here -->
        <p class="text-lg">
          I'm a recent graduate at RMIT University, majored in Computer Science.
          My areas of interest include problem-solving, cloud infrastructure, machine learning, and IoT.
          With a detail-oriented focus, I enjoy creating simple but effective solutions to improve application performance, ease of maintenance, and user experience.
        </p>
        <p class="text-2xl font-semibold mt-6">
          Sources:
        </p>
        <div class="flex py-2">
          <!-- Icon links -->
          <button class="hover:-translate-y-1 text-white hover:text-white hover:scale-110 duration-300 rounded-3xl px-4 py-2 transition ease-in-out delay-150">
            <a href="https://www.linkedin.com/in/nihad-jusovi%C4%87-16788a226/">
              <img src="../assets/linkedin.svg" alt="Portfolio Image" class="h-10 w-10">
            </a>
          </button>
          <button class="hover:-translate-y-1 text-white hover:text-white hover:scale-110 duration-300 rounded-3xl px-4 py-2 transition ease-in-out delay-150">
            <a href="https://github.com/tihynihy">
              <img src="../assets/github.svg" alt="Portfolio Image" class="h-10 w-10">
            </a>
          </button>
          <button class="hover:-translate-y-1 text-white hover:text-white hover:scale-110 duration-300 rounded-3xl px-4 py-2 transition ease-in-out delay-150">
            <a href="mailto:tihynihy@gmail.com">
              <img src="../assets/mail.svg" alt="Portfolio Image" class="h-10 w-10">
            </a>
          </button>
        </div>
        <button class="border bg-white mt-2 font-bold hover:-translate-y-1 text-black hover:scale-110 duration-300 px-4 py-3 transition ease-in-out delay-150 rounded-3xl flex">
        Download CV
      </button>
      </div>
    </div>
    <div class="px-10"></div>
    <!-- Right side div for image -->
    <div class="w-[500px]">
      <div class="absolute ml-40 w-80 h-80 backdrop-blur-sm bg-white/20 p-2 mt-56 rounded-2xl"></div>
      <img src="https://us.images.westend61.de/0000474903pw/portrait-of-young-man-in-front-of-grey-background-RHF000408.jpg" 
           alt="profile image" 
           class="h-80 w-80 mt-10 object-cover absolute rounded-2xl">
  </div>
  </div>
  <footer-component />
</template>