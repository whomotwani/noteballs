<template>
    <div class="edit-note">
        <div class="p-4 card">
            <div class="field">
                <div class="control">
                    <textarea ref="newNoteRef" class="textarea" v-model="newNote" placeholder="Add a new note"
                        @keypress="onEnter" autofocus>
                    </textarea>
                </div>
            </div>
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button class="button is-link has-background-success" @click="addNote" :disabled="!newNote?.trim()">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style></style>