//12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que, divididos por 11, dão resto igual a 5.

// Loop de 1000 a 1999
for(let number = 1000; number <= 1999; number++){
    if(number % 11 === 5){
        console.log(number);
    }
}