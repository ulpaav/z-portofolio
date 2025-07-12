<template>
  <div class="bg-transpara  nt px-4 sm:px-6 mx-auto max-w-7xl">
    <nav
      :class="[
        'z-50 py-3 px-4 sm:px-6 mx-auto shadow-lg transition-all duration-300',
        isScrolled ? 'fixed top-0 left-0 right-0 bg-[#B6BB79] rounded-none' : 'mt-4 bg-[#B6BB79] rounded-full'
      ]"
    >
      <!-- Grid Layout untuk Desktop -->
      <div class="grid grid-cols-3 items-center w-full">
        <!-- Logo - Kiri -->
        <div class="justify-self-start">
          <h1 class="text-lg sm:text-xl font-bold text-white">MyPortfolio</h1>
        </div>

        <!-- Menu - Tengah (Visible pada desktop) -->
        <div class="justify-self-center md:block">
          <ul class="flex gap-2 lg:gap-3 text-sm font-medium">
            <li>
              <router-link
                to="/"
                class="text-white px-3 lg:px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#F297A0]"
                active-class="bg-[#F297A0]"
              >HOME</router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="text-white px-3 lg:px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#F297A0]"
                active-class="bg-[#F297A0]"
              >ABOUT</router-link>
            </li>
            <li>
              <router-link
                to="/project"
                class="text-white px-3 lg:px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#F297A0]"
                active-class="bg-[#F297A0]"
              >PROJECT</router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Button (Desktop) / Burger Menu (Mobile) - Kanan -->
        <div class="justify-self-end flex items-center">
          <!-- Desktop Contact Button -->
          <router-link
            to="/contact"
            class="hidden md:block text-white bg-[#F297A0] px-3 lg:px-4 py-2 rounded-full font-medium text-sm hover:bg-[#e8869c] transition-colors duration-300"
          >CONTACT</router-link>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-[#F297A0] focus:ring-opacity-50 rounded-lg p-2"
            :class="{ 'bg-[#F297A0]': isMobileMenuOpen }"
            aria-label="Toggle mobile menu"
          >
            <svg
              class="w-6 h-6 transition-transform duration-300"
              :class="{ 'rotate-90': isMobileMenuOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

    </nav>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
      @click="closeMobileMenu"
    ></div>

    <!-- Mobile Menu -->
    <div
      :class="[
        'md:hidden fixed right-0 top-0 h-full w-64 sm:w-72 bg-[#B6BB79] shadow-xl transform transition-transform duration-300 ease-in-out z-50',
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      ]"
    >
      <!-- Mobile Menu Header -->
      <div class="flex items-center justify-between p-4 border-b border-[#a5aa6b]">
        <h2 class="text-lg font-bold text-white">Menu</h2>
        <button
          @click="closeMobileMenu"
          class="text-white hover:bg-[#F297A0] rounded-full p-2 transition-colors duration-300"
          aria-label="Close mobile menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Items -->
      <div class="py-4">
        <router-link
          to="/"
          class="block text-white px-6 py-3 transition-colors duration-300 hover:bg-[#F297A0] border-b border-[#a5aa6b]"
          active-class="bg-[#F297A0]"
          @click="closeMobileMenu"
        >
          <span class="font-medium">HOME</span>
        </router-link>
        <router-link
          to="/about"
          class="block text-white px-6 py-3 transition-colors duration-300 hover:bg-[#F297A0] border-b border-[#a5aa6b]"
          active-class="bg-[#F297A0]"
          @click="closeMobileMenu"
        >
          <span class="font-medium">ABOUT</span>
        </router-link>
        <router-link
          to="/project"
          class="block text-white px-6 py-3 transition-colors duration-300 hover:bg-[#F297A0] border-b border-[#a5aa6b]"
          active-class="bg-[#F297A0]"
          @click="closeMobileMenu"
        >
          <span class="font-medium">PROJECT</span>
        </router-link>
        <router-link
          to="/contact"
          class="block text-white px-6 py-3 transition-colors duration-300 hover:bg-[#F297A0]"
          active-class="bg-[#F297A0]"
          @click="closeMobileMenu"
        >
          <span class="font-medium">CONTACT</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarSection',
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    // Prevent body scroll when mobile menu is open
    this.$watch('isMobileMenuOpen', (newVal) => {
      if (newVal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
    // Clean up body overflow
    document.body.style.overflow = '';
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 20;
    },
    handleResize() {
      // Close mobile menu when resizing to desktop
      if (window.innerWidth >= 768) {
        this.isMobileMenuOpen = false;
      }
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
  },
};
</script>

<style scoped>
/* Untuk menghindari lonjakan saat fixed */
nav {
  width: 100%;
  max-width: 100%;
}

/* Memastikan grid layout bekerja dengan baik */
.grid-cols-3 {
  grid-template-columns: 1fr 2fr 1fr;
}

/* Responsive grid adjustments */
@media (min-width: 768px) {
  .grid-cols-3 {
    grid-template-columns: 1fr 2fr 1fr;
  }
}

@media (max-width: 767px) {
  .grid-cols-3 {
    grid-template-columns: 1fr auto;
  }

  .justify-self-center {
    display: none;
  }
}

/* Fixed navbar responsive adjustments */
@media (max-width: 640px) {
  nav.fixed {
    left: 0;
    right: 0;
    margin-left: 0;
    margin-right: 0;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

/* Tablet adjustments */
@media (min-width: 768px) and (max-width: 1023px) {
  .grid-cols-3 {
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr);
  }

  nav ul {
    gap: 0.5rem;
  }

  nav ul li a {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  }
}

/* Large screen optimizations */
@media (min-width: 1024px) {
  .grid-cols-3 {
    grid-template-columns: 1fr 2fr 1fr;
  }
}

/* Very small screens (iPhone SE, etc.) */
@media (max-width: 375px) {
  .bg-transparent {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  nav {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  h1 {
    font-size: 1rem;
  }

  .w-64 {
    width: 85vw;
  }
}

/* Landscape phone adjustments */
@media (max-width: 767px) and (orientation: landscape) {
  .h-full {
    height: 100vh;
  }
}

/* Smooth transitions for all interactions */
* {
  transition: all 0.3s ease;
}

/* Ensure proper z-index stacking */
.z-50 {
  z-index: 50;
}

.z-40 {
  z-index: 40;
}

/* Prevent horizontal scroll on mobile */
@media (max-width: 767px) {
  body {
    overflow-x: hidden;
  }
}
</style>
