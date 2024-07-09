<template>
  <particles-component />
  <div class="items-center justify-center flex flex-col">
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
          img: "https://www.ius.edu.ba/sites/default/files/gbb-uploads/ius-logo-buyuk_0.png",
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
          img: "https://media.licdn.com/dms/image/C560BAQHseJJu4jzCnQ/company-logo_200_200/0/1657526675314/puzzles_it_logo?e=1727308800&v=beta&t=xBpmiqI60HLkMx0JNN8oUS24fW6fXvsl6MMMUMO9i0I",
        },
      ],
    };
  },
};
</script>
