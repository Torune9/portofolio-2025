<template>
    <nav class="z-50 left-1/2 -translate-x-1/2 fixed shadow-sm p-3 top-2 max-lg:top-4/5 rounded-full bg-white/50 backdrop-blur-lg w-full overflow-scroll scroll-hidden max-md:w-[80%] lg:w-max max-lg:w-4/5 max-sm:w-80">
        <ul class="inline-flex w-full gap-x-4">
            <li v-for="menu in menus" class="w-28 rounded-full shrink-0 text-center p-2 hover:bg-primary hover:text-soft-ivory transition-colors duration-300 cursor-pointer" @click="jumpToSection(menu.path)">
                {{ menu.name }}
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
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


<style scoped>
.scroll-hidden { 
    scrollbar-width: none;
}
</style>
