<script setup>
import SectionTitle from '/src/components/layout/TitleSection.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Data kosong dulu
const skills = ref([])

// Fetch ke server pas komponen mount
onMounted(async () => {
  try {
    console.log('Fetching skills data...')
    const response = await axios.get('/api/skills')
    console.log('Skills response:', response.data)
    skills.value = response.data
  } catch (error) {
    console.error('Skills fetch error:', error.response?.data || error.message)
  }
})
</script>

<template>
  <section id="skill" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />

      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        <div
          v-for="(skill, index) in skills"
          :key="skill.name"
          class="relative group cursor-pointer"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- Card + Border wrapper -->
          <div
            class="relative bg-white p-6 rounded-xl shadow-md text-center overflow-hidden transition-transform duration-500 group-hover:-translate-y-2"
          >
            <!-- Snake Neon Border -->
            <svg
              class="absolute inset-0 w-full h-full z-0 pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="glow" height="200%" width="200%" x="-50%" y="-50%">
                  <feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="#a5aa6b" />
                  <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#a5aa6b" />
                  <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#a5aa6b" />
                </filter>
              </defs>
              <rect
                x="0"
                y="0"
                width="100"
                height="100"
                rx="12"
                ry="12"
                fill="none"
                stroke="#a5aa6b"
                stroke-width="2"
                stroke-dasharray="400"
                stroke-dashoffset="400"
                filter="url(#glow)"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="400"
                  to="0"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </rect>
            </svg>

            <!-- Card Content -->
            <h3 class="text-lg font-semibold text-[#D36A7E] mb-1 relative z-10">{{ skill.name }}</h3>
            <p class="text-gray-500 text-sm relative z-10">{{ skill.level }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
