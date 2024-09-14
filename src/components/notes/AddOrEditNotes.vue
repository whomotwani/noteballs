<template>
    <div class="edit-note">
        <div class="p-4 card" :class="`has-background-${bgColor}-dark`">
            <label class="label" v-if="label">{{ label }}</label>
            <div class="field">
                <div class="control">
                    <textarea maxlength="100" v-autofocus ref="textareaRef" class="textarea" :placeholder="placeholder" autofocus
                        :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
                    </textarea>
                </div>
            </div>
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <slot name="controls"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus';

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: 'Type something...'
    },
    label: {
        type: String,
    }
})

const emit = defineEmits(['update:modelValue'])

const textareaRef = ref(null);
const focusTextarea = () => textareaRef.value.focus()

defineExpose({
    focusTextarea
})
</script>

<style></style>