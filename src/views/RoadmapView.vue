<template>
  <div class="min-h-screen py-16 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          My <span class="gradient-text">Journey</span>
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A timeline of my professional development and key milestones in my software engineering career.
        </p>
      </div>

      <!-- Timeline Section -->
      <div class="px-4 md:px-8">
        <TimelineComponent :items="items" />
      </div>
    </div>
  </div>
</template>

<script>
import TimelineComponent from "../components/TimelineComponent.vue";

export default {
  name: 'RoadmapView',
  components: {
    TimelineComponent,
  },
  data() {
    return {
      items: [
        {
          title: "University Basics",
          releaseDate: "December 2, 2021",
          description: "Started my journey in coding with the basics of programming, algorithms, and software development principles.",
          img: "https://www.ius.edu.ba/sites/default/files/gbb-uploads/ius-logo-buyuk_0.png",
          category: "Education"
        },
        {
          title: "Hackathons",
          releaseDate: "December 23, 2021",
          description: "Winner of the BEST 2022 Hackathon in Sarajevo | BEST Mostar Hackathon 2021. Developed innovative solutions and collaborated with talented developers.",
          img: "https://api.itkarijera.ba/api/cms/documentfile/download/4109",
          category: "Competition"
        },
        {
          title: "Frontend Development",
          releaseDate: "January 5, 2022",
          description: "Worked full time as a Vue.js developer | Figma UI/UX development. Built responsive web applications and created intuitive user interfaces.",
          img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
          category: "Professional"
        },
        {
          title: "SquadUp - Co-Founder",
          releaseDate: "March 15, 2022",
          description: "Co-founded SquadUp, a startup developing a Flutter mobile app for sports community social media platform. Led mobile development, user experience design, and product strategy for connecting sports enthusiasts.",
          img: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/flutter/flutter-original.svg",
          category: "Entrepreneurship"
        },
        {
          title: "BHPost Office - C# Developer",
          releaseDate: "June 1, 2022",
          description: "Worked as a C# developer at BHPost Office, developing enterprise-level applications and backend systems. Contributed to postal service software solutions and database management systems.",
          img: "https://github.com/devicons/devicon/raw/master/icons/csharp/csharp-original.svg",
          category: "Enterprise"
        },
        {
          title: "ClubLink - Solo Founder",
          releaseDate: "September 1, 2022",
          description: "Founded ClubLink as a solo founder, developing a comprehensive Flutter-based club management system. Built end-to-end solutions for club operations, member management, and administrative tools.",
          img: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/flutter/flutter-original.svg",
          category: "Solo Entrepreneurship"
        },
      ],
    };
  },
};
</script>
