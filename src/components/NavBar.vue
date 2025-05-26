<template>
    <nav class="z-50 h-fit fixed inset-0 bg-white/50 backdrop-blur-sm">
        <div class="flex flex-row justify-between items-center p-4">
            <!-- Logo -->
            <div class="z-1 w-full" id="logo">
                <h1 class="text-3xl font-black">RHMN</h1>
            </div>
            <button
                class="relative flex flex-col justify-center items-center w-10 h-10 z-1 cursor-pointer lg:hidden"
                @click="showNav">
                <!-- Garis 1 -->
                <span class="absolute w-full h-2 rounded transition-all duration-300 transform"
                    :class="isNav ? 'rotate-45 translate-y-0 bg-light-gray' : '-translate-y-2.5 bg-primary'"></span>
                 <!-- Garis 2 -->
                <span class="w-full h-1 rounded transition-all duration-300"
                    :class="isNav ? 'scale-0' : 'scale-100 bg-primary'"></span>
                 <!-- Garis 3 -->
                <span class="absolute w-full h-2 rounded transition-all duration-300 transform"
                    :class="isNav ? '-rotate-45 translate-y-0 bg-light-gray' : 'translate-y-2.5 bg-primary'"></span>
            </button>
             <div class="fixed bg-primary w-full h-screen inset-0 box-border px-4 flex flex-col pt-10 lg:static lg:bg-transparent lg:h-full lg:p-0"
                v-show="isNav">
                <ul class="flex flex-col gap-y-8 justify-center h-full lg:flex-row lg:gap-x-2">
                    <li v-for="(menu, i) in menus"
                        class="text-3xl py-2 group cursor-pointer flex flex-row overflow-hidden border-b lg:text-lg lg:text-center lg:border-b-0 text-focus-in text-light-gray lg:text-primary"
                        :style="{ animationDelay: animationDelay(i) }"
                        :class="i == 4 ? 'lg:border-l lg:border-r' : 'lg:border-l'" 
                        @click="jumpToSection(menu.path)">
                        <span
                            class="inline-block shrink-0 w-full -translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500 lg:min-w-18">{{ menu.name }}</span>
                        <span
                            class="inline-block shrink-0 w-full -translate-x-full group-hover:translate-x-0 group-hover:opacity-0 transition-all duration-500 lg:min-w-18">{{ menu.name }}</span>
                    </li>
                </ul>
                <Contact class="lg:hidden text-light-gray"/>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Contact from './util/Contact.vue'
import { SplitText } from 'gsap/SplitText'
import gsap from 'gsap'

const menus = [
    { name: 'Home', path: 'landing' },
    { name: 'About', path: 'about' },
    { name: 'Skill', path: 'skill' },
    { name: 'Projects', path: 'projects' },
    { name: 'Experience', path: 'exp' },
]

const emits = defineEmits(['jumpToSection'])

const jumpToSection = (path) => {
    // Tutup navbar mobile setelah menu diklik
    closeMobileNav()
    
    // Emit event ke parent
    return emits('jumpToSection', path)
}

const isNav = ref(false)

const updateNavVisibility = () => {
    if (window.innerWidth >= 1024) {
        isNav.value = true
    } else {
        isNav.value = false
    }
}

const showNav = () => {
    if (window.innerWidth < 1024) {
        isNav.value = !isNav.value
    }
}

const closeMobileNav = () => {
    if (window.innerWidth < 1024) {
        isNav.value = false
    }
}

const animationDelay = (i) => `${i * 120}ms`

onMounted(() => {
    const split = SplitText.create('#logo', {
        type: "chars"
    })
    gsap.from(split.chars, {
        yPercent: "random([-100,100])",
        stagger: {
            amount: 0.5,
            from: "random"
        },
        opacity: 0,
        filter: "blur(10px)"
    })
    updateNavVisibility()
    window.addEventListener('resize', updateNavVisibility)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateNavVisibility)
})
</script>