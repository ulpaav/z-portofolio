<template>
  <section
    class="relative bg-white py-16 flex items-center justify-center min-h-screen"
    data-aos="fade-up"
    data-aos-duration="1200"
  >
    <!-- Background pattern -->
    <div class="absolute inset-0">
      <img
        src="@/assets/image/bg-contact.webp"
        alt="Background Pattern"
        class="w-full h-full object-cover opacity-90 max-w-screen"
      />
    </div>

    <!-- Card -->
    <div
      class="relative z-10 bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-md w-full mx-2"
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <!-- ONLY Header Centered -->
      <div class="flex flex-col items-center justify-center mb-6">
        <img
          src="@/assets/image/green-icon.webp"
          alt="Logo"
          class="w-10 h-10 mb-2 animate-pulse"
        />
        <h2
          class="text-xl sm:text-2xl font-bold text-gray-900 text-center"
          data-aos="fade-down"
        >
          Contact Me :>
        </h2>
      </div>

      <!-- Contact Info -->
      <ul class="space-y-4 mb-6">
        <li
          class="flex items-center text-gray-800 text-sm sm:text-base"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <font-awesome-icon
            :icon="['fab', 'whatsapp']"
            style="color: #97a13b;"
            class="w-5 h-5 mr-4 sm:mr-5"
          />
          +62-8969-2153-868
        </li>
        <li
          class="flex items-center text-gray-800 text-sm sm:text-base break-all"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <font-awesome-icon
            :icon="['fas', 'envelope-open']"
            style="color: #97a13b;"
            class="w-5 h-5 mr-4 sm:mr-5"
          />
          zulfameydita@students.amikom.ac.id
        </li>
        <li
          class="flex items-center text-gray-800 text-sm sm:text-base"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <font-awesome-icon
            :icon="['fas', 'location-dot']"
            style="color: #97a13b;"
            class="w-5 h-5 mr-4 sm:mr-5"
          />
          Yogyakarta, Indonesia
        </li>
      </ul>

      <!-- Social Icons -->
      <div class="flex justify-center gap-8">
        <a
          href="https://www.instagram.com/zulvmd"
          class="hover:opacity-80 transform hover:scale-110 transition duration-300"
        >
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            style="color: #97a13b;"
            class="w-6 h-6"
          />
        </a>
        <a
          href="https://github.com/ulpaav"
          class="hover:opacity-80 transform hover:scale-110 transition duration-300"
        >
          <font-awesome-icon
            :icon="['fab', 'github']"
            style="color: #97a13b;"
            class="w-6 h-6"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Animasi pakai AOS
</script>
