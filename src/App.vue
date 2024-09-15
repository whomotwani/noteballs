<template>
  <Navbar />
  <main class="container is-max-desktop px-2 py-4">
    <RouterView />
  </main>
</template>

<script setup>
// imports
import Navbar from '@/components/layout/Navbar.vue'
import { useStoreNotes } from './stores/storeNotes';
import { onMounted } from 'vue';
const { getNotes } = useStoreNotes();

onMounted(() => {
  getNotes();
})
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>