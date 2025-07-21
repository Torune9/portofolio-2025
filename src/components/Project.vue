<template>
    <section class="px-4 lg:px-16 py-10 lg:py-24 min-h-screen relative">
        <div class="flex flex-col gap-y-8">
            <!-- Title -->
            <h1 class="text-5xl lg:text-8xl" id="p-heading">Projects</h1>
            <!-- Wrapper -->
            <div class="grid gap-8 md:grid-cols-2">
                <!-- Project -->
               <div v-for="p in projects" :key="p.name" class="flex flex-col gap-y-4">
                <!-- Image -->
                    <div class="w-full rounded-lg overflow-hidden shadow-sm cursor-pointer" @click="sendProject(p)">
                        <img :src="p.image" alt="project-image" class="w-full h-full object-bottom">
                    </div>
                    <!-- Info -->
                    <div class="flex flex-row">
                       <div class="w-full space-y-4">
                         <h1 class="capitalize font-semibold text-3xl">
                            {{ p.name }}
                        </h1>
                        <h3>
                            {{ p.year }}
                        </h3>
                       </div>
                       <button class="h-10 w-10 shrink-0" v-if="p.link">
                            <a :href="p.link" target="_blank"
                                class="bg-primary text-soft-ivory hover:bg-light-gray transition-color hover:text-primary duration-500 h-full w-full rounded-full flex justify-center items-center">
                                <i class="pi pi-arrow-up-right"></i>
                            </a>
                        </button>
                        <p v-else class="bg-red-700 flex items-center text-center text-xs rounded-md h-max py-1 px-2 text-soft-ivory">
                           Deactivate
                        </p>
                    </div>
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

const emits = defineEmits(['sendProject'])

const sendProject = (data)=>{
    console.log(data);
     
    emits('sendProject',data)
}

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
</script>
