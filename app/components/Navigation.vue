<script setup>
</script>

<template>
    <header class="p-4">
        <nav class="flex flex-row container justify-between">
            <NuxtLink to="/" class="flex gap-1 items-center">
                <NuxtImg height="56px" width="56px" format="webp" src="/check-icon-check-mark-icon-vector.jpg"/>
                <span class="font-Montserrat text-red-800">Recipe App</span>
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