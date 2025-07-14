import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import animateOnScroll from './directives/animateOnScroll';

// Import FontAwesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import FontAwesome component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import specific icons
import { faWhatsapp, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen, faLocationDot } from '@fortawesome/free-solid-svg-icons'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

// Configure axios for development only
if (import.meta.env.DEV) {
    axios.defaults.baseURL = 'http://localhost:3000'
}

AOS.init({
  once: false,
  mirror: true,
  duration: 800,
})
onMounted(() => {
  AOS.refresh() // pastikan AOS aware dengan komponen baru
})

// Add icons to the library
library.add(faWhatsapp, faInstagram, faGithub, faEnvelopeOpen, faLocationDot)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.directive('animate-on-scroll', animateOnScroll);
app.use(router)
app.mount('#app')
