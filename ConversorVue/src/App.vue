<script setup lang="ts">
import { ref, computed } from 'vue';
import {
    toCelsius,
    toFahrenheit,
    toKelvin
} from './utils/conversions';
import TemperatureInput from './components/TemperatureInput.vue';

// 'ref' para criar uma variável reativa que guarda o estado atual
// da temperatura que o utilizador está a editar.
const currentTemperature = ref<{ value: number | string; unit: 'celsius' | 'fahrenheit' | 'kelvin' }>({
    value: '',
    unit: 'celsius'
});

// Uma propriedade computed que retorna uma mensagem de erro se a validação falhar.
const kelvinError = computed<string | undefined>(() => {
    // Se o valor atual for Kelvin, a validação é: deve ser >= 0.
    if (currentTemperature.value.unit === 'kelvin') {
        const val = parseFloat(currentTemperature.value.value as string);
        if (!isNaN(val) && val < 0) {
            return 'Kelvin não pode ser inferior a 0 (zero absoluto).';
        }
    }

    // Se o valor atual NÃO for Kelvin, precisamos convertê-lo a Kelvin para validar.
    else if (typeof currentTemperature.value.value === 'number') {
        let kelvinValue: number;

        // Converte o valor atual para Celsius
        let celsiusValue = currentTemperature.value.unit === 'celsius'
            ? currentTemperature.value.value
            : toCelsius(currentTemperature.value.value, currentTemperature.value.unit);

        // Converte o valor em Celsius para Kelvin
        kelvinValue = toKelvin(celsiusValue, 'celsius');

        if (kelvinValue < 0) {
            return 'A temperatura está abaixo do zero absoluto (0K).';
        }
    }

    return undefined;
});

// Estas funções com computed garantem que sempre que 'currentTemperature' 
// mudar, os valores de todas as escalas são recalculados automaticamente.

// Verifica se o valor atual é um número válido
const valueAsNumber = computed<number | undefined>(() => {
    const val = parseFloat(currentTemperature.value.value as string);
    return isNaN(val) ? undefined : val;
});

const celsiusValue = computed<number | string>(() => {
    const value = valueAsNumber.value;
    if (value === undefined) return '';

    // Se o erro de Kelvin estiver ativo, não converte e mostra vazio
    if (kelvinError.value) return '';

    if (currentTemperature.value.unit === 'celsius') {
        return value;
    } else {
        return toCelsius(value, currentTemperature.value.unit).toFixed(2);
    }
});

const fahrenheitValue = computed<number | string>(() => {
    const value = valueAsNumber.value;
    if (value === undefined) return '';

    // Se o erro de Kelvin estiver ativo, não converte e mostra vazio
    if (kelvinError.value) return '';

    if (currentTemperature.value.unit === 'fahrenheit') {
        return value;
    } else {
        return toFahrenheit(value, currentTemperature.value.unit).toFixed(2);
    }
});

const kelvinValue = computed<number | string>(() => {
    const value = valueAsNumber.value;
    if (value === undefined) return '';

    // Se o erro de Kelvin estiver ativo, não converte e mostra vazio
    if (kelvinError.value) return '';

    if (currentTemperature.value.unit === 'kelvin') {
        return value;
    } else {
        return toKelvin(value, currentTemperature.value.unit).toFixed(2);
    }
});

// Chamado quando um campo de temperatura é editado
const handleUpdate = (unit: 'celsius' | 'fahrenheit' | 'kelvin', value: number | string) => {
    currentTemperature.value.value = value;
    currentTemperature.value.unit = unit;
};

</script>

<template>
    <div class="container">
        <h1>Conversor de Temperatura</h1>

        <TemperatureInput unit="celsius" label="Celsius" symbol="°C" :modelValue="celsiusValue"
            @update:modelValue="val => handleUpdate('celsius', val)"
            :errorMessage="currentTemperature.unit === 'celsius' ? kelvinError : undefined" />

        <TemperatureInput unit="fahrenheit" label="Fahrenheit" symbol="°F" :modelValue="fahrenheitValue"
            @update:modelValue="val => handleUpdate('fahrenheit', val)"
            :errorMessage="currentTemperature.unit === 'fahrenheit' ? kelvinError : undefined" />

        <TemperatureInput unit="kelvin" label="Kelvin" symbol="K" :modelValue="kelvinValue"
            @update:modelValue="val => handleUpdate('kelvin', val)"
            :errorMessage="currentTemperature.unit === 'kelvin' ? kelvinError : undefined" />

    </div>
</template>

<style>
@import './assets/style.css';
</style>