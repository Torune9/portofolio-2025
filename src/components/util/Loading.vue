<template>
    <section class="section">
        <div
            class="h-dvh text-primary text-4xl md:text-5xl lg:text-6xl p-8 flex justify-center items-center flex-col text-center">
            <h1 id="hello">HELLO WORLD</h1>
            <div class="bg-primary h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20 absolute left-2 top-2 mix-blend-difference" id="b-1"/>
            <div class="bg-primary h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20 absolute right-2 bottom-2 mix-blend-difference" id="b-2"/>
            <div class="bg-primary w-full h-1" id="line"/>
            <h1 id="go">LET'S VIEW</h1>
        </div>
    </section>
</template>

<script setup>
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import { onMounted } from 'vue';

const emits = defineEmits(['loadingFinish'])

const done = ()=>{
   return emits('loadingFinish',true)
}


onMounted(() => {

    const hello = SplitText.create('#hello', {
        type: "chars",
        charsClass : "bg-primary text-white p-2 mx-1 my-1",
        mask : "chars"
    })
    const go = SplitText.create('#go', {
        type: "chars",
        charsClass : "bg-primary text-white p-2 mx-1 my-1",
        mask : "chars"
    })

    gsap.to('#line',{
        width : 0,
        duration : 7,
        borderRadius : 90
    })
    gsap.to('#b-1',{
        top : "100%",
        duration : 6,
        rotation : 180,
        borderRadius : 10
    })
    gsap.to('#b-2',{
        bottom : "100%",
        duration : 6,
        rotation : 180,
        borderRadius : 10
    })

    gsap.from(hello.chars, {
        yPercent: "random([-100,100])",
        rotation: "random([-30,30])",
        duration: 1,
        stagger: 0.1,
        opacity: 0,
        onComplete: () => {
            gsap.to(hello.chars, {
                yPercent: "random([-100,100])",
                rotation: "random([-30,30])",
                duration: 1,
                stagger: 0.1,
                opacity: 0,
            })
        }
    })

    gsap.from(go.chars, {
        yPercent: "random([-100,100])",
        rotation: "random([-45,45])",
        duration: 1,
        delay: 3,
        stagger: 0.1,
        opacity: 0,
        yoyo: true,
        onComplete: () => {
            gsap.to(go.chars, {
                xPercent: "random([-100,100])" ,
                duration: 2,
                ease : "power1.out",
                opacity: 0,
                onComplete : ()=>{
                    gsap.to('.section',{
                        backgroundColor : "black",
                        opacity : 0,
                        filter : "blur(10px)",
                        duration : 2,
                        onComplete : ()=>{
                            done()
                        }
                    })
                }
            })
        }
    })

})
</script>