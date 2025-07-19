<template>
    <section class="px-4 lg:px-16 py-10 lg:py-8 min-h-screen">
        <div class="flex flex-col gap-y-24">
            <h1 class="text-5xl lg:text-8xl">Experience</h1>
            <div class="grid lg:grid-cols-2 gap-2 lg:gap-4" v-for="exp in experiences">
                <div class="flex flex-row gap-x-4">
                    <h1 class="slr text-3xl border h-max p-2 bg-primary text-soft-ivory rounded-md">
                       {{ exp.job }}
                    </h1>
                    <div>
                        <h2 class="text-4xl lg:text-5xl">{{ exp.role }}</h2>
                        <h3 class="pt-2 lg:text-2xl">{{ exp.place }}</h3>
                        <h4 class="pt-2">{{ exp.date }}</h4>
                        <p class="pt-6 text-justify">
                            {{ exp.description }}
                        </p>
                        <div class="flex flex-wrap gap-2 pt-4">
                            <div v-for="t in exp.tech" class="px-4 py-1 bg-yellow-400 rounded-full">
                                {{ t }}
                            </div>
                        </div>
                    </div>
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
        tech: ['vue', 'express', 'tailwind', 'postgre'],
        job : 'internship'
    }
]
</script>
