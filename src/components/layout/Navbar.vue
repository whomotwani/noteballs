<template>
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
        <div class="container is-max-desktop px-2">
            <div class="navbar-brand">
                <div class="navbar-item is-size-4 is-family-monospace">
                    <RouterLink to="/" class="has-text-dark">
                        Noteballs
                    </RouterLink>
                </div>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                    :class="showMobileNav && 'is-active'" data-target="navbarBasicExample"
                    @click.prevent="toggleMobileNav" ref="navbarBurgerRef">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu" :class="showMobileNav && 'is-active'" ref="navbarMenuRef">
                <div class="navbar-end">
                    <RouterLink to="/" class="navbar-item" active-class="is-active">
                        Home
                    </RouterLink>
                    <RouterLink to="/stats" class="navbar-item" active-class="is-active">
                        Stats
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
// imports
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { onClickOutside } from '@vueuse/core'

// mobile navbar
const showMobileNav = ref(false)
const toggleMobileNav = () => { showMobileNav.value = !showMobileNav.value }

const navbarMenuRef = ref(null);
const navbarBurgerRef = ref(null);

onClickOutside(navbarMenuRef, event => {
    showMobileNav.value = false;
}, {
    ignore: [navbarBurgerRef]
})

const router = useRouter();
router.beforeEach(() => {
    showMobileNav.value = false;
});
</script>

<style>
@media (max-width: 1023px) {
    .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;
    }
}
</style>