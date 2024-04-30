//4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre, calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).

const prompt = require("prompt-sync")();

let nota1 = parseInt(prompt("Digite o valor da primeira nota:"));
let nota2 = parseInt(prompt("Digite o valor da segunda nota:"));
let mediaNotas = (nota1 + nota2) / 2;

if(mediaNotas >= 6){
    console.log(`A média das duas notas foi ${mediaNotas}. PARABÉNS! Você foi aprovado`);
}else{ //5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a média calculada seja menor que 6,0.
    console.log(`A média das duas notas foram ${mediaNotas}. Você não atigiu a nota mínima para sua aprovação.`);
}