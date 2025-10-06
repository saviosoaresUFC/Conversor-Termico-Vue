document.addEventListener('DOMContentLoaded', () => {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const kelvinInput = document.getElementById('kelvin');

    function toCelsius(value, fromUnit) {
        if (fromUnit === 'fahrenheit') {
            return (value - 32) * 5 / 9;
        } else if (fromUnit === 'kelvin') {
            return value - 273.15;
        }
        return value;
    }

    function toFahrenheit(value, fromUnit) {
        if (fromUnit === 'celsius') {
            return (value * 9 / 5) + 32;
        } else if (fromUnit === 'kelvin') {
            return (value - 273.15) * 9 / 5 + 32;
        }
        return value;
    }

    function toKelvin(value, fromUnit) {
        if (fromUnit === 'celsius') {
            return value + 273.15;
        } else if (fromUnit === 'fahrenheit') {
            return (value - 32) * 5 / 9 + 273.15;
        }
        return value;
    }

    function convert(event) {
        const inputElement = event.target;
        const value = parseFloat(inputElement.value);

        if (isNaN(value)) {
            clearInputs();
            return;
        }

        const unit = inputElement.id;

        if (unit === 'celsius') {
            fahrenheitInput.value = toFahrenheit(value, 'celsius').toFixed(2);
            kelvinInput.value = toKelvin(value, 'celsius').toFixed(2);
        } else if (unit === 'fahrenheit') {
            celsiusInput.value = toCelsius(value, 'fahrenheit').toFixed(2);
            kelvinInput.value = toKelvin(value, 'fahrenheit').toFixed(2);
        } else if (unit === 'kelvin') {
            celsiusInput.value = toCelsius(value, 'kelvin').toFixed(2);
            fahrenheitInput.value = toFahrenheit(value, 'kelvin').toFixed(2);
        }
    }

    function clearInputs() {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        kelvinInput.value = '';
    }

    celsiusInput.addEventListener('input', convert);
    fahrenheitInput.addEventListener('input', convert);
    kelvinInput.addEventListener('input', convert);
});
