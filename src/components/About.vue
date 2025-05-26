<template>
    <section class="bg-soft-ivory p-4 my-10">
        <div class="flex flex-col gap-y-6 gap-x-4 py-2 items-center md:flex-row lg:justify-between" id="about-wrapper">
            <div class="space-y-4">
                <h1 class="text-5xl w-full py-2">About Me</h1>
                <p>
                    I’m a fresh graduate in Information Technology, having completed my degree in November 2024. I'm
                    passionate about <strong>building impactful and efficient web applications</strong>, with a strong
                    focus
                    on modern JavaScript technologies. I specialize in using <strong>Vue.js</strong> for frontend
                    development and <strong>Express.js</strong> for backend services. Additionally, I have working
                    knowledge
                    of <strong>PHP and Laravel</strong>, allowing me to adapt to various tech stacks. I'm eager to grow
                    as a
                    developer, collaborate with others, and contribute to creating user-centered digital experiences
                </p>
            </div>
            <div class="h-96 w-80 overflow-hidden bg-warm-gray group md:w-80 md:h-96 lg:w-1/2 lg:h-[500px] md:shrink-0"
                id="img-wrapper">
                <img src="@/assets/img/me.png" alt="profile-image"
                    class="grayscale-100 blur-xs group-hover:grayscale-[0px] group-hover:blur-none transition duration-500 w-full h-full object-cover object-top">
            </div>
        </div>
    </section>
</template>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';

onMounted(() => {

    let skewSetter = gsap.quickTo('#img-wrapper', 'skewY'),
        clamp = gsap.utils.clamp(-10, 10)
    ScrollTrigger.create({
        trigger: '#img-wrapper',
        onUpdate: (self) => {
            let velocity = self.getVelocity()
            skewSetter(clamp(velocity / -200))
        },
    })
})
</script>