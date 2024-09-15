import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewEditNotes from '@/views/ViewEditNotes.vue'
import ViewAuth from '@/views/ViewAuth.vue'

const routes = [
    {
        path: '/',
        name: 'notes',
        component: ViewNotes
    },
    {
        path: '/edit/:id',
        name: 'edit note',
        component: ViewEditNotes
    },
    {
        path: '/stats',
        name: 'stats',
        component: ViewStats
    },
    {
        path: '/auth',
        name: 'auth',
        component: ViewAuth
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})
