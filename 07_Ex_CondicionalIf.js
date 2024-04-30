//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")();

let quantityOfApples = parseInt(prompt("Enter the number of apples:"));

if(quantityOfApples < 12){
    let totalPrice03 = quantityOfApples * 0.3;
    console.log(`The final price is US$${totalPrice03}`);
}else{
    let totalPrice025 = quantityOfApples * 0.25;
    console.log(`The final price is US$${totalPrice025}`);
}