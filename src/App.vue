<template>
  <div id="main" class="relative font-manrope text-primary">
    <Modal :data="dataProject" :is-active="isActive" @close-modal="closeModal"/>
    <NavBar @jump-to-section="handleJumpToSection"/>
    <main id="wrapper" class="bg-light-gray">
      <div id="content" class="flex flex-col">
        <Home id="landing"/>
        <About id="about"/>
        <Skill id="skill"/>
        <Project id="projects" @send-project="getProject"/>
        <Experience id="exp"/>
        <Sertified />
        <Footer />
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import About from './components/About.vue';
import Home from './components/Home.vue';
import NavBar from './components/NavBar.vue';
import Skill from './components/Skill.vue';

import { ScrollSmoother } from "gsap/ScrollSmoother";
import Project from './components/Project.vue';
import Experience from './components/Experience.vue';
import Sertified from './components/Sertified.vue';
import Footer from './components/Footer.vue';
import Modal from './components/util/Modal.vue';

const dataProject = ref(null)
const isActive = ref(false)

let scrollSmoother = null;

const closeModal = (data)=>{
  isActive.value = data
}
const getProject = (data) => {   
  dataProject.value = data

  if (data) {
    isActive.value = !isActive.value
  }
}

const handleJumpToSection = (sectionId) => {
  
  if (scrollSmoother) {
    // Use ScrollSmoother's scrollTo method for smooth scrolling
    scrollSmoother.scrollTo(`#${sectionId}`, true, "top top");
  } else {
    // Fallback to native smooth scroll
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}

onMounted(() => {
  scrollSmoother = ScrollSmoother.create({
    wrapper: '#wrapper',
    content: '#content',
    smooth: 1,
    effects: true,
  });
});
</script>
