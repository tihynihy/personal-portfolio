<template>
  <div class="relative">
    <!-- Timeline Line -->
    <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>
    
    <!-- Timeline Items -->
    <div class="space-y-12">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="timeline-item relative"
      >
        <!-- Timeline Dot -->
        <div class="timeline-dot" @click="openModal(item)">
          <img
            :src="item.img"
            :alt="item.title"
            class="timeline-icon"
          />
        </div>
        
        <!-- Content Card -->
        <div class="timeline-content" @click="openModal(item)">
          <div class="card glass-hover p-8">
            <!-- Header -->
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3 class="text-2xl font-bold text-white mb-2">
                  {{ item.title }}
                </h3>
                <time class="text-sm text-gray-400 font-medium">
                  {{ item.releaseDate }}
                </time>
              </div>
              <span 
                v-if="item.category"
                class="category-badge"
              >
                {{ item.category }}
              </span>
            </div>
            
            <!-- Description -->
            <p class="text-gray-300 leading-relaxed">
              {{ item.description }}
            </p>
            
            <!-- Click indicator -->
            <div class="mt-4 flex items-center text-blue-400 text-sm">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
              Click for details
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <teleport to="body">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        @click.self="closeModal"
      >
        <div class="modal-container">
          <!-- Modal Header -->
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center space-x-4">
              <div class="modal-icon-wrapper">
                <img
                  :src="selectedItem?.img"
                  :alt="selectedItem?.title"
                  class="modal-icon"
                />
              </div>
              <div>
                <h2 class="text-3xl font-bold text-white">
                  {{ selectedItem?.title }}
                </h2>
                <time class="text-lg text-gray-400">
                  {{ selectedItem?.releaseDate }}
                </time>
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
            <!-- Category Badge -->
            <div v-if="selectedItem?.category" class="flex justify-start">
              <span class="modal-category-badge">
                {{ selectedItem.category }}
              </span>
            </div>

            <!-- Detailed Description -->
            <div class="bg-white/5 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-white mb-4">Overview</h3>
              <p class="text-gray-300 leading-relaxed text-lg">
                {{ selectedItem?.description }}
              </p>
            </div>

            <!-- Additional Details -->
            <div class="bg-white/5 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-white mb-4">Key Achievements</h3>
              <ul class="space-y-3 text-gray-300">
                <li v-if="selectedItem?.title.includes('University')" class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Studied Software Engineering fundamentals and programming principles</span>
                </li>
                <li v-if="selectedItem?.title.includes('Hackathon')" class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Won multiple hackathons demonstrating problem-solving and teamwork skills</span>
                </li>
                <li v-if="selectedItem?.title.includes('Frontend')" class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Developed responsive web applications using Vue.js and modern frontend technologies</span>
                </li>
                <li v-if="selectedItem?.title.includes('SquadUp')" class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Co-founded and developed a Flutter-based social media platform for sports communities</span>
                </li>
                <li v-if="selectedItem?.title.includes('BHPost')" class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Developed enterprise-level C# applications and backend systems for postal services</span>
                </li>
                <li v-if="selectedItem?.title.includes('ClubLink')" class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Founded and developed a comprehensive Flutter-based club management system</span>
                </li>
              </ul>
            </div>

            <!-- Technologies Used -->
            <div class="bg-white/5 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-white mb-4">Technologies & Skills</h3>
              <div class="flex flex-wrap gap-2">
                <span v-if="selectedItem?.title.includes('University')" class="tech-tag">Programming Fundamentals</span>
                <span v-if="selectedItem?.title.includes('University')" class="tech-tag">Algorithms</span>
                <span v-if="selectedItem?.title.includes('University')" class="tech-tag">Data Structures</span>
                
                <span v-if="selectedItem?.title.includes('Hackathon')" class="tech-tag">Problem Solving</span>
                <span v-if="selectedItem?.title.includes('Hackathon')" class="tech-tag">Team Collaboration</span>
                <span v-if="selectedItem?.title.includes('Hackathon')" class="tech-tag">Rapid Prototyping</span>
                
                <span v-if="selectedItem?.title.includes('Frontend')" class="tech-tag">Vue.js</span>
                <span v-if="selectedItem?.title.includes('Frontend')" class="tech-tag">Figma</span>
                <span v-if="selectedItem?.title.includes('Frontend')" class="tech-tag">UI/UX Design</span>
                
                <span v-if="selectedItem?.title.includes('SquadUp')" class="tech-tag">Flutter</span>
                <span v-if="selectedItem?.title.includes('SquadUp')" class="tech-tag">Mobile Development</span>
                <span v-if="selectedItem?.title.includes('SquadUp')" class="tech-tag">Product Strategy</span>
                
                <span v-if="selectedItem?.title.includes('BHPost')" class="tech-tag">C#</span>
                <span v-if="selectedItem?.title.includes('BHPost')" class="tech-tag">.NET</span>
                <span v-if="selectedItem?.title.includes('BHPost')" class="tech-tag">Enterprise Development</span>
                
                <span v-if="selectedItem?.title.includes('ClubLink')" class="tech-tag">Flutter</span>
                <span v-if="selectedItem?.title.includes('ClubLink')" class="tech-tag">Business Management</span>
                <span v-if="selectedItem?.title.includes('ClubLink')" class="tech-tag">Solo Entrepreneurship</span>
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
  name: "TimelineComponent",
  props: {
    items: {
      type: Array,
      required: true,
      validator(value) {
        return value.every(
          (item) =>
            "title" in item &&
            "releaseDate" in item &&
            "description" in item &&
            "img" in item
        );
      },
    },
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
};
</script>

<style scoped>
.timeline-item {
  position: relative;
  padding-left: 4rem;
}

.timeline-dot {
  position: absolute;
  left: 0;
  top: 0;
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  z-index: 10;
  cursor: pointer;
}

.timeline-item:hover .timeline-dot {
  transform: scale(1.1);
  box-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
  border-color: rgba(255, 255, 255, 0.2);
}

.timeline-icon {
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  border-radius: 50%;
  background: white;
  padding: 0.25rem;
}

.timeline-content {
  transition: all 0.3s ease;
  cursor: pointer;
}

.timeline-item:hover .timeline-content {
  transform: translateX(0.5rem);
}

.category-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #a8b2d1;
  transition: all 0.3s ease;
}

.timeline-item:hover .category-badge {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
  border-color: rgba(102, 126, 234, 0.5);
  color: #e2e8f0;
}

/* Modal Styles */
.modal-container {
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

.modal-icon-wrapper {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid rgba(255, 255, 255, 0.2);
}

.modal-icon {
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
  border-radius: 50%;
  background: white;
  padding: 0.25rem;
}

.modal-category-badge {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
  border: 1px solid rgba(102, 126, 234, 0.5);
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  color: #e2e8f0;
}

.tech-tag {
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

.tech-tag:hover {
  background: rgba(102, 126, 234, 0.3);
  border-color: rgba(102, 126, 234, 0.5);
  color: #e2e8f0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .timeline-item {
    padding-left: 3rem;
  }
  
  .timeline-dot {
    width: 3rem;
    height: 3rem;
  }
  
  .timeline-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  .timeline-content .card {
    padding: 1.5rem;
  }

  .modal-container {
    padding: 1.5rem;
    width: 95%;
  }
}

@media (max-width: 480px) {
  .timeline-item {
    padding-left: 2.5rem;
  }
  
  .timeline-dot {
    width: 2.5rem;
    height: 2.5rem;
  }
  
  .timeline-icon {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  .timeline-content .card {
    padding: 1rem;
  }
  
  .timeline-content h3 {
    font-size: 1.25rem;
  }

  .modal-container {
    padding: 1rem;
  }
}
</style>
