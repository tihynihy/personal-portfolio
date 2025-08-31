<template>
  <div class="min-h-screen relative">
    <!-- Particles Background -->
    <particles-component />
    
    <!-- Main Content -->
    <div class="relative z-10">
      <!-- Navigation -->
      <div class="navbar-container sticky top-0 z-50">
        <navbar-component />
      </div>
      
      <!-- Page Content -->
      <div class="content-container">
        <router-view />
      </div>
      
      <!-- Footer -->
      <footer-component />
    </div>
  </div>
</template>

<script setup>
import NavbarComponent from './components/NavBarComponent.vue'
import ParticlesComponent from './components/ParticlesComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<style scoped>
.navbar-container {
  z-index: 1000;
  padding: 1rem 0;
}

.content-container {
  min-height: calc(100vh - 200px);
  padding: 2rem 0;
}

/* Smooth page transitions */
.router-view-enter-active,
.router-view-leave-active {
  transition: all 0.3s ease;
}

.router-view-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.router-view-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
  