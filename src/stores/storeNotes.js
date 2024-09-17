import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    setDoc,
    updateDoc
} from "firebase/firestore";

import { defineStore } from "pinia"
import { db } from "@/js/firebase"
import { useStoreAuth } from "./storeAuth";

let notesCollectionRef = null;
let notesCollectionQuery = null;
let unsubscribeGetNotes = null;

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [],
            loading: false
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
        init() {
            const { user } = useStoreAuth();
            notesCollectionRef = collection(db, 'users', user.id, 'notes');
            notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));
            this.getNotes();
        },

        async getNotes() {
            this.loading = true;
            unsubscribeGetNotes = onSnapshot(notesCollectionQuery, (querySnapshot) => {
                const notes = []
                querySnapshot.forEach((doc) => {
                    const note = {
                        id: doc.id,
                        content: doc.data().content,
                        date: doc.data().date,
                    }
                    notes.push(note);
                });
                this.notes = notes;
            }, error => {
                console.log('error.message', error);
            });
            this.loading = false;
        },

        clearNotes() {
            this.notes = [];
            if (unsubscribeGetNotes) unsubscribeGetNotes(); //- Unsubscribe from any active listener
        },

        async addNote(content) {
            const date = new Date().getTime() + '';
            const text = content.trim();
            const docRef = await addDoc(notesCollectionRef, {
                date,
                content: text
            });
        },

        async deleteNote(id) {
            await deleteDoc(doc(notesCollectionRef, id))
        },

        async updateNote(id, content) {
            await updateDoc(doc(notesCollectionRef, id), {
                content
            });
        }
    }
})