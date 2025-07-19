import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText,Flip);

const app = createApp(App)

app.mount('#app')
