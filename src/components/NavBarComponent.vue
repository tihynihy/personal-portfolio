<template>
  <nav class="glass mx-4 md:mx-8 lg:mx-16 rounded-2xl border border-white/20">
    <div class="flex items-center justify-center gap-6 md:gap-8 lg:gap-12 py-4 px-6">
      <div class="flex items-center space-x-1 md:space-x-2">
        <router-link to="/" class="nav-link">
          <button class="nav-button">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            <span class="hidden sm:inline">Home</span>
          </button>
        </router-link>
        
        <router-link to="/tech" class="nav-link">
          <button class="nav-button">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
            <span class="hidden sm:inline">Tech</span>
          </button>
        </router-link>
        
        <router-link to="/roadmap" class="nav-link">
          <button class="nav-button">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            <span class="hidden sm:inline">Roadmap</span>
          </button>
        </router-link>
        
        <router-link to="/achievements" class="nav-link">
          <button class="nav-button">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
            </svg>
            <span class="hidden sm:inline">Achievements</span>
          </button>
        </router-link>
        
        <router-link to="/contact" class="nav-link">
          <button class="nav-button">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span class="hidden sm:inline">Contact</span>
          </button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  text-decoration: none;
}

.nav-button {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: white;
  font-weight: 500;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.nav-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  transition: left 0.3s ease;
  z-index: -1;
}

.nav-button:hover::before {
  left: 0;
}

.nav-button:hover {
  transform: translateY(-2px);
  color: #e2e8f0;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
}

.nav-button:active {
  transform: translateY(0);
}

/* Active route styling */
.router-link-active .nav-button {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  color: #e2e8f0;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
}

@media (max-width: 640px) {
  .nav-button {
    padding: 0.5rem 0.75rem;
  }
}
</style> 
  