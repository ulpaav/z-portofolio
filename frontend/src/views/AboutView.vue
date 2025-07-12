<template>
  <section class="relative bg-pink-50 text-black">
    <main>
      <section class="view-section section-spacing">
        <AboutSection />
      </section>
      <section class="view-section section-spacing">
        <EducationSection />
      </section>
      <section class="view-section section-spacing">
        <SkillsSection />
      </section>
    </main>
  </section>
</template>

<script setup>
import AboutSection from '/src/components/about/AboutSection.vue';
import EducationSection from '/src/components/about/EducationSection.vue';
import SkillsSection from '/src/components/about/SkillsSection.vue';
</script>
