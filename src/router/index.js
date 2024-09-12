import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import EditNotes from '@/views/EditNotes.vue'

const routes = [
    {
        path: '/',
        name: 'notes',
        component: ViewNotes
    },
    {
        path: '/edit/:id',
        name: 'edit note',
        component: EditNotes
    },
    {
        path: '/stats',
        name: 'stats',
        component: ViewStats
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})
