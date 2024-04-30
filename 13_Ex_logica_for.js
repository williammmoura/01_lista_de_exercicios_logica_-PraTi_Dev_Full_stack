//13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles, calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
//1 x N = N
//2 x N = 2N
//3 x N = 3N

const prompt = require("prompt-sync")();

// Define variables
let N;

// Function to calculate and display the multiplication table
const calculateMultiplicationTable = (N) => {
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}

// Read 5 values for N and calculate the multiplication table for each
for (let k = 0; k < 5; k++) {
    N = parseInt(prompt("Enter a value for N:"));
    calculateMultiplicationTable(N);
}
