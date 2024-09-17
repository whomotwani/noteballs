<template>
    <div class="notes">
        <AddOrEditNotes v-model="newNote" class="mb-5" ref="addOrEditNoteRef" placeholder="Add note...">
            <template #controls>
                <button class="button is-link has-background-success" @click="addNote" :disabled="!newNote?.trim()">
                    Add New Note
                </button>
            </template>
        </AddOrEditNotes>
        <progress v-if="notesLoading" class="progress is-small is-success" max="100" />
        <template v-else>
            <Note v-for="note in notes" :key="note.id" :note="note" />
        </template>
        <div v-if="!notes.length" class="is-size-4 has-text-centered has-text-grey-light py-6 is-family-monospace">
            No Notes here yet...
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Note from '@/components/notes/Note.vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { useWatchChracters } from '@/use/useWatchChracters';
import AddOrEditNotes from '@/components/notes/AddOrEditNotes.vue';
import { storeToRefs } from 'pinia';

const store = useStoreNotes()
const { notes } = storeToRefs(store);
const { addNote: addNoteAction, loading: notesLoading } = store;

const newNote = ref('');
const addOrEditNoteRef = ref(null);

function addNote() {
    if (newNote.value?.trim()) {
        addNoteAction(newNote.value);
        newNote.value = '';
        addOrEditNoteRef.value.focusTextarea();
    }
}

useWatchChracters(newNote);
</script>