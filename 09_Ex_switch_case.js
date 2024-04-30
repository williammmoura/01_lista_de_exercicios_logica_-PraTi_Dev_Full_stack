//9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região  do mesmo, conforme a tabela abaixo:
//1 - Sul;        5 ou 6 - Nordeste;
//2 - Norte;      7, 8 ou 9 - Sudeste;  
//3 - Leste;      10 até 20 - Centro-Oeste;
//4 - Oeste;      25 até 30 - Noroeste;

const prompt = require("prompt-sync")();

const sourceCode = parseInt(prompt("Enter the source code:"));

switch (sourceCode) {
    case 1:
        console.log("South");
        break;
    case 2:
        console.log("North");
        break;
    case 3:
        console.log("East");
        break;
    case 4:
        console.log("West");
        break;
    case 5:
    case 6:
        console.log("Northeast");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Southeast");
        break;
    default:
        if(sourceCode >= 10 && sourceCode <= 20){
            console.log("Midwest");
        }else if(sourceCode >= 25 && sourceCode <= 30){
            console.log("Northwes");
        }else{
            console.log("Region not identified");
        }
        break;
}