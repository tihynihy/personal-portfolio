<template>
  <div class="flex w-[1000px] relative">
    <!-- Left side div for text -->
    <div class="w-1/2 p-4">
      <div class="backdrop-blur-sm bg-white/40 text-white rounded-2xl h-300 w-[450px] p-8 relative z-10">
        <h1 class="text-2xl font-semibold py-2">Hello, I am Nihad</h1>
        <!-- Your text content goes here -->
        <p class="text-lg">
          I'm a recent graduate at RMIT University, majored in Computer Science.
          My areas of interest include problem-solving, cloud infrastructure, machine learning, and IoT.
          With a detail-oriented focus, I enjoy creating simple but effective solutions to improve application performance, ease of maintenance, and user experience.
        </p>
        <p class="text-2xl font-semibold pt-2">Sources:</p>
        <div class="flex gap-4 py-2">
          <!-- Icon links -->
          <button class="hover:-translate-y-1 text-white hover:text-white hover:scale-110 hover:bg-white duration-300 rounded-3xl px-4 py-2 transition ease-in-out delay-150">
            <a href="https://www.linkedin.com/in/nihad-jusovi%C4%87-16788a226/">
              <img src="../assets/linkedin.svg" alt="Portfolio Image" class="h-10 w-10">
            </a>
          </button>
          <button class="hover:-translate-y-1 text-white hover:text-white hover:scale-110 hover:bg-white duration-300 rounded-3xl px-4 py-2 transition ease-in-out delay-150">
            <a href="https://github.com/tihynihy">
              <img src="../assets/github.svg" alt="Portfolio Image" class="h-10 w-10">
            </a>
          </button>
          <button class="hover:-translate-y-1 text-white hover:text-white hover:scale-110 hover:bg-white duration-300 rounded-3xl px-4 py-2 transition ease-in-out delay-150">
            <a href="mailto:tihynihy@gmail.com">
              <img src="../assets/mail.svg" alt="Portfolio Image" class="h-10 w-10">
            </a>
          </button>
        </div>
        <button class="border">
          <img src="../assets/download.svg" alt="Download">
        </button>
      </div>
    </div>
    <div class="px-10"></div>
    <!-- Right side div for image -->
    <div class="absolute top-4 right-0 h-full w-[500px]">
      <!-- Image -->
      <img src="https://us.images.westend61.de/0000474903pw/portrait-of-young-man-in-front-of-grey-background-RHF000408.jpg" alt="profile image" class="h-80 w-72 object-cover rounded-2xl">
      <div class="absolute bottom-6 right-0 w-72 h-80 bg-gray-500 p-2 rounded-2xl">
        behind
      </div>
    </div>
  </div>
</template>


<!-- Add Download CV Button 
SVG -> CV needs to be modified 
Also repair the overaly -->