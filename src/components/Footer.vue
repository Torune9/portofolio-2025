<template>
    <footer>
        <div class="bg-primary h-dvh px-4 grid grid-rows-2 items-center relative" id="f-wrapper">
            <Bg :hue="0" :saturation="0" :lightness="100" class="opacity-20"/>
            <h1 class="text-5xl text-light-gray flex items-center mix-blend-difference">
                <span class="block w-72 split-f">
                    Don’t Hesitate to Reach Out
                </span>
            </h1>
            <div class="flex flex-col items-end box-border">
                <h1 class="text-light-gray text-5xl text-end w-80 split-f">I’m Open to New Opportunities.</h1>
                <Contact class="text-light-gray" :classPlus="'text-3xl'" />
            </div>
        </div>
    </footer>
</template>

<script setup>
import { onMounted } from 'vue';
import Contact from './util/Contact.vue';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
import Bg from './util/Bg.vue';

onMounted(() => {
    const split = SplitText.create('.split-f', {
        type: 'line,words',
        mask: 'words'
    })

    gsap.from(split.words, {
        scrollTrigger : {
            trigger :'#f-wrapper',
            start : "top center",
        },
        y: 100,
        duration : 1
    })
})

</script>
