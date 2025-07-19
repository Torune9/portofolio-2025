<template>
  <nav
    ref="menuWrapper"
    class="z-50 left-1/2 -translate-x-1/2 fixed shadow-sm p-3 top-2 max-lg:top-[85%] rounded-full bg-white/50 backdrop-blur-lg w-full overflow-scroll scroll-hidden max-md:w-[80%] lg:w-max max-lg:w-4/5 max-sm:w-80">
    <ul ref="menuList" class="inline-flex w-full gap-x-4">
      <li
        v-for="menu in menus"
        :key="menu.path"
        :ref="el => (menuRefs[menu.path] = el)"
        class="w-28 rounded-full shrink-0 text-center p-2 transition-colors duration-300 cursor-pointer"
        :class="{
          'bg-primary text-white': activeSection === menu.path,
          'hover:bg-primary hover:text-soft-ivory': activeSection !== menu.path
        }"
        @click="jumpToSection(menu.path)">
        {{ menu.name }}
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const menus = [
  { name: 'Home', path: 'landing' },
  { name: 'About', path: 'about' },
  { name: 'Skill', path: 'skill' },
  { name: 'Projects', path: 'projects' },
  { name: 'Experience', path: 'exp' },
]

const activeSection = ref('landing')
const emits = defineEmits(['jumpToSection'])

const jumpToSection = (path) => {
  const section = document.getElementById(path)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
    emits('jumpToSection', path)
  }
}

// refs untuk masing-masing item menu
const menuRefs = {}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visible.length > 0) {
        activeSection.value = visible[0].target.id
      }
    },
    {
      root: null,
      threshold: 0.02
    }
  )

  menus.forEach((menu) => {
    const section = document.getElementById(menu.path)
    if (section) {
      observer.observe(section)
    }
  })
})

// Auto-scroll menu aktif (khusus untuk layar kecil)
watch(activeSection, (newSection) => {
  const el = menuRefs[newSection]
  if (el && window.innerWidth < 768) {
    el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }
})
</script>

<style scoped>
.scroll-hidden {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scroll-hidden::-webkit-scrollbar {
  display: none;
}
</style>
