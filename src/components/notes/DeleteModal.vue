<template>
    <div class="modal is-active p-3">
        <div class="modal-background"></div>
        <div class="modal-card" ref="modalCardRef">
            <header class="modal-card-head">
                <p class="modal-card-title">Delete Note?</p>
                <button class="delete" aria-label="close" @click="closeModal"></button>
            </header>
            <section class="modal-card-body">
                Are you sure you want to delete this note?
            </section>
            <footer class="modal-card-foot is-justify-content-flex-end">
                <div class="buttons">
                    <button class="button" @click="closeModal">Cancel</button>
                    <button class="button is-danger" @click="deleteNote(id)">Delete</button>
                </div>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
import { onMounted, onUnmounted, ref } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';

const { deleteNote } = useStoreNotes();

/**
 * Props
 */
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    id: {
        type: String,
        required: true
    }
});

/**
 * Close modal
 */
const closeModal = () => {
    emit('update:modelValue', false);
}

/**
 * Emits
 */
const emit = defineEmits(['update:modelValue'])


// Click outside to close modal
const modalCardRef = ref(null);
onClickOutside(modalCardRef, closeModal)

const keyboardHandler = ({ key }) => {
    if (key === 'Escape') closeModal();
}

onMounted(() => {
    document.addEventListener('keyup', keyboardHandler);
});

onUnmounted(() => {
    document.removeEventListener('keyup', keyboardHandler);
})
</script>

<style lang="scss" scoped></style>