import { watch } from 'vue';

export function useWatchChracters(watchValue, length = 100) {
    watch(watchValue, (newValue) => {
        if (newValue.length === length) alert(`Only ${length} characters are allowed.`)
    });
}