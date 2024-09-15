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

const notesCollectionRef = collection(db, 'notes');

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
        async getNotes() {
            this.loading = true;
            const q = query(notesCollectionRef, orderBy("date", "desc"));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
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
            });
            this.loading = false;
        },

        async addNote(content) {
            const date = new Date().getTime() + '';
            const text = content.trim();

            const docRef = await addDoc(notesCollectionRef, {
                date,
                content: text
            });

            // await setDoc(doc(notesCollectionRef, id), {
            //     date,
            //     content: text
            // })
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