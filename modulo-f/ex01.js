let num = [5, 8, 2, 9, 3]
//num.push(1)         //valor '1' fica no começo    A ordem faz diferença
num.sort()
num.push(1)           //valor '1' fica por ultimo   A ordem faz diferença
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if(pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}

/*let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)

for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 


for(let pos in valores) {            //Forma mais simplificada
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

