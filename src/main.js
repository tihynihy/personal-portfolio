import { createApp } from 'vue'
import './style.css'
import NavBar from './components/NavBar.vue';
import AvatarComponent from './components/AvatarComponent.vue';
import ParticlesComponent from './components/ParticlesComponent.vue';
import Particles from 'vue3-particles'
import AboutComponent from './components/AboutComponent.vue';
import TerminalComponent from './components/TerminalComponent.vue';
import TimelineComponent from './components/TimelineComponent.vue';
import HomePage from './views/HomePage.vue';
import FooterComponent from './components/FooterComponent.vue';
import ContactView from './views/ContactView.vue';
import TypeWriteComponent from './components/TypeWriteComponent.vue';
import ToastComponent from './components/ToastComponent.vue';
import App from './App.vue'

const app = createApp(App)

app.component('navbar', NavBar);
app.component('avatar', AvatarComponent);
app.component('particles-component', ParticlesComponent);
app.component('about-component', AboutComponent); 
app.component('timeline-component', TimelineComponent);
app.component('terminal-component',TerminalComponent);
app.component('homepage-component', HomePage);
app.component('footer-component', FooterComponent);
app.component('typewrite-effect', TypeWriteComponent);
app.component('contact-view', ContactView);
app.component('toast-component', ToastComponent);
  app.use(Particles)
  app.mount('#app')

