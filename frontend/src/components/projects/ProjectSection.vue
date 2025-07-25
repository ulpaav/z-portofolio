<script setup>
import SectionTitle from '/src/components/layout/TitleSection.vue';
import { ref, onMounted } from 'vue'
import axios from 'axios'

const projects = ref([])

// Fallback data jika API gagal
const fallbackProjectsData = [
    {
        title: 'Website Toko Online',
        image: '@/images/website_tooko_online.webp',
        description: 'Platform e-commerce dengan fitur keranjang belanja.',
        tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
        link: '#'
    },
    {
        title: 'Aplikasi Manajemen Tugas',
        image: '@/images/project-management.webp',
        description: 'Aplikasi untuk melacak progres tugas harian.',
        tech: ['React', 'Firebase'],
        link: '#'
    },
    {
        title: 'Sistem Booking Online',
        image: '@/images/booking-online.webp',
        description: 'Aplikasi booking untuk reservasi layanan.',
        tech: ['Next.js', 'MongoDB'],
        link: '#'
    },
    {
        title: 'Dashboard Admin',
        image: '@/images/dashboard.webp',
        description: 'Dashboard admin dengan data real-time.',
        tech: ['Laravel', 'MySQL'],
        link: '#'
    }
]

onMounted(async () => {
  try {
    console.log('Fetching project data...')
    const response = await axios.get('/api/project', {
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log('Project response:', response.data)
    projects.value = response.data
  } catch (error) {
    console.error('Project fetch error:', error.response?.data || error.message)
    console.log('Using fallback data...')
    projects.value = fallbackProjectsData
  }
})
</script>

<template>
  <section id="proyek" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Project Unggulan" />
      <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="bg-gray-50 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-3"
          data-aos="fade-up"
          :data-aos-delay="index * 200"
        >
          <img
            :src="project.image"
            alt="Gambar Proyek"
            class="w-full h-56 object-cover"
            data-aos="zoom-in"
            :data-aos-delay="index * 300"
          />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="mb-4">
              <span
                v-for="t in project.tech"
                :key="t"
                class="inline-block cursor-pointer bg-[#ffdae1] text-[#7A8450] text-sm font-semibold mr-2 mb-2 px-4 py-1 rounded-full transition duration-300 hover:shadow-md hover:shadow-[#ffdae1]/70 hover:scale-105"
              >
                {{ t }}
              </span>
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#893941] font-semibold hover:underline"
            >
              Lihat Detail &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
