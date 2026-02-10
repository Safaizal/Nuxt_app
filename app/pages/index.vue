<script setup lang="ts">
definePageMeta({
    layout: "default"
})
</script>
<template>
    <main>
        <section class="bg-[#fff8f8]">
            <div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
                <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
                    <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
                        Master the Kitchen with Ease: Unleash Your Inner Chef Today!
                    </h1>
                    <p class="text-xl lg:text-2xl mb-8 text-balance">
                        Discover recipes helping you to find the easiest way to cook.
                    </p>
                    <button class="bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-900 transition-colors">Browse Recipes</button>
                </div>
                <div class="flex-1 order-1 lg:order-2">
                    <NuxtImg sizes="xs:100vw sm:667px" src="/nuxt-course-hero.png" format="webp" densities="x1"
                        alt="" />
                </div>
            </div>
        </section>
    </main>
</template>

<!-- We need to give the file name as index in order to make it readable by nuxt -->