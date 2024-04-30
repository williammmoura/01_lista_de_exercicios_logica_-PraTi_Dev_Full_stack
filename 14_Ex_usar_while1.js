//14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazera média aritmética desses números.

// Import the prompt-sync module
const prompt = require('prompt-sync')();

// Define variables
let sum = 0;
let count = 0;
let number;

// Read the first number
number = parseFloat(prompt("Enter a decimal number (enter 0 to finish): "));

// While the entered number is not zero
while (number !== 0) {
    // Add the number to the sum
    sum += number;
    // Increment the count
    count++;
    // Read the next number
    number = parseFloat(prompt("Enter a decimal number (enter 0 to finish): "));
}

// Check if at least one non-zero number was entered
if (count > 0) {
    // Calculate the average
    const average = sum / count;
    // Display the average
    console.log("The average of the numbers is: " + average);
} else {
    console.log("No numbers were entered, unable to calculate the average.");
}
