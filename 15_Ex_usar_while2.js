//15. Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.

// Import the prompt-sync module
const prompt = require('prompt-sync')();

// Define variables
let weightedSum = 0;
let totalWeight = 0;
let number;
let weight;

// Read the first number
number = parseFloat(prompt("Enter a decimal number (enter 0 to finish): "));
weight = parseFloat(prompt("Enter the weight for this number: "));

// While the entered number is not zero
while (number !== 0) {
    // Add the weighted number to the weighted sum
    weightedSum += number * weight;
    // Add the weight to the total weight
    totalWeight += weight;
    // Read the next number
    number = parseFloat(prompt("Enter a decimal number (enter 0 to finish): "));
    if (number !== 0) {
        weight = parseFloat(prompt("Enter the weight for this number: "));
    }
}

// Check if at least one non-zero number was entered
if (totalWeight > 0) {
    // Calculate the weighted average
    const weightedAverage = weightedSum / totalWeight;
    // Display the weighted average
    console.log("The weighted average of the numbers is: " + weightedAverage);
} else {
    console.log("No numbers were entered, unable to calculate the weighted average.");
}
