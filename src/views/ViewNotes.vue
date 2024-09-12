<template>
    <div class="notes">
        <AddOrEditNotes v-model="newNote" class="mb-5" ref="addOrEditNoteRef">
            <template #controls>
                <button class="button is-link has-background-success" @click="addNote" :disabled="!newNote?.trim()">
                    Add New Note
                </button>
            </template>
        </AddOrEditNotes>
        <Note v-for="note in notes" :key="note.id" :note="note" />
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Note from '@/components/notes/Note.vue';
import AddOrEditNotes from '@/components/notes/AddOrEditNotes.vue';

import { useStoreNotes } from '@/stores/storeNotes';
const { notes, addNote: addNoteAction } = useStoreNotes();

const newNote = ref('');
const addOrEditNoteRef = ref(null);

function addNote() {
    if (newNote.value?.trim()) {
        addNoteAction(newNote.value);
        newNote.value = '';
        addOrEditNoteRef.value.focusTextarea();
    }
}

</script>