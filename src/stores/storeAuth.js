import { defineStore } from "pinia"
import { auth } from "@/js/firebase"

import {
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import { useStoreNotes } from "./storeNotes";

export const useStoreAuth = defineStore('storeAuth', {
    state: () => {
        return {
            user: {}
        }
    },

    getters: {
        isAuthenticated(state) {
            return state.user.id
        }
    },

    actions: {
        init() {
            const { init: initNotes, clearNotes } = useStoreNotes()
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user.id = user.uid;
                    this.user.email = user.email;
                    this.router.push("/");
                    initNotes()
                } else {
                    this.user = {};
                    clearNotes();
                    this.router.replace("/auth")
                }
            });
        },
        
        registerUser({ email, password }) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCreds) => {
                })
                .catch((error) => {
                    console.log(error.code, error.message)
                })
        },

        logout() {
            signOut(auth)
                .then(() => {
                    // Sign-out successful.
                    console.log("User logged out");

                }).catch((error) => {
                    // An error happened.
                    console.log("Something went wrong", error);
                });
        },

        loginUser({ email, password }) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('Signed in', user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log('Error while signing in', error);
                });
        }
    }
})