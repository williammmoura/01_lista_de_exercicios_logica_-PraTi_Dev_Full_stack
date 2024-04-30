//16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100. Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

// Arrow function to check if a number is prime
const isPrime = (number) => {
    if (number <= 1) return false; // 1 and numbers less than 1 are not prime
    
    // Check divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // If divisible by any number, it's not prime
        }
    }
    
    return true; // Otherwise, it's prime
};

// Define variables
let count = 0;
let currentNumber = 101; // Start checking from 101

// Print the first 50 prime numbers greater than 100
while (count < 50) {
    if (isPrime(currentNumber)) {
        console.log(currentNumber);
        count++;
    }
    currentNumber++; // Move to the next number
}
