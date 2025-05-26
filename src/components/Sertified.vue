<template>
    <section>
        <h1 class="text-5xl py-8 px-4">Sertified</h1>
        <div>
            <div v-for="(img,i) in images" class="h-dvh relative overflow-hidden wrapper-certif bg-primary">
                <h1 class="text-soft-ivory text-9xl p-2 absolute bottom-0 right-0 item">{{ i }}</h1>
                <div class="absolute top-1/2 -translate-y-1/2 certificate w-1/2">
                    <img :src="img" alt="image-sertif" :data-speed="i == 0 ? 0.8 : i / 10">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import be from '@/assets/img/sertified/be.png'
import fe from '@/assets/img/sertified/fe.png'
import bts from '@/assets/img/sertified/bts.id.png'
import btsNilai from '@/assets/img/sertified/bts.id_nilai.png'
import f1 from '@/assets/img/sertified/fase1.png'
import f2 from '@/assets/img/sertified/fase2.png'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const images = [be, fe, bts, btsNilai, f1, f2]

onMounted(()=>{
    let imgSertified = document.querySelectorAll('.certificate')
    imgSertified.forEach((el)=>{
        ScrollTrigger.create({
            trigger : '.wrapper-certif',
        })
    })
})
</script>
