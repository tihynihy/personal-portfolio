<template>
  <particles-component />
  <div class="items-center justify-center flex flex-col">
    <navbar-component />
    <div class="mt-[10%]">
      <div class="px-40 mt-[5%]">
        <div>
          <TimelineComponent :items="items" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TimelineComponent from "../components/TimelineComponent.vue";

export default {
  components: {
    TimelineComponent,
  },
  data() {
    return {
      items: [
        {
          title: "University Basics",
          releaseDate: "December 2, 2021",
          description: "Started my journey in coding with the basics.",
          img: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/java/java-original-wordmark.svg",
        },
        {
          title: "Hackathons",
          releaseDate: "December 23, 2021",
          description:
            "Winner of the BEST 2022 Hackathon in Sarajevo | BEST Mostar Hackathon 2021.",
          img: "https://api.itkarijera.ba/api/cms/documentfile/download/4109",
        },
        {
          title: "Frontend Development",
          releaseDate: "January 5, 2022",
          description:
            "Worked full time as a Vue.js developer | Figma UI/UX development",
          img: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vuejs/vuejs-original.svg",
        },
      ],
    };
  },
};
</script>
