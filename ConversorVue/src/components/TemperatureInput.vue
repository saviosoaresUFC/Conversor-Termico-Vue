<script setup lang="ts">
import { computed } from 'vue';

// 'defineProps' para tipar as propriedades que o componente recebe.
const props = defineProps<{
    unit: 'celsius' | 'fahrenheit' | 'kelvin';
    label: string;
    symbol: string;
    modelValue: number | string; // Valor atual da temperatura
    errorMessage?: string; // Mensagem de erro
}>();

// 'defineEmits' para tipar o evento que o componente emite.
const emit = defineEmits<{
    (e: 'update:modelValue', value: number | string): void;
}>();

// "setter" e "getter" para a propriedade modelValue, 
// que permite usar v-model com este componente.
const inputValue = computed({
    get: () => props.modelValue,
    set: (val: number | string) => {
        // Quando o utilizador digita algo, emitimos o evento 'update:modelValue'
        // para que o componente pai atualize a sua variável reativa.
        emit('update:modelValue', val);
    }
});

</script>

<template>
    <div class="input-group" :class="{ 'has-error': errorMessage }">
        <label :for="unit">{{ label }}:</label>
        <input :type="'number'" :id="unit" :placeholder="`Digite em ${symbol}`" v-model="inputValue">
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
</template>