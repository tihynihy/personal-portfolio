import { createApp } from 'vue'
import router from './router';
import './style.css'
import NavBarComponent from './components/NavBarComponent.vue';
import AvatarComponent from './components/AvatarComponent.vue';
import ParticlesComponent from './components/ParticlesComponent.vue';
import Particles from 'vue3-particles'
import AboutComponent from './components/AboutComponent.vue';
import TerminalComponent from './components/TerminalComponent.vue';
import TimelineComponent from './components/TimelineComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import ContactView from './views/ContactView.vue';
import TypeWriteComponent from './components/TypeWriteComponent.vue';
import ToastComponent from './components/ToastComponent.vue';
import HomeViewComponent from './views/HomeView.vue';
import BaseView from './views/BaseView.vue';
import App from './App.vue'

const app = createApp(App)

app.component('navbar-component', NavBarComponent);
app.component('avatar', AvatarComponent);
app.component('particles-component', ParticlesComponent);
app.component('about-component', AboutComponent); 
app.component('timeline-component', TimelineComponent);
app.component('terminal-component',TerminalComponent);
app.component('footer-component', FooterComponent);
app.component('typewrite-effect', TypeWriteComponent);
app.component('contact-view', ContactView);
app.component('toast-component', ToastComponent);
app.component('homeview-component', HomeViewComponent);
app.component('baseview-component', BaseView);
  app.use(Particles)
  app.use(router)
  app.mount('#app')

