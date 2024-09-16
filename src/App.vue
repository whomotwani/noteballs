<template>
  <Navbar />
  <main class="container is-max-desktop px-2 py-4">
    <RouterView />
  </main>
</template>

<script setup>
// imports
import Navbar from '@/components/layout/Navbar.vue'
import { useStoreAuth } from './stores/storeAuth';
import { onMounted } from 'vue';
const { init } = useStoreAuth();

onMounted(() => {
  init();
})
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>