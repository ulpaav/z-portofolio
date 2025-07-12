<script setup>
  import Hero from '@/components/home/HeroSection.vue';
  import Education from '@/components/about/EducationSection.vue';
  import Skills from '@/components/about/SkillsSection.vue';
  import Projects from '@/components/projects/ProjectSection.vue';
</script>

<template>
  <div>
    <main>
      <Hero />
      <div v-animate-on-scroll><Education /></div>
      <div v-animate-on-scroll><Skills /></div>
      <div v-animate-on-scroll><Projects /></div>
    </main>
  </div>
</template>
