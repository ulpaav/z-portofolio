<template>
  <section
    class="bg-pink-50 px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-12 font-sans"
  >
    <!-- Card Style Image Section -->
    <div
      class="bg-white border border-pink-200 p-4 shadow-lg relative w-full max-w-sm"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-once="false"
    >
      <div class="relative w-full h-[350px] overflow-hidden">
        <img
          src="@/assets/image/asa.webp"
          alt="Foto Saya"
          class="w-full h-full object-cover"
        />
        <!-- Label kiri -->
        <span
          class="absolute top-4 left-0 bg-green-200 text-xs px-2 py-1 rotate-[-10deg] rounded shadow"
        >
          It's me
        </span>
        <!-- Label kanan -->
        <span
          class="absolute top-10 right-0 bg-pink-300 text-xs px-2 py-1 rotate-[10deg] rounded shadow"
        >
          myself and I
        </span>
      </div>
      <!-- Ribbon -->
      <div class="text-center mt-4">
        <img src="@/assets/image/ribbon.webp" alt="ribbon" class="w-16 mx-auto" />
      </div>
    </div>

    <!-- Bio Section -->
    <div
      class="max-w-md text-center md:text-left"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="200"
      data-aos-once="false"
    >
      <h2 class="text-xl font-bold text-pink-600 mb-1">card</h2>
      <h1 class="text-3xl font-bold text-[#B6BB79] mb-4">
        𐔌 .˚zulfa mēydita rahma. ꒱<span class="text-sm text-gray-400"
          >≽^•⩊•^≼</span
        >
      </h1>
      <p class="text-gray-700 leading-relaxed text-sm">
        Mahasiswa Teknik Informatika, Memiliki semangat besar dalam
        <strong>pengembangan web</strong> dan
        <strong>desain antarmuka</strong>. Saat ini aktif membuat portofolio
        kreatif dan ingin jadi bagian dari dunia UI/UX yang ceria!
      </p>

      <!-- Ilustrasi tambahan -->
      <div
        class="mt-4 flex flex-col items-center md:items-start"
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="400"
        data-aos-once="false"
      >
        <img src="@/assets/image/kelinci.webp" alt="icon" class="w-28" />
        <p class="text-xs text-pink-400">solo ride until I die</p>
      </div>
    </div>
  </section>
</template>
