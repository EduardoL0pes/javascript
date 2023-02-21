/*function soma(n1, n2) {
    return n1 + n2
}                                   

console.log(soma(7, 3)) */


function soma(n1=0, n2=0) {    //caso não tiver o segundo numero no parametro ele fica "vazio"
    return n1 + n2             //mas quando houver n1'=0' por exemplo.
}

console.log(soma(7))