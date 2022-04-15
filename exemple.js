/*let word = 'magic';

// imprimindo o total da minha string
console.log("total da minha palavra: " + word.length);

// automatizando a forma de inverter a palavra
let invertida = "";

for (let index = word.length -1; index >= 0; index -= 1){
    console.log("valor atual do meu indice: " + index);
    invertida = invertida + word[index];
    console.log("letra da minha palavra de acordo com o indice: " + word[index]);
}
console.log(invertida) 

let num1 = 10;
let num2 = 14;

if (num1 > num2) {
    console.log('num1 é o maior')
} else {
    console.log('num2 é o maior')
} 
let num1 = 17;
let num2 = 18;
let num3 = 33;

if(num1 > num2 && num3){
    console.log('num1 é o maior')
} else if(num2 > num3){
    console.log('num2 é o maior')
} else {
    console.log('num3 é o maior')
}


var num = -7;
if(num > 0){
    console.log('num é positivo')
} else if(num < 0){
    console.log('num é negativo')
} else {
    console.log('num é igual a zero')
} 
*/

let grauAngulo1 = 30
let grauAngulo2 = 90
let grauAngulo3 = 60;

let somaDosGraus = grauAngulo1 + grauAngulo2 + grauAngulo3;

let SaoAngulosPositivos = grauAngulo1 > 0 && grauAngulo2 > 0 && grauAngulo3 > 0;

// colocando um if dentro de um if

if(SaoAngulosPositivos){
    if(somaDosGraus === 180){
        console.log(true);
    } else{
        console.log(false);
    }
    

}