<template>
    <nav
        class="z-50 left-1/2 -translate-x-1/2 fixed shadow-sm p-3 top-2 max-lg:top-4/5 rounded-full bg-white/50 backdrop-blur-lg w-full overflow-scroll scroll-hidden max-md:w-[80%] lg:w-max max-lg:w-4/5 max-sm:w-80">
        <ul class="inline-flex w-full gap-x-4">
            <li v-for="menu in menus" :key="menu.path"
                class="w-28 rounded-full shrink-0 text-center p-2 transition-colors duration-300 cursor-pointer" :class="{
                    'bg-primary text-white': activeSection === menu.path,
                    'hover:bg-primary hover:text-soft-ivory': activeSection !== menu.path
                }" @click="jumpToSection(menu.path)">
                {{ menu.name }}
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const menus = [
    { name: 'Home', path: 'landing' },
    { name: 'About', path: 'about' },
    { name: 'Skill', path: 'skill' },
    { name: 'Projects', path: 'projects' },
    { name: 'Experience', path: 'exp' },
]

const activeSection = ref('landing')

const emits = defineEmits(['jumpToSection'])

const jumpToSection = (path: string) => {
    emits('jumpToSection', path)
}

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeSection.value = entry.target.id
                }
            })
        },
        {
            root: null,
            threshold: 0.5
        }
    )
    menus.forEach((menu) => {
        const section = document.getElementById(menu.path)
        if (section) {
            observer.observe(section)
        }
    })
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
