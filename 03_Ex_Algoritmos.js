//3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
//● Some 25 ao primeiro inteiro;
//● Triplique o valor do segundo inteiro;
//● Modifique o valor do terceiro inteiro para 12% do valor original;
//● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros.

const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let num3 = parseInt(prompt("Digite o terceiro número:"));
let num4;

let soma25Num1 = num1 + 25;
let triploNum2 = num2 * 3;
let porcento12Num3 = num3 * 0.12;
let somaDosTresNumero = num1 + num2 + num3;
num4 = somaDosTresNumero;

console.log(`A soma de ${num1} + 25 = ${soma25Num1}`);
console.log(`O triplo do ${num2} é ${triploNum2}`);
console.log(`12% adicionado ao valor ${num3} é ${porcento12Num3}`);
console.log(`Quarto número (soma dos três primeiros): ${num4}`);