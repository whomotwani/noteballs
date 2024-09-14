import { defineStore } from "pinia"

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [],
        }
    },

    getters: {
        getNoteContent: (state) => {
            return (id) => {
                return state.notes.filter(i => i.id === id)[0]?.content
            }
        },
        totalNotesCount: (state) => state.notes.length,
        totalChractersCount: state => state.notes.reduce((prev, curr) => prev += curr.content.length, 0)
    },

    actions: {
        addNote(content) {
            const id = new Date().getTime() + '';
            const text = content.trim();
            this.notes.unshift({ id, content });
        },

        deleteNote(id) {
            const index = this.notes.findIndex(note => note.id === id);
            if (index > -1) {
                this.notes.splice(index, 1)
            }
        },

        updateNote(id, content) {
            const index = this.notes.findIndex(note => note.id === id);
            this.notes[index].content = content;
        }
    }
})