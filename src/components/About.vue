<template>
    <section class="p-4 lg:px-16 py-10 lg:py-24 min-h-screen">
        <div class="flex flex-col gap-y-6 gap-x-20 py-2 md:flex-row lg:justify-between" id="about-wrapper">
            <!-- Text Section -->
            <div class="grid lg:grid-rows-2 gap-2">
                <h1 class="text-5xl w-full py-2 lg:text-8xl self-center ">About Me</h1>
                <p class="lg:indent-4 text-justify">
                    I’m a fresh graduate in Information Technology, having completed my degree in November 2024. I'm
                    passionate
                    about <span class="font-bold">building impactful and efficient web applications</span>, with a strong focus on
                    modern
                    JavaScript technologies. I specialize in using <span class="font-bold">Vue.js</span> for frontend development and
                    <span class="font-bold">Express.js</span> for backend services. Additionally, I have working knowledge of
                   <span class="font-bold"> PHP and Laravel</span>, allowing me to adapt to various tech stacks. I'm eager to grow as
                    a
                    developer, collaborate with others, and contribute to creating user-centered digital experiences.
                </p>
            </div>

            <!-- Image Section -->
            <div class="h-80 w-full overflow-hidden bg-warm-gray relative group  md:w-80 lg:w-1/2 lg:h-[500px] md:shrink-0"
                id="img-wrapper">
                <img src="@/assets/img/me.png" alt="profile-image"/>
            </div>
        </div>
    </section>
</template>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { onMounted, ref } from 'vue';

const isTouched = ref(false); // digunakan untuk menyentuh di mobile

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    const skewSetter = gsap.quickTo('#img-wrapper', 'skewY');
    const clamp = gsap.utils.clamp(-10, 10);

    ScrollTrigger.create({
        trigger: '#img-wrapper',
        onUpdate: (self) => {
            const velocity = self.getVelocity();
            skewSetter(clamp(velocity / -200));
        },
    });
});
</script>
