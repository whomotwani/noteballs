<template>
    <div class="card">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
            </div>
            <div class="has-text-grey-light columns is-mobile">
                <small class="column">{{ dateFormatted }}</small>
                <small class="column has-text-right">{{ chracterLength }}</small>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink :to="`/edit/${note.id}`" class="card-footer-item">Edit</RouterLink>
            <a href="#" @click.prevent="modals.deleteNote = true" class="card-footer-item">Delete</a>
        </footer>
        <DeleteModal v-if="modals.deleteNote" v-model="modals.deleteNote" :id="note.id" />
    </div>
</template>
<script setup>
import { computed, reactive, ref } from 'vue';
import DeleteModal from './DeleteModal.vue';
import { useDateFormat } from '@vueuse/core';

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
});

const chracterLength = computed(() => {
    const length = props.note.content.length;
    const suffix = length < 2 ? 'chracter' : 'chracters';
    return `${length} ${suffix}`;
})

/**
 * Modal
 */
const modals = reactive({
    deleteNote: false
})

/**
 * Formatted Date
 */

const dateFormatted = computed(() => {
    let date = new Date(+props.note.date)
    return useDateFormat(date, 'YYYY-MM-DD @ HH:mm')
})
</script>