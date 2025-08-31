<template>
  <div class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <!-- Main Content Container -->
    <div class="max-w-4xl mx-auto text-center">
      <!-- Hero Section -->
      <div class="mb-16">
        <div class="hero-badge mb-8">
          <span class="badge-text">👋 Welcome to my portfolio</span>
        </div>
        
        <h1 class="hero-title mb-6">
          Hello, I'm <span class="gradient-text">Nihad</span>
        </h1>
        
        <p class="hero-subtitle mb-8">
          Software Engineer & Startup Founder
        </p>
      </div>

      <!-- Main Content Card -->
      <div class="main-card">
        <div class="card-content">
          <!-- About Section -->
          <div class="about-section mb-12">
            <h2 class="section-title mb-6">About Me</h2>
            <p class="about-text">
              I'm a Software Engineering graduate from 
              <a href="https://www.ius.edu.ba/en" target="_blank" class="link">IUS University</a>
              with a diverse background spanning startups and enterprise environments. I've co-founded and led multiple startups, 
              including SquadUp and ClubLink, while also gaining valuable experience in enterprise development at BHPost Office. 
              My expertise covers full-stack development and mobile applications, with a focus on creating 
              scalable, user-centric applications that drive business value.
            </p>
          </div>

          <!-- Social Links Section -->
          <div class="social-section">
            <h3 class="section-subtitle mb-6">Connect With Me</h3>
            <div class="social-links">
              <a
                href="https://www.linkedin.com/in/nihad-jusovi%C4%87-16788a226/"
                target="_blank"
                class="social-link linkedin"
              >
                <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/tihynihy" 
                target="_blank"
                class="social-link github"
              >
                <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
              
              <a 
                href="mailto:nihad.jusovich@gmail.com"
                class="social-link email"
              >
                <svg class="social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No longer need the isOpen ref since we removed the CV modal
</script>

<style scoped>
.hero-badge {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 50px;
  backdrop-filter: blur(10px);
}

.badge-text {
  color: #a8b2d1;
  font-weight: 500;
  font-size: 0.875rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #a8b2d1;
  font-weight: 400;
}

.main-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
}

.main-card:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-5px);
  box-shadow: 0 35px 70px rgba(0, 0, 0, 0.35);
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 1rem;
}

.about-text {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #a8b2d1;
  text-align: left;
}

.link {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.link:hover {
  color: #764ba2;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.social-icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
  }
  
  .main-card {
    padding: 2rem;
  }
  
  .social-links {
    flex-direction: column;
    align-items: center;
  }
  
  .social-link {
    width: 100%;
    max-width: 200px;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .main-card {
    padding: 1.5rem;
  }
}
</style>
