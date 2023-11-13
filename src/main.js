import { createApp } from 'vue'
import './style.css'
import NavBar from './components/NavBar.vue';
import AvatarComponent from './components/AvatarComponent.vue';
import ParticlesComponent from './components/ParticlesComponent.vue';
import Particles from 'vue3-particles'
import AboutComponent from './components/AboutComponent.vue';
import TerminalComponent from './components/TerminalComponent.vue';
import App from './App.vue'

const app = createApp(App)

app.component('navbar', NavBar);
app.component('avatar', AvatarComponent);
app.component('particles-component', ParticlesComponent);
app.component('about-component', AboutComponent); 
app.component('terminal-component',TerminalComponent);
  app.use(Particles)
  app.mount('#app')

