<script setup>
  import { RouterView } from 'vue-router';
  import TheHeader from '@/components/layout/TheHeader.vue';
  import TheFooter from './components/layout/TheFooter.vue';
</script>

<template>
  <div class="bg-gray-100 font-sans">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>


