<template>
  <section id="pendidikan" class="relative py-24 bg-white overflow-hidden">
    <!-- Gambar Bunga Atas -->
    <img
      src="/src/assets/image/border-pink.webp"
      alt="Bunga Atas"
      class="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-xl z-0"
    />

    <!-- Gambar Bunga Bawah -->
    <img
      src="/src/assets/image/border-pink.webp"
      alt="Bunga Bawah"
      class="absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-180 w-full max-w-screen-xl z-0"
    />

    <!-- Konten Pendidikan -->
    <div class="container mx-auto px-4 relative z-10">
      <!-- Judul -->
      <div class="text-center mb-12">
        <h2
          class="text-4xl md:text-4xl font-bold text-gray-800"
          data-aos="fade-up"
        >
          Riwayat Pendidikan
        </h2>
        <div
          class="w-24 h-1 bg-[#F297A0] mx-auto mt-4 rounded-full"
          data-aos="zoom-in"
          data-aos-delay="100"
        ></div>
      </div>

      <!-- Garis Tengah -->
      <div
        class="absolute left-1/2 top-32 transform -translate-x-1/2 h-[calc(100%-8rem)] w-1 bg-gray-300"
        data-aos="fade-down"
        data-aos-delay="200"
      ></div>

      <!-- Timeline -->
      <div class="flex flex-col items-center space-y-20 relative">
        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="relative flex flex-col items-center"
          data-aos="fade-up"
          :data-aos-delay="index * 200"
        >
          <!-- Titik -->
          <div
            class="w-8 h-8 bg-[#F297A0] rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 animate-[pulse_2s_ease-in-out_infinite]"
          ></div>

          <!-- Card -->
          <div
            class="bg-white shadow-xl rounded-xl p-6 max-w-md w-full border-l-4 border-[#B6BB79] mt-[-1rem] text-center"
          >
            <p class="text-[#B6BB79] font-semibold">{{ edu.period }}</p>
            <h3 class="text-2xl font-bold text-gray-800">{{ edu.institution }}</h3>
            <p class="text-gray-600">{{ edu.major }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const educationHistory = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('/api/education')
    educationHistory.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>

