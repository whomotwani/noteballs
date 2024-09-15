<template>
    <div class="tabs is-centered">
        <ul>
            <li :class="[!register && 'is-active']"><a @click.prevent="register = false">Sign In</a></li>
            <li :class="[register && 'is-active']"><a @click.prevent="register = true">Sign Up</a></li>
        </ul>
    </div>
    <div class="card column is-three-quarters mx-auto">
        <div class="card-content">
            <div class="title has-text-centered">{{ formTitle }}</div>
            <form @submit.prevent="onSubmit">
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input v-model="credentials.email" class="input" type="email"
                            placeholder="e.g. alexsmith@gmail.com">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input v-model="credentials.password" class="input" type="password"
                            placeholder="Enter your password...">
                    </div>
                </div>

                <div class="field is-grouped is-grouped-right">
                    <p class="control">
                        <button class="button is-primary">
                            {{ formTitle }}
                        </button>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';

const register = ref(false);

const formTitle = computed(() => {
    return register.value == true ? 'Sign Up' : 'Sign In'
})

const credentials = reactive({
    email: "",
    password: ""
})

const onSubmit = () => {
    if (!credentials.email || !credentials.password) {
        alert("Please enter Email and Password")
    } else {
        if (register.value) {
            console.log("Register user", credentials)
        } else {
            console.log("Log user in", credentials)
        }
    }

}
</script>

<style lang="scss" scoped></style>