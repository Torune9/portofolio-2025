<template>
    <section>
        <div class="h-dvh flex flex-col justify-center relative px-4 overflow-hidden">
            <div class="space-y-4 h-full flex flex-col justify-center">
                <h1 class="text-6xl split">Rahman Nurhayadi</h1>
                <h2 class="w-fit text-2xl bg-soft-ivory px-4 py-2 rounded-full badge">Web Developer</h2>
            </div>
            <div class="flex flex-col items-end">
                <p class="text-3xl text-end split lg:text-4xl/snug lg:w-1/2">
                    Turning ideas into interactive digital products.
                </p>
                <Contact
                    :class-plus="'flex justify-center items-center h-12 w-12 rounded-full bg-soft-ivory hover:bg-warm-gray hover:text-soft-ivory transition-color duration-500'" />
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

    gsap.from('.badge',{
        x : -100,
        opacity : 0,
        duration : 1
    })
    gsap.from(split.lines, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    })
})

</script>
