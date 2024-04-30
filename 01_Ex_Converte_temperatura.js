//1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.

const prompt = require("prompt-sync")();

let temperaturaCelsius = parseInt(prompt("Digite a temperatura em graus Celsius:"));
let temperaturaFahrenheit = (temperaturaCelsius * 1.8) + 32;

console.log(`A temperatura ${temperaturaCelsius}ºC corresponde a ${temperaturaFahrenheit}ºF.`);