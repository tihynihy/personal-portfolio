<template>
  <footer class="glass mt-16 mx-4 md:mx-8 lg:mx-16 rounded-2xl border border-white/20">
    <div class="px-6 py-8">
      <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <!-- Copyright -->
        <div class="text-center md:text-left">
          <p class="text-gray-300 text-sm">
            © {{ currentYear }} Nihad Jusovic. All rights reserved.
          </p>
          <p class="text-gray-400 text-xs mt-1">
            Built with Vue.js & Tailwind CSS
          </p>
        </div>

        <!-- Social Links -->
        <div class="flex items-center space-x-4">
          <a 
            href="https://www.linkedin.com/in/nihad-jusovi%C4%87-16788a226/"
            target="_blank"
            class="footer-social-link"
            title="LinkedIn"
          >
            <img src="../assets/linkedin.svg" alt="LinkedIn" class="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/tihynihy" 
            target="_blank"
            class="footer-social-link"
            title="GitHub"
          >
            <img src="../assets/github.svg" alt="GitHub" class="w-5 h-5" />
          </a>
          <a 
            href="mailto:nihad.jusovich@gmail.com"
            class="footer-social-link"
            title="Email"
          >
            <img src="../assets/mail.svg" alt="Email" class="w-5 h-5" />
          </a>
        </div>

        <!-- Back to Top -->
        <button 
          @click="scrollToTop"
          class="back-to-top"
          title="Back to top"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.footer-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
  color: #a8b2d1;
}

.footer-social-link:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
}

.back-to-top {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 8px;
  color: #a8b2d1;
  transition: all 0.3s ease;
  cursor: pointer;
}

.back-to-top:hover {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
  border-color: rgba(102, 126, 234, 0.5);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

@media (max-width: 768px) {
  .footer-social-link,
  .back-to-top {
    width: 2rem;
    height: 2rem;
  }
  
  .footer-social-link img,
  .back-to-top svg {
    width: 1rem;
    height: 1rem;
  }
}
</style>
