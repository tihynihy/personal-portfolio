<template>
  <particles-component />
  <div class="items-center justify-center flex flex-col">
    <navbar-component />
    <div class="mt-[5%]">
      <div class="px-40 mt-[10%]">
        <div>
          <!-- do it here -->
          <GridComponent :items="items" />
        </div>
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
        { text: 'Item 1', img: 'path/to/image1.jpg' },
        { text: 'Item 2', img: 'path/to/image2.jpg' },
        { text: 'Item 3', img: 'path/to/image3.jpg' },
        { text: 'Item 4', img: 'path/to/image4.jpg' },
        { text: 'Item 5', img: 'path/to/image5.jpg' },
        { text: 'Item 6', img: 'path/to/image6.jpg' },
        { text: 'Item 7', img: 'path/to/image7.jpg' },
        { text: 'Item 8', img: 'path/to/image8.jpg' }
      ]
    };
  }
}
</script>
