<template>
    <Transition name="modal">
        <div class="h-screen w-screen flex justify-center items-center fixed z-50 px-4 box-border backdrop-blur-sm"
            @click="closeModal" v-if="isActive">
            <div
                class="bg-white/50 backdrop-blur-md min-h-80 p-4 sm:p-8 shadow-lg rounded-md flex flex-col gap-y-4 sm:w-3/4 md:w-2/3 lg:w-1/2">
                <h1 class="text-6xl capitalize font-bold">
                    {{ data.name }}
                </h1>
                <div class="flex-1 flex flex-col justify-center gap-y-4">
                    <p class="text-lg">{{ data.description }}</p>
                    <div class="flex flex-wrap gap-4">
                        <span class="block bg-primary text-soft-ivory text-center w-28 rounded-full p-1 text-sm"
                            v-for="t in data.tech">
                            {{ t }}
                        </span>
                    </div>
                    <div class="flex flex-row gap-x-4 justify-end">
                        <p class="bg-yellow-400 p-2 w-max rounded-full border px-4">{{ data.year }}</p>
                        <button class="h-10 w-10 shrink-0" v-if="data.link">
                            <a :href="data.link" target="_blank"
                                class="bg-primary text-soft-ivory hover:bg-red-800 transition-color duration-500 h-full w-full rounded-full flex justify-center items-center">
                                <i class="pi pi-arrow-up-right"></i>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { onMounted, onUpdated, ref, watch } from 'vue';

const props = defineProps({
    data: {
        default: null
    },
    isActive: Boolean
})

const emits = defineEmits(['closeModal'])
const closeModal = () => {
    emits('closeModal', false)
}
</script>

<style scoped>

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
