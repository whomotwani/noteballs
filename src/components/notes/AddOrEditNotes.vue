<template>
    <div class="edit-note">
        <div class="p-4 card">
            <div class="field">
                <div class="control">
                    <textarea ref="textareaRef" class="textarea" placeholder="Add a new note" autofocus
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

const props = defineProps({
    modelValue: {
        type: String,
        required: true
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