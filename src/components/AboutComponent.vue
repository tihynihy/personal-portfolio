<template>
  <div
    v-if="showProfile"
    class="mt-6 gap-2 flex flex-col px-10 pb-10 pt-4 text-white bg-gray-800 rounded-xl border border-white"
  >
    <div class="flex gap-4">
      <span class="pi pi-user mt-1" />
      <span>Nihad Jusovic</span>
    </div>
    <div class="flex gap-4">
      <span class="pi pi-home mt-1" />
      <span>Sarajevo, BiH</span>
    </div>
    <div class="flex gap-4">
      <span class="pi pi-book" />
      <span class="text-xs">Software Engineering Student @IUS</span>
    </div>
    <div class="flex gap-4">
      <span class="pi pi-desktop mt-1" />
      <span>Software Engineer @Puzzles IT</span>
    </div>
  </div>
</template>

<script>
import "primeicons/primeicons.css";

export default {
  data() {
    return {
      showProfile: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showProfile = true;
    }, 2000);
  },
};
</script>

