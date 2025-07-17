<template>
    <section class="z-20 relative px-4 bg-soft-ivory overflow-hidden my-10 p-wrapper">
        <h1 class="text-5xl py-6" id="p-heading">Projects</h1>
        <div class="grid md:grid-cols-2 gap-y-4 py-4 justify-items-center">
            <div v-for="(p, i) in projects"
                class="bg-soft-ivory p-4 rounded-md min-h-96 border flex flex-col justify-center gap-y-6 overflow-hidden project-card md:w-96">
                <div>
                    <img :src="p.image" alt="project-image" class="w-full h-full object-contain">
                </div>
                <div class="inline-flex w-full justify-between items-center">
                    <h4 class="capitalize text-2xl">{{ p.name }}</h4>
                    <p>{{ p.year }}</p>
                </div>
                <div class="flex justify-between gap-x-2 w-full items-center">
                    <p class="text-sm">{{ p.description }}</p>
                    <button class="h-10 w-10 shrink-0" v-if="p.link">
                        <a :href="p.link" target="_blank"
                            class="bg-warm-gray hover:bg-light-gray transition-colors duration-500 h-full w-full rounded-full flex justify-center items-center">
                            <i class="pi pi-arrow-up-right"></i>
                        </a>
                    </button>
                    <small v-else class="text-red-600">
                        deployment inactive
                    </small>
                </div>
                <div class="space-x-4">
                    <span v-for="t in p.tech" class="border p-1 text-sm rounded-md">{{ t }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import bq from '@/assets/img/projects/bouquet.png'
import umkm from '@/assets/img/projects/umkmconnect.png'
import lib from '@/assets/img/projects/libblion.png'
import fm from '@/assets/img/projects/foodmate.png'
import { onMounted } from 'vue'
import gsap from 'gsap'

const projects = [
    {
        name: "snf bouquet",
        year: 2025,
        description: "Self-project, an e-commerce flower sales and can already carry out purchasing simulations",
        tech: [
            'Vue',
            'Express',
            'Tailwind',
            'PostgreSQL'
        ],
        image: bq,
        link: 'https://bouquet-fe.vercel.app/'
    },
    {
        name: "Libblion",
        year: 2025,
        description: "Self-project, an online book lending application",
        tech: [
            'Vue',
            'Laravel',
            'Tailwind',
            'MYSQL'
        ],
        image: lib,
        link: null
    },
    {
        name: "Food Mate",
        year: 2024,
        description: "Self-project, a food recipe application from free API",
        tech: [
            'Vue',
            'Tailwind',
        ],
        image: fm,
        link: 'https://food-mate-sigma.vercel.app/'
    },
    {
        name: "umkm connect",
        year: 2024,
        description: "Self project, an application for managing MSME businesses and can already carry out purchasing simulations",
        tech: [
            'Vue',
            'Express',
            'Tailwind',
            'PostgreSQL'
        ],
        image: umkm,
        link: null
    },

]

onMounted(() => {
    const cards = document.querySelectorAll('.project-card')
   
    gsap.from('.p-wrapper', {
        opacity: 0,
        duration: .8,
        scrollTrigger: {
            trigger: '#p-heading',
            scrub: true,
            start: "top center",
            end: "bottom center"
        }
    })
    gsap.from('#p-heading', {
        x: -100,
        opacity: 0,
        duration: .8,
        scrollTrigger: {
            trigger: '#p-heading',
            scrub: true,
            start: "top center",
            end: "bottom center"
        }
    })

    cards.forEach((el, i) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                scrub: true,
                start: "top center",
                end: "center center"
            },
            x: i % 2 == 0 ? 100 : -100,
            duration: .5,
            opacity: 0
        })
    })


})

</script>
