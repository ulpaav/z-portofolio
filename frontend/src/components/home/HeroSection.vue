<script setup>
// (optional) import avatar jika dari local asset
// import avatar from '@/assets/avatar.webp'
</script>

<template>
  <section class="bg-pink-50 text-black px-6 md:px-20 py-10 pt-6 pb-4 flex md:flex-row items-center justify-between">

    <!-- Text Section -->
    <div class="space-y-6 max-w-xl w-full md:w-auto animate-slide-in-left">
      <p class="text-sm uppercase tracking-widest">Welcome to my world ✨</p>
      <h1 class="text-4xl md:text-6xl font-bold">
        Hi, I'm <span class="text-[#B6BB79]">Zulfa Meydita Rahma</span>
      </h1>
      <h2 class="text-3xl md:text-5xl font-extrabold text-pink-400">UI&amp;UX Designer</h2>
      <p class="text-lg text-black-300 leading-relaxed">
        Passionate UI/UX designer, I create intuitive and visually appealing digital experiences...
      </p>

      <!-- Buttons with animation -->
      <div class="flex gap-4 pt-4 animate-slide-in-left animation-delay-200">
        <router-link
          to="/project"
          class="bg-white text-purple-800 font-bold px-6 py-2 rounded-full shadow hover:scale-105 transition inline-block"
        >
          My Projects
        </router-link>
      </div>

      <!-- Dots with fade-in animation and staggered delay -->
      <div class="flex gap-3 mt-6">
        <span class="w-4 h-4 bg-pink-600 rounded-full animate-fade-up animation-delay-200"></span>
        <span class="w-4 h-4 bg-purple-500 rounded-full animate-fade-up animation-delay-300"></span>
        <span class="w-4 h-4 bg-blue-500 rounded-full animate-fade-up animation-delay-500"></span>
        <span class="w-4 h-4 bg-indigo-800 rounded-full animate-fade-up animation-delay-700"></span>
      </div>
    </div>

    <!-- Avatar Image with slide-in-right -->
    <div class="md:w-1/2 flex justify-end animate-slide-in-right">
      <img
        src="/src/assets/image/avatar.webp"
        alt="Avatar"
        class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
      />
      <!-- atau jika pakai lokal: :src="avatar" -->
    </div>

  </section>
</template>
