import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewEditNotes from '@/views/ViewEditNotes.vue'
import ViewAuth from '@/views/ViewAuth.vue'

import { useStoreAuth } from '@/stores/storeAuth'

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

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(async (to, from) => {
    const { user } = useStoreAuth();
    if (!user.id && to.name !== 'auth') {
        return {
            name: "auth"
        }
    }
    if (user.id && to.name === 'auth') {
        return false;
    }
});

export {
    router
};