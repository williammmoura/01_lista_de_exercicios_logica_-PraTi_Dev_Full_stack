//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require("prompt-sync")();

const userNumber = parseInt(prompt("Enter a number:"));

for (let index = 0; index <= 10; index++) {
    console.log(userNumber);
}
