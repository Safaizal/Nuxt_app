<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps({
    error: Object as () => NuxtError,
})
</script>

<template>
    <section class="flex flex-col items-center justify-center h-screen gap-4">
        <h1 class="text-6xl font-bold text-red-800">{{ error?.statusCode }}</h1> 
        <p class="text-xl text-gray-600">{{ error?.statusMessage }}</p>
        <NuxtLink to="/" class="bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-900 transition-colors">Go Back Home</NuxtLink>
    </section>
</template>