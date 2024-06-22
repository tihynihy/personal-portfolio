<template>
  <particles-component />
  <div class="items-center justify-center flex flex-col">
    <navbar-component />
    <div class="mt-32">
      <div class="px-40 mt-[5%]">
        <div>
          <TimelineComponent :items="items">
            <!-- Your SVG content goes here -->
            <svg
              class="w-4 h-4 text-blue-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 20a10 10 0 100-20 10 10 0 000 20zm1-15v4H7v2h4v4h2v-4h4V9h-4V5h-2z"
              />
            </svg>
          </TimelineComponent>
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
        },
        {
          title: "Hackathons",
          releaseDate: "December 23, 2021",
          description:
            "Winner of the BEST 2022 Hackathon in Sarajevo | BEST Mostar Hackathon 2021.",
        },
        {
          title: "Frontend Development",
          releaseDate: "January 5, 2022",
          description:
            "Worked full time as a Vue.js developer | Figma UI/UX development",
        },
      ],
    };
  },
};
</script>
