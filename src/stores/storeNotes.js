import { defineStore } from "pinia"

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
                {
                    id: '1',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi perferendis dicta aliquam accusantium earum? Tempora mollitia quidem molestiae quam commodi!'
                },
                {
                    id: '2',
                    content: 'A short note.'
                }
            ],
        }
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
        }
    }
})