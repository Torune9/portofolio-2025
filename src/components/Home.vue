<template>
    <section class="px-4 lg:px-16 min-h-screen">
        <div class="min-h-screen grid">
            <div class="flex flex-col gap-y-4 box-border py-24">
                <h1 class="text-7xl lg:text-9xl split">Rahman<br>Nurhayadi</h1>
                <h2 class="text-3xl bg-soft-ivory w-max rounded-full py-2 px-4 badge">Web Developer</h2>
            </div>
            <div class="flex flex-col justify-end">
                <h3 class="text-4xl text-end lg:text-5xl split">
                    Turning ideas <br> into interactive digital products.
                </h3>
                <Contact
                    :class-plus="'flex justify-center items-center h-12 w-12 rounded-full bg-soft-ivory hover:bg-primary hover:text-soft-ivory transition-color duration-500'" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';
import Contact from './util/Contact.vue';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';

onMounted(() => {
    let split = SplitText.create(".split", {
        type: "words,lines",
        mask: "lines",
    })

    gsap.from('.badge', {
        x: -100,
        opacity: 0,
        duration: 1
    })
    gsap.from(split.lines, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    })
})

</script>
