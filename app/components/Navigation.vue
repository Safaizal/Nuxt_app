<script setup>
</script>

<template>
    <header class="p-4">
        <nav class="flex flex-row container justify-between">
            <NuxtLink to="/" class="flex gap-1 items-center">
                <!-- <NuxtImg height="56px" width="56px" format="webp" src="/check-icon-check-mark-icon-vector.jpg"/> -->
                <Icon name="fxemoji:potoffood" class="w-10 h-10 text-red-800 mb-2 mr-2" />
                <span class="font-Montserrat text-red-800 font-bold text-2xl">Recipe App</span>
            </NuxtLink>
            <ul class="flex flex-row gap-4">
                <li>
                    <NuxtLink to="/" class="font-bold">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" class="font-bold">about</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>