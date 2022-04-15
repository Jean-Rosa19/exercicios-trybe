//Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.



for (let index = 0; index <= 10; index += 1){
    for(let index2 = 2; index2 < index; index2 += 1){
        if(index / index2 === 1 && index / index2 === index2) {
            console.log(index);
        }
    }
}