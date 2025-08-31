<template>
  <div class="min-h-screen py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          Let's <span class="gradient-text">Connect</span>
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
        </p>
      </div>

      <!-- Contact Content -->
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div class="card glass-hover p-8">
            <h2 class="text-2xl font-bold text-white mb-6">Get in Touch</h2>
            
            <!-- Contact Methods -->
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="contact-icon">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold">Email</h3>
                  <a href="mailto:nihad.jusovich@gmail.com" class="text-gray-300 hover:text-white transition-colors">
                    nihad.jusovich@gmail.com
                  </a>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="contact-icon">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold">Location</h3>
                  <p class="text-gray-300">Sarajevo, Bosnia and Herzegovina</p>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="contact-icon">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold">Availability</h3>
                  <p class="text-gray-300">Open to new opportunities</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="card glass-hover p-8">
            <h2 class="text-2xl font-bold text-white mb-6">Follow Me</h2>
            <div class="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/nihad-jusovi%C4%87-16788a226/"
                target="_blank"
                class="social-link-large"
              >
                <div class="social-icon-large">
                  <img src="../assets/linkedin.svg" alt="LinkedIn" class="w-8 h-8" />
                </div>
                <span class="text-white font-medium">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/tihynihy" 
                target="_blank"
                class="social-link-large"
              >
                <div class="social-icon-large">
                  <img src="../assets/github.svg" alt="GitHub" class="w-8 h-8" />
                </div>
                <span class="text-white font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="card glass-hover p-8">
          <h2 class="text-2xl font-bold text-white mb-6">Send a Message</h2>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-white font-medium mb-2">Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="form-input"
                placeholder="Your name"
              />
            </div>

            <div>
              <label for="email" class="block text-white font-medium mb-2">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="form-input"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label for="subject" class="block text-white font-medium mb-2">Subject</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                class="form-input"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label for="message" class="block text-white font-medium mb-2">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="6"
                class="form-textarea"
                placeholder="Tell me more about your project or opportunity..."
              ></textarea>
            </div>

            <button type="submit" class="btn-primary w-full py-4" :disabled="isSubmitting">
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            </button>
          </form>

          <!-- Success/Error Messages -->
          <div v-if="message" :class="messageClass" class="mt-4 p-4 rounded-lg">
            {{ message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const message = ref('')
const messageType = ref('') // 'success' or 'error'

const messageClass = computed(() => {
  return messageType.value === 'success' 
    ? 'bg-green-500/20 border border-green-500/30 text-green-300'
    : 'bg-red-500/20 border border-red-500/30 text-red-300'
})

const showMessage = (text, type) => {
  message.value = text
  messageType.value = type
  setTimeout(() => {
    message.value = ''
    messageType.value = ''
  }, 5000)
}

const handleSubmit = async () => {
  isSubmitting.value = true
  message.value = ''
  
  try {
    // Option 1: EmailJS (requires setup)
    // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    //   from_name: form.value.name,
    //   from_email: form.value.email,
    //   subject: form.value.subject,
    //   message: form.value.message,
    // }, 'YOUR_USER_ID')

    // Option 2: Simple email link (fallback)
    const mailtoLink = `mailto:nihad.jusovich@gmail.com?subject=${encodeURIComponent(form.value.subject)}&body=${encodeURIComponent(`Name: ${form.value.name}\nEmail: ${form.value.email}\n\nMessage:\n${form.value.message}`)}`
    
    // Open email client
    window.open(mailtoLink)
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    showMessage('Thank you! Your email client should open with a pre-filled message. Please send it to complete your inquiry.', 'success')
    
  } catch (error) {
    console.error('Error sending message:', error)
    showMessage('Sorry, there was an error sending your message. Please try again or email me directly at nihad.jusovich@gmail.com', 'error')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-icon {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667eea;
  transition: all 0.3s ease;
}

.contact-icon:hover {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
  border-color: rgba(102, 126, 234, 0.5);
  transform: translateY(-2px);
}

.social-link-large {
  display: flex;
  align-items: center;
  space-x: 3;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link-large:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
}

.social-icon-large {
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: rgba(102, 126, 234, 0.5);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}
</style>