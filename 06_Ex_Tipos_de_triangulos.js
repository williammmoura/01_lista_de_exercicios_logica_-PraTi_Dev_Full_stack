//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
//**Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
//**Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
//**Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
//**Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require("prompt-sync")();

let number1 = parseInt(prompt("Enter the first value:"));
let number2 = parseInt(prompt("Enter the second value:"));
let number3 = parseInt(prompt("Enter the third value:"));

//Verificar se os valores formam um triângulo
if(number1 < number2 + number3 && number2 < number1 + number3 && number3 < number1 + number2){
    if (number1 === number2 && number2 === number3) {
        console.log(`The values ${number1}, ${number2}, ${number3} form an equilateral triangle.`);
    } else if (number1 === number2 || number1 === number3 || number2 === number3) {
        console.log(`The values ${number1}, ${number2}, ${number3} form an isosceles triangle.`);
    } else {
        console.log(`The values ${number1}, ${number2}, ${number3} form a scalene triangle.`);
    }
}else{
    console.log("These values do not form a triangle.");
}