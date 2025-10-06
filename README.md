# Exercício 1 – Portando aplicação para Vue + TypeScript

## 🎯 Objetivo
Praticar os fundamentos do Vue 3 com TypeScript, entendendo como transformar uma aplicação em JavaScript puro em uma aplicação baseada em componentes reativos.

## 📝 Descrição
Você receberá uma aplicação simples em HTML, CSS e JavaScript Vanilla: um **Conversor de Temperatura**.  
Essa aplicação permite que o usuário digite um valor em uma escala (Celsius, Fahrenheit ou Kelvin) e visualize a conversão automática para as outras duas escalas.

A tarefa é **portar essa aplicação para Vue 3 + TypeScript**, utilizando:
- Componentes para separar a interface
- Reatividade com `ref`
- `computed` para cálculos automáticos
- Comunicação via props e eventos
- Diretivas (`v-model`, `v-if`, `v-for`), de acordo com a necessidade

## 🚀 Requisitos
1. Criar pelo menos **1 componentes** (ex: `TemperatureInput.vue`).
2. Utilizar `computed` para realizar os cálculos de conversão.
3. Permitir que o usuário altere qualquer campo (Celsius, Fahrenheit ou Kelvin) e todos os outros sejam atualizados automaticamente.
4. Estilizar minimamente a aplicação (CSS simples).

## 🌟 Desafio extra
- Mostrar uma mensagem de erro se o usuário digitar um valor inválido.
  - Apenas a escala Kelvin possui um limite inferior que é 0.  

