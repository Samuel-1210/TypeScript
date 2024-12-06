import readlinesync = require("readline-sync")

const numeros: Array<number> = new Array<number>()

numeros.push(7)
numeros.push(2)
numeros.push(5)
numeros.push(10)
numeros.push(7, 3)

for (let numero of numeros) {
  console.log(numero)
}

// numeros.push(readlinesync.questionFloat("Digite um npumero: "))
numeros.unshift(2, 4.5, 8, 9)

console.table(numeros)

console.log("Existe o numero 5 no array? ", numeros.includes(5))

console.log("Qual é o indice do numero 3 no array? ", numeros.indexOf(3))

numeros.splice(numeros.indexOf(10), 1, 666)

console.table(numeros)
