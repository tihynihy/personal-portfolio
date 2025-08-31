<template>
  <div class="min-h-screen py-16 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          My <span class="gradient-text">Tech Stack</span>
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A comprehensive collection of technologies, frameworks, and tools I've worked with 
          throughout my software engineering journey.
        </p>
      </div>

      <!-- Tech Grid -->
      <div class="px-4 md:px-8">
        <GridComponent :items="items" />
      </div>
    </div>
  </div>
</template>

<script>
import GridComponent from '../components/GridComponent.vue';

export default {
  name: 'TechView',
  components: {
    GridComponent
  },
  data() {
    return {
      items: [
        { 
          text: 'Laravel', 
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png',
          category: 'Backend'
        },
        { 
          text: 'Vue.js', 
          img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
          category: 'Frontend'
        },
        { 
          text: 'Java', 
          img: 'https://github.com/devicons/devicon/raw/master/icons/java/java-original-wordmark.svg',
          category: 'Backend'
        },
        { 
          text: 'Flutter', 
          img: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/flutter/flutter-original.svg',
          category: 'Mobile'
        },
        { 
          text: 'PostgreSQL', 
          img: 'https://github.com/devicons/devicon/raw/master/icons/postgresql/postgresql-original-wordmark.svg',
          category: 'Database'
        },
        { 
          text: 'Tailwind CSS', 
          img: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg',
          category: 'Frontend'
        },
        { 
          text: 'Linux', 
          img: 'https://github.com/devicons/devicon/raw/master/icons/linux/linux-original.svg',
          category: 'DevOps'
        },
        { 
          text: 'Vite', 
          img: 'https://github.com/devicons/devicon/raw/master/icons/vitejs/vitejs-original.svg',
          category: 'Build Tools'
        },
        { 
          text: 'Livewire', 
          img: 'https://github.com/devicons/devicon/raw/master/icons/livewire/livewire-original.svg',
          category: 'Backend'
        },
        { 
          text: 'Figma', 
          img: 'https://github.com/devicons/devicon/raw/master/icons/figma/figma-original.svg',
          category: 'Design'
        },
        { 
          text: 'Git', 
          img: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original.svg',
          category: 'Version Control'
        },
        { 
          text: 'Postman', 
          img: 'https://github.com/devicons/devicon/raw/master/icons/postman/postman-original.svg',
          category: 'API Testing'
        },
      ]
    };
  }
}
</script>
