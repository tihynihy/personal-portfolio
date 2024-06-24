<template>
  <particles-component />
  <div class="items-center justify-center flex flex-col">
    <navbar-component />
    <div class="px-40 mt-[10%] md:mt-[2%]">
      <div>
        <GridComponent :items="items" />
      </div>
    </div>
  </div>
</template>
<script>
import GridComponent from '../components/GridComponent.vue';

export default {
  name: 'App',
  components: {
    GridComponent
  },
  data() {
    return {
      items: [
        { text: '', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png' },
        { text: '', img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png' },
        { text: '', img: 'https://github.com/devicons/devicon/raw/master/icons/java/java-original-wordmark.svg' },
        { text: '', img: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/flutter/flutter-original.svg' },
        { text: '', img: 'https://github.com/devicons/devicon/raw/master/icons/postgresql/postgresql-original-wordmark.svg' },
        { text: '', img: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg' },
        { text: '', img: 'https://github.com/devicons/devicon/raw/master/icons/linux/linux-original.svg' },
        { text: '', img: 'https://github.com/devicons/devicon/raw/master/icons/vitejs/vitejs-original.svg' },
        { text: '', img: 'https://github.com/devicons/devicon/raw/master/icons/livewire/livewire-original.svg' },
        { text: '', img: 'https://github.com/devicons/devicon/raw/master/icons/figma/figma-original.svg' },
        { text: '', img: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original.svg' },
        { text: '', img: 'https://github.com/devicons/devicon/raw/master/icons/postman/postman-original.svg' },
      ]
    };
  }
}
</script>
