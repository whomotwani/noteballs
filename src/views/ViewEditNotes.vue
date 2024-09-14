<template>
    <AddOrEditNotes v-model="noteContent" class="mb-5" ref="addOrEditNoteRef" bgColor="primary"
        placeholder="Edit note..." label="Edit note...">
        <template #controls>
            <button class="button is-link mr-2 has-background-success-dark" @click="$router.back()">
                Cancel
            </button>
            <button class="button is-link has-background-success" :disabled="!noteContent?.trim()"
                @click="handleSaveClicked">
                Save Note
            </button>
        </template>
    </AddOrEditNotes>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AddOrEditNotes from '@/components/notes/AddOrEditNotes.vue';
import { useStoreNotes } from '@/stores/storeNotes';

// router
const routes = useRoute();
const router = useRouter();

const store = useStoreNotes();
const noteContent = ref('');
noteContent.value = store.getNoteContent(routes.params.id);

const handleSaveClicked = () => {
    store.updateNote(routes.params.id, noteContent.value);
    router.push("/")
}

</script>
