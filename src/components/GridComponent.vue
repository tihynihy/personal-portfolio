<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
    <div 
      v-for="(item, index) in items" 
      :key="index"
      class="tech-card group"
      @click="openModal(item)"
    >
      <div class="card glass-hover h-full flex flex-col items-center justify-center p-6 text-center">
        <!-- Tech Icon -->
        <div class="tech-icon-wrapper mb-4">
          <img 
            :src="item.img" 
            :alt="item.text"
            class="tech-icon" 
          />
        </div>
        
        <!-- Tech Name -->
        <h3 class="text-white font-semibold text-sm md:text-base mb-2">
          {{ item.text }}
        </h3>
        
        <!-- Category Badge -->
        <span 
          v-if="item.category"
          class="category-badge"
        >
          {{ item.category }}
        </span>

        <!-- Click indicator -->
        <div class="mt-4 flex items-center text-blue-400 text-xs">
          <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          </svg>
          Click for details
        </div>
      </div>
    </div>

    <!-- Tech Modal -->
    <teleport to="body">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        @click.self="closeModal"
      >
        <div class="tech-modal-container">
          <!-- Modal Header -->
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center space-x-4">
              <div class="tech-modal-icon-wrapper">
                <img
                  :src="selectedItem?.img"
                  :alt="selectedItem?.text"
                  class="tech-modal-icon"
                />
              </div>
              <div>
                <h2 class="text-3xl font-bold text-white">
                  {{ selectedItem?.text }}
                </h2>
                <span v-if="selectedItem?.category" class="text-lg text-gray-400">
                  {{ selectedItem.category }}
                </span>
              </div>
            </div>
            <button
              @click="closeModal"
              class="text-gray-500 hover:text-white transition-colors"
            >
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Modal Content -->
          <div class="space-y-6">
            <!-- Usage Context -->
            <div class="bg-white/5 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-white mb-4">Where I Used It</h3>
              <div class="space-y-3">
                <div v-if="selectedItem?.text === 'Laravel'" class="usage-item">
                  <span class="text-blue-400 font-medium">Backend Development</span>
                  <p class="text-gray-300">Built robust APIs and web applications with Laravel framework at Puzzles IT and Atlas d.o.o companies</p>
                </div>
                <div v-if="selectedItem?.text === 'Vue.js'" class="usage-item">
                  <span class="text-blue-400 font-medium">Frontend Development</span>
                  <p class="text-gray-300">Developed responsive single-page applications and user interfaces for personal portfolio and Puzzles IT web apps</p>
                </div>
                <div v-if="selectedItem?.text === 'Java'" class="usage-item">
                  <span class="text-blue-400 font-medium">Backend & Enterprise</span>
                  <p class="text-gray-300">Created enterprise-level applications and backend services during university studies</p>
                </div>
                <div v-if="selectedItem?.text === 'Flutter'" class="usage-item">
                  <span class="text-blue-400 font-medium">Mobile Development</span>
                  <p class="text-gray-300">Built cross-platform mobile apps for SquadUp, ClubLink, and Hackathon 2022 projects</p>
                </div>
                <div v-if="selectedItem?.text === 'PostgreSQL'" class="usage-item">
                  <span class="text-blue-400 font-medium">Database Management</span>
                  <p class="text-gray-300">Designed and managed relational databases for SquadUp, ClubLink, and Puzzles IT applications</p>
                </div>
                <div v-if="selectedItem?.text === 'Tailwind CSS'" class="usage-item">
                  <span class="text-blue-400 font-medium">Styling & Design</span>
                  <p class="text-gray-300">Used for rapid UI development and responsive design at Puzzles IT and personal portfolio</p>
                </div>
                <div v-if="selectedItem?.text === 'Linux'" class="usage-item">
                  <span class="text-blue-400 font-medium">Development Environment</span>
                  <p class="text-gray-300">Server management and development environment setup for personal projects</p>
                </div>
                <div v-if="selectedItem?.text === 'Vite'" class="usage-item">
                  <span class="text-blue-400 font-medium">Build Tool</span>
                  <p class="text-gray-300">Fast build tool for modern web development projects at Puzzles IT and personal portfolio</p>
                </div>
                <div v-if="selectedItem?.text === 'Livewire'" class="usage-item">
                  <span class="text-blue-400 font-medium">Full-Stack Development</span>
                  <p class="text-gray-300">Built dynamic web applications with Laravel Livewire for personal projects</p>
                </div>
                <div v-if="selectedItem?.text === 'Figma'" class="usage-item">
                  <span class="text-blue-400 font-medium">UI/UX Design</span>
                  <p class="text-gray-300">Created user interface designs and prototypes for Puzzles IT, SquadUp, ClubLink, and personal projects</p>
                </div>
              </div>
            </div>

            <!-- Key Projects -->
            <div class="bg-white/5 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-white mb-4">Key Projects</h3>
              <div class="space-y-3">
                <div v-if="selectedItem?.text === 'Laravel'" class="project-item">
                  <span class="text-green-400 font-medium">• Puzzles IT Backend Systems</span>
                  <span class="text-green-400 font-medium">• Atlas d.o.o Applications</span>
                </div>
                <div v-if="selectedItem?.text === 'Vue.js'" class="project-item">
                  <span class="text-green-400 font-medium">• Personal Portfolio</span>
                  <span class="text-green-400 font-medium">• Puzzles IT Web Applications</span>
                </div>
                <div v-if="selectedItem?.text === 'Flutter'" class="project-item">
                  <span class="text-green-400 font-medium">• SquadUp Mobile App</span>
                  <span class="text-green-400 font-medium">• ClubLink Mobile App</span>
                  <span class="text-green-400 font-medium">• Hackathon 2022 Project</span>
                </div>
                <div v-if="selectedItem?.text === 'Java'" class="project-item">
                  <span class="text-green-400 font-medium">• University Projects</span>
                  <span class="text-green-400 font-medium">• Algorithm Implementations</span>
                </div>
                <div v-if="selectedItem?.text === 'PostgreSQL'" class="project-item">
                  <span class="text-green-400 font-medium">• SquadUp Database</span>
                  <span class="text-green-400 font-medium">• ClubLink Database</span>
                  <span class="text-green-400 font-medium">• Puzzles IT Systems</span>
                </div>
                <div v-if="selectedItem?.text === 'Tailwind CSS'" class="project-item">
                  <span class="text-green-400 font-medium">• Puzzles IT UI Components</span>
                  <span class="text-green-400 font-medium">• Personal Portfolio Design</span>
                </div>
                <div v-if="selectedItem?.text === 'Linux'" class="project-item">
                  <span class="text-green-400 font-medium">• Personal Development Setup</span>
                  <span class="text-green-400 font-medium">• Server Management</span>
                </div>
                <div v-if="selectedItem?.text === 'Vite'" class="project-item">
                  <span class="text-green-400 font-medium">• Puzzles IT Build System</span>
                  <span class="text-green-400 font-medium">• Personal Portfolio</span>
                </div>
                <div v-if="selectedItem?.text === 'Livewire'" class="project-item">
                  <span class="text-green-400 font-medium">• Personal Web Applications</span>
                  <span class="text-green-400 font-medium">• Dynamic UI Components</span>
                </div>
                <div v-if="selectedItem?.text === 'Figma'" class="project-item">
                  <span class="text-green-400 font-medium">• Puzzles IT UI Designs</span>
                  <span class="text-green-400 font-medium">• SquadUp App Design</span>
                  <span class="text-green-400 font-medium">• ClubLink App Design</span>
                  <span class="text-green-400 font-medium">• Personal Portfolio Design</span>
                </div>
              </div>
            </div>

            <!-- Skills & Competencies -->
            <div class="bg-white/5 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-white mb-4">Skills & Competencies</h3>
              <div class="flex flex-wrap gap-2">
                <span v-if="selectedItem?.text === 'Laravel'" class="skill-tag">MVC Architecture</span>
                <span v-if="selectedItem?.text === 'Laravel'" class="skill-tag">Eloquent ORM</span>
                <span v-if="selectedItem?.text === 'Laravel'" class="skill-tag">API Development</span>
                
                <span v-if="selectedItem?.text === 'Vue.js'" class="skill-tag">Component Architecture</span>
                <span v-if="selectedItem?.text === 'Vue.js'" class="skill-tag">Vue Router</span>
                <span v-if="selectedItem?.text === 'Vue.js'" class="skill-tag">Reactive Data</span>
                
                <span v-if="selectedItem?.text === 'Flutter'" class="skill-tag">Cross-Platform</span>
                <span v-if="selectedItem?.text === 'Flutter'" class="skill-tag">State Management</span>
                <span v-if="selectedItem?.text === 'Flutter'" class="skill-tag">UI/UX Design</span>
                
                <span v-if="selectedItem?.text === 'Java'" class="skill-tag">Object-Oriented</span>
                <span v-if="selectedItem?.text === 'Java'" class="skill-tag">Spring Framework</span>
                <span v-if="selectedItem?.text === 'Java'" class="skill-tag">Enterprise Patterns</span>
                
                <span v-if="selectedItem?.text === 'PostgreSQL'" class="skill-tag">Database Design</span>
                <span v-if="selectedItem?.text === 'PostgreSQL'" class="skill-tag">SQL Optimization</span>
                <span v-if="selectedItem?.text === 'PostgreSQL'" class="skill-tag">Data Modeling</span>
                
                <span v-if="selectedItem?.text === 'Tailwind CSS'" class="skill-tag">Utility-First CSS</span>
                <span v-if="selectedItem?.text === 'Tailwind CSS'" class="skill-tag">Responsive Design</span>
                <span v-if="selectedItem?.text === 'Tailwind CSS'" class="skill-tag">Custom Components</span>
                
                <span v-if="selectedItem?.text === 'Linux'" class="skill-tag">Server Administration</span>
                <span v-if="selectedItem?.text === 'Linux'" class="skill-tag">Shell Scripting</span>
                <span v-if="selectedItem?.text === 'Linux'" class="skill-tag">DevOps</span>
                
                <span v-if="selectedItem?.text === 'Vite'" class="skill-tag">Build Optimization</span>
                <span v-if="selectedItem?.text === 'Vite'" class="skill-tag">Hot Module Replacement</span>
                <span v-if="selectedItem?.text === 'Vite'" class="skill-tag">Plugin Development</span>
                
                <span v-if="selectedItem?.text === 'Livewire'" class="skill-tag">Full-Stack Components</span>
                <span v-if="selectedItem?.text === 'Livewire'" class="skill-tag">Real-time Updates</span>
                <span v-if="selectedItem?.text === 'Livewire'" class="skill-tag">Laravel Integration</span>
                
                <span v-if="selectedItem?.text === 'Figma'" class="skill-tag">UI Design</span>
                <span v-if="selectedItem?.text === 'Figma'" class="skill-tag">Prototyping</span>
                <span v-if="selectedItem?.text === 'Figma'" class="skill-tag">Design Systems</span>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="flex justify-end mt-8">
            <button
              @click="closeModal"
              class="btn-secondary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'GridComponent',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => ([])
    }
  },
  setup() {
    const isModalOpen = ref(false)
    const selectedItem = ref(null)

    const openModal = (item) => {
      selectedItem.value = item
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
      selectedItem.value = null
    }

    return {
      isModalOpen,
      selectedItem,
      openModal,
      closeModal
    }
  }
}
</script>

<style scoped>
.tech-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.tech-card:hover {
  transform: translateY(-8px);
}

.tech-icon-wrapper {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  margin-bottom: 1rem;
}

.tech-card:hover .tech-icon-wrapper {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
}

.tech-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
  transition: all 0.3s ease;
  filter: brightness(0.9);
}

.tech-card:hover .tech-icon {
  filter: brightness(1.1);
  transform: scale(1.1);
}

.category-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #a8b2d1;
  transition: all 0.3s ease;
}

.tech-card:hover .category-badge {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
  border-color: rgba(102, 126, 234, 0.5);
  color: #e2e8f0;
}

/* Modal Styles */
.tech-modal-container {
  background: rgba(15, 15, 35, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.tech-modal-icon-wrapper {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid rgba(255, 255, 255, 0.2);
}

.tech-modal-icon {
  width: 2.5rem;
  height: 2.5rem;
  object-fit: contain;
  filter: brightness(1.1);
}

.usage-item {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border-left: 3px solid #667eea;
}

.usage-item span {
  display: block;
  margin-bottom: 0.5rem;
}

.project-item {
  padding: 0.5rem 0;
}

.skill-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(102, 126, 234, 0.2);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #a8b2d1;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: rgba(102, 126, 234, 0.3);
  border-color: rgba(102, 126, 234, 0.5);
  color: #e2e8f0;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .tech-icon-wrapper {
    width: 60px;
    height: 60px;
  }
  
  .tech-icon {
    width: 35px;
    height: 35px;
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .tech-icon-wrapper {
    width: 50px;
    height: 50px;
  }
  
  .tech-icon {
    width: 30px;
    height: 30px;
  }

  .tech-modal-container {
    padding: 1rem;
    width: 95%;
  }
}
</style>