//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
const prompt = require("prompt-sync")();

let value1, value2

do{
    value1 = parseInt(prompt("Enter the first value:"));
    value2 = parseInt(prompt("Enter the second value:"));
    
    if(value1 === value2){
        console.log("Please enter two different values.");
    }
}while(value1 === value2);

if(value1 < value2){
    console.log(value1, value2);
}else{
    console.log(value2, value1);
}
