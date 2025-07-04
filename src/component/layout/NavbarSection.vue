<template>
  <div class="bg-[#ffffff] py-2 px-6 mx-auto my-4 max-w-7xl">
    <nav
      class="bg-[#B6BB79] py-3 px-6 mx-auto my-4 max-w-7xl rounded-full shadow-lg flex items-center justify-between"
    >
      <!-- Logo -->
      <h1 class="text-xl font-bold text-white">MyPortfolio</h1>

      <!-- Menu Tengah -->
      <ul class="flex gap-3 text-sm font-medium mx-auto">
        <li>
          <router-link
            to="/"
            class="text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#F297A0] focus:bg-[#F297A0]"
            active-class="bg-[#F297A0]"
          >HOME</router-link>
        </li>
        <li>
          <router-link
            to="/about"
            class="text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#F297A0] focus:bg-[#F297A0]"
            active-class="bg-[#F297A0]"
          >ABOUT</router-link>
        </li>
        <li>
          <router-link
            to="/project"
            class="text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#F297A0] focus:bg-[#F297A0]"
            active-class="bg-[#F297A0]"
          >PROJECT</router-link>
        </li>
      </ul>

      <!-- Contact di kanan dengan background tetap -->
      <router-link
        to="/contact"
        class="text-white bg-[#F297A0] px-4 py-2 rounded-full font-medium"
      >CONTACT</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavbarSection',
};
</script>
