<template>
    <section class="px-4 my-10">
        <h1 class="text-5xl py-6">Experience</h1>
        <div>
            <div v-for="exp in experiences" class="flex flex-col gap-y-2">
                <p class="font-bold">{{ exp.date }}</p>
                <div>
                    <h1 class="text-2xl font-bold">{{ exp.role }}</h1>
                    <h2 class="text-lg">{{ exp.place }}</h2>
                </div>
                <p class="text-sm">{{ exp.description }}</p>
                <div class="space-x-4 space-y-2 text-xs">
                    <span v-for="t in exp.tech" class="inline-block bg-warm-gray rounded-full px-4 py-1 capitalize">
                        {{ t }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const experiences = [
    {
        role: 'Junior Web Developer',
        place: 'PT Intersolusi Teknologi Asia(BTS.id)',
        date: 'July 2023 - January 2024',
        description: `Develop fixed asset management system,start from developing an ERD and performing database normalization to create a well-structured database, slicing Figma designs using Vue.js to ensure a user- friendly interface, and building a REST API`,
        tech : ['vue','express','tailwind','postgre']
    }
]
</script>