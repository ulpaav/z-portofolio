<script setup>
  import Navbar from '@/components/NavbarSection.vue';
  import Hero from '@/components/HeroSection.vue';
  import Education from '@/components/EducationSection.vue';
  import Skills from '@/components/SkillsSection.vue';
  import Projects from '@/components/ProjectSection.vue';
  import Contact from '@/components/ContactSection.vue';
</script>

<template>
  <div>
    <Navbar />
    <main>
      <Hero />
      <div v-animate-on-scroll><Education /></div>
      <div v-animate-on-scroll><Skills /></div>
      <div v-animate-on-scroll><Projects /></div>
      <div v-animate-on-scroll><Contact /></div>
    </main>
  </div>
</template>
