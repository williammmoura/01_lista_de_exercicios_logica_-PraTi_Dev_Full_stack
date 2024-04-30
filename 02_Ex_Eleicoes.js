//2. Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

const prompt =  require("prompt-sync")();

const numeroEleitores = parseInt(prompt("Digite o número de eleitores da sua cidade:"));
const numeroVotosBrancos = parseInt(prompt("Digite o número de votos brancos:"));
const numeroVotosNulos = parseInt(prompt("Digite o número de votos nulos:"));
const numeroVotosValidos = parseInt(prompt("Digite o número de votos válidos:"));

let percentualVotosBrancos = (numeroVotosBrancos / numeroEleitores)*100;
let percentualVotosNulos = (numeroVotosNulos / numeroEleitores) *100;
let percentualVotosValidos = (numeroVotosValidos / numeroEleitores)*100;

console.log(`Percentual de votos brancos:${percentualVotosBrancos}`);
console.log(`Percentual de votos nulos:${percentualVotosNulos}`);
console.log(`Percentual de votos válidos:${percentualVotosValidos}`);