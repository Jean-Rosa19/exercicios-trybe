/* 
let array = ['ab', 'java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let maiorPalavra = 0;
let nomeDaMaiorPalavra = '';
//descobrindo a maior palavra e seu tamanho
for (let index = 0; index < array.length; index += 1){
    let word = array[index];
    console.log("minha palavra: " + word + " da posição do meu array: " + index);
    console.log(word.length);
    if (word.length > maiorPalavra){
        maiorPalavra = word.length;
        nomeDaMaiorPalavra = word;
    }
}
console.log(" a maior palavra é: " + nomeDaMaiorPalavra);

let nomeDaMenorPalavra = "";
let menorPalavra = maiorPalavra;
for(let index = 0; index < array.length; index += 1){
    let word = array[index];
    if (word.length < menorPalavra){
        menorPalavra = word.length;
        nomeDaMenorPalavra = word;
    }
}

console.log("a menor palavra é: " + nomeDaMenorPalavra); 


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
let soma = 0
for (let index = 0; index < numbers.length; index += 1){
    soma = soma + numbers[index] 
    media = soma / numbers.length
}
console.log(media) 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = numbers[0];//maior valor vai receber number na posiçao 0, pois não sei qual é ela ainda.
for (let index = 1; index < numbers.length; index += 1){ // fazemos um for para percorrer o array
    if (numbers[index] > maiorValor){ // se numbers na posição index for maior que o maior valor do array, 
        maiorValor = numbers[index] // maiorvalor recebera aquele numero
    }
} 
console.log(maiorValor) */


for(let index = 1; index <= 25; index += 1){
    let divisao = index / 2
    console.log(divisao)
}

function maiorDeDoisNumeros(num1,num2){
    if (num1 > num2){
        return num1
    } else if (num2 > num1){
        return num2
    } else {
        return ('eles são iguais')
    }

    }
     console.log(maiorDeDoisNumeros(3,3))

    
function maiorDeDoisNumeros(num1,num2){
    if (num1 > num2){
        return num1
    } else if (num2 > num1){
        return num2
    } else {
        return ('eles são iguais')
    }

    }
     console.log(maiorDeDoisNumeros(3,3))

    function porcent(nota){
        if (nota >=90){
            return "A"
        }
        else if (nota >= 80){
            return "B"
        }
        else if (nota >= 70){
            return "C"
        } 
        else if (nota >= 60){
            return "D"
        }
        else if (nota < 60){
            return "E"
        }
    }
    console.log(porcent(87))



    //Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

 let num1 = 4;
 let num2 = 45;
 let num3 = 47;
 let isEven = false

 if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
    isEven = true
 } console.log(isEven)