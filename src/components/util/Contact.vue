<template>
    <ul class="inline-flex gap-x-6 justify-end py-4 text-2xl">
        <li v-for="contact in contacts"
            class="cursor-pointer hover:text-red-600 transition-colors duration-300 text-focus-in" :class="classPlus">
            <a :href="contact.url.includes('http') ? contact.url : `mailto:${contact.url}`">
                <i :class="contact.icon" />
            </a>
        </li>
    </ul>
</template>


<script setup>
defineProps({
    classPlus : String
})
const contacts = [
    { icon: 'pi pi-github', url: 'https://github.com/Torune9' },
    { icon: 'pi pi-linkedin', url: 'https://linkedin.com/in/rahman-nurhayadi' },
    { icon: 'pi pi-at', url: 'rahmannurhayadi@gmail.com' }
]
</script>