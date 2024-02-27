<template>
<div class="flex">
  <!-- Left side div for text -->
  <div class="w-1/2 p-4">
    <div class="backdrop-blur-sm bg-gray-100/60 rounded-2xl h-300 w-[450px] p-8">
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
        <button class="border bg-black mt-4 font-bold hover:-translate-y-1 text-white hover:text-black hover:scale-110 hover:bg-white duration-300 px-4 py-3 transition ease-in-out delay-150 rounded-3xl flex">
        Download CV
        <img src="../assets/download.svg" 
             alt="Here"
             class="ml-2 w-6 h-6">
        </button>
      </div>
    </div>
    <div class="px-10"></div>
    <div class="text-white flex">hello</div>
    <!-- Right side div for image -->
    <!-- <div class="absolute top-4 right-1 h-full border w-[500px]">
      <img src="https://us.images.westend61.de/0000474903pw/portrait-of-young-man-in-front-of-grey-background-RHF000408.jpg" alt="profile image" class="h-80 w-72 object-cover ml-10 mt-40 rounded-2xl">
      <div class="absolute bottom-6 right-0 w-72 h-80 bg-gray-500 p-2 rounded-2xl">
        behind
    </div>
  </div> -->
  </div>
</template>


<!-- Add Download CV Button 
SVG -> CV needs to be modified 
Also repair the overaly -->