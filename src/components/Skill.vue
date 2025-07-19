<template>
    <section class="px-4 lg:px-16 py-10 lg:py-24 min-h-screen">
        <div class="flex flex-col gap-y-8">
            <h1 class="text-5xl lg:text-8xl">Technology</h1>
            <div class="flex flex-col gap-y-6 cursor-pointer" id="skill-wrapper" @mouseenter="shuffleWithFlip">
                <div class="grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 h-[520px] lg:h-[360px]" ref="gridContainer">
                    <div v-for="(skill, i) in skillSet" :key="skill.name"
                        class="h-24 md:h-28 flex flex-col justify-center items-center gap-y-2 rounded-md"
                        :class="i % 2 !== 1 ? 'bg-primary text-soft-ivory' : 'bg-yellow-400 text-primary'">
                        <img :src="skill.image" :alt="skill.name" class="h-8 w-8"
                            :class="i % 2 !== 0 ? '' : 'invert'" />
                        <p>{{ skill.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, nextTick, useTemplateRef } from 'vue'

import Flip from 'gsap/Flip'

// Import icons
import htmlIcon from '@/assets/icons/html5.svg'
import cssIcon from '@/assets/icons/css.svg'
import jsIcon from '@/assets/icons/javascript.svg'
import vueIcon from '@/assets/icons/vuedotjs.svg'
import nuxtIcon from '@/assets/icons/nuxt.svg'
import tailwindIcon from '@/assets/icons/tailwindcss.svg'
import nodeIcon from '@/assets/icons/nodedotjs.svg'
import expressIcon from '@/assets/icons/express.svg'
import phpIcon from '@/assets/icons/php.svg'
import laravelIcon from '@/assets/icons/laravel.svg'
import postgresqlIcon from '@/assets/icons/postgresql.svg'
import mysqlIcon from '@/assets/icons/mysql.svg'
import gitIcon from '@/assets/icons/git.svg'
import githubIcon from '@/assets/icons/github.svg'
import gitlabIcon from '@/assets/icons/gitlab.svg'

// Skill data
const originalSkills = [
    { name: 'html', image: htmlIcon },
    { name: 'css', image: cssIcon },
    { name: 'javascript', image: jsIcon },
    { name: 'vue', image: vueIcon },
    { name: 'nuxt', image: nuxtIcon },
    { name: 'tailwind', image: tailwindIcon },
    { name: 'node', image: nodeIcon },
    { name: 'express', image: expressIcon },
    { name: 'php', image: phpIcon },
    { name: 'laravel', image: laravelIcon },
    { name: 'postgresql', image: postgresqlIcon },
    { name: 'mysql', image: mysqlIcon },
    { name: 'git', image: gitIcon },
    { name: 'github', image: githubIcon },
    { name: 'gitlab', image: gitlabIcon }
]

const skillSet = ref([...originalSkills])
const gridContainer = useTemplateRef('gridContainer')

// Shuffle logic
function shuffleArray(array) {
    return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
}

// Flip animation on hover
function shuffleWithFlip() {
    const state = Flip.getState(gridContainer.value.children)

    skillSet.value = shuffleArray(skillSet.value)
    nextTick(()=>{
        Flip.from(state, {
            duration: 0.6,
            ease: 'power2.inOut',
            absolute: true,
            stagger: 0.02
        })
    })
}

</script>
