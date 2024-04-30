//11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.

const prompt = require("prompt-sync")();

const checkEvenOrOdd = (input) => {
    if(input === 0){
        console.log("The value is EVEN");
    }else if(input % 2 === 0){//Verificando se o resto da divisão é igual a ZERO (modulo)
        console.log("The value is EVEN");
    }else{
        console.log("The value is ODD");
    }
}

const readValues = () => {
    while(true){
        const input = parseInt(prompt("Enter an integer value (or enter '0' to exit):"));

        //Condição para o encerramento do programa.
        if(isNaN(input)){
            console.log("Invalid input. Please enter a valid integer.");
        }else if(input <= 0){
            console.log("Closing the program...");
            break; //Encerra o loop imediatamente quando um valor nulo ou negativo é inserido
        }else{
            checkEvenOrOdd(input);
        }
    }
}

readValues();