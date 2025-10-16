/**
 * Converte uma temperatura da unidade de origem para Celsius.
 * @param value O valor da temperatura.
 * @param fromUnit A unidade de origem ('fahrenheit' ou 'kelvin').
 * @returns O valor em Celsius.
 */
export function toCelsius(value: number, fromUnit: 'fahrenheit' | 'kelvin'): number {
    if (fromUnit === 'fahrenheit') {
        return (value - 32) * 5 / 9;
    } else if (fromUnit === 'kelvin') {
        return value - 273.15;
    }
    return value;
}

/**
 * Converte uma temperatura da unidade de origem para Fahrenheit.
 * @param value O valor da temperatura.
 * @param fromUnit A unidade de origem ('celsius' ou 'kelvin').
 * @returns O valor em Fahrenheit.
 */
export function toFahrenheit(value: number, fromUnit: 'celsius' | 'kelvin'): number {
    if (fromUnit === 'celsius') {
        return (value * 9 / 5) + 32;
    } else if (fromUnit === 'kelvin') {
        return (value - 273.15) * 9 / 5 + 32;
    }
    return value;
}

/**
 * Converte uma temperatura da unidade de origem para Kelvin.
 * @param value O valor da temperatura.
 * @param fromUnit A unidade de origem ('celsius' ou 'fahrenheit').
 * @returns O valor em Kelvin.
 */
export function toKelvin(value: number, fromUnit: 'celsius' | 'fahrenheit'): number {
    if (fromUnit === 'celsius') {
        return value + 273.15;
    } else if (fromUnit === 'fahrenheit') {
        return (value - 32) * 5 / 9 + 273.15;
    }
    return value;
}