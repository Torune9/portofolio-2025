<template>
    <section class="my-10">
        <h1 class="text-5xl w-full py-6 px-4" id="heading">Skill</h1>
        <div class="flex flex-col gap-y-6" id="skill-wrapper">
            <div class="grid grid-cols-2 grid-rows-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 px-4">
                <!-- List Skill -->
                <div v-for="(skill, i) in skillSet" :key="skill.name"
                    class="flex items-center gap-2 h-64 justify-center image-wrapper rounded bg-primary text-soft-ivory" :data-lag="i / 5">
                    <img :src="skill.image" :alt="skill.name" class="h-8 w-8 invert" />
                    <p>{{ skill.name }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { onMounted } from 'vue'

// Frontend Icons
import htmlIcon from '@/assets/icons/html5.svg'
import cssIcon from '@/assets/icons/css.svg'
import jsIcon from '@/assets/icons/javascript.svg'
import vueIcon from '@/assets/icons/vuedotjs.svg'
import nuxtIcon from '@/assets/icons/nuxt.svg'
import tailwindIcon from '@/assets/icons/tailwindcss.svg'

// Backend Icons
import nodeIcon from '@/assets/icons/nodedotjs.svg'
import expressIcon from '@/assets/icons/express.svg'
import phpIcon from '@/assets/icons/php.svg'
import laravelIcon from '@/assets/icons/laravel.svg'
import postgresqlIcon from '@/assets/icons/postgresql.svg'
import mysqlIcon from '@/assets/icons/mysql.svg'

// Web Dev Tools Icons
import gitIcon from '@/assets/icons/git.svg'
import githubIcon from '@/assets/icons/github.svg'
import gitlabIcon from '@/assets/icons/gitlab.svg'

const skillSet = [
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

onMounted(() => {
    const imageWrapper = document.querySelectorAll('.image-wrapper')

    imageWrapper.forEach(el => {
        let setterSkew = gsap.quickTo(el,'skewY'),
        clamp = gsap.utils.clamp(-20,20)
        ScrollTrigger.create({
            trigger : el,
            onUpdate : (self)=>{
                let velocity = self.getVelocity()
                setterSkew(clamp(velocity / -50))
            },
        })

    })
})

</script>
