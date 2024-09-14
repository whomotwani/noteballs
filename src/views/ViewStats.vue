<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of notes</td>
                    <td class="has-text-right">{{ totalNotesCount }}</td>
                </tr>
                <tr>
                    <td>Number of chracters (of all notes)</td>
                    <td class="has-text-right">{{ totalChractersCount }}</td>
                </tr>
            </tbody>
        </table>
        <input :maxlength="maxLen" type="text" v-model="loveNoteballs" class="input"
            placeholder="Do you love Noteballs?" v-autofocus>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { vAutofocus } from '@/directives/vAutofocus';
import { useWatchChracters } from '@/use/useWatchChracters';

const loveNoteballs = ref('')
const maxLen = ref(50);

const { totalNotesCount, totalChractersCount } = useStoreNotes();
useWatchChracters(loveNoteballs, maxLen.value);
</script>