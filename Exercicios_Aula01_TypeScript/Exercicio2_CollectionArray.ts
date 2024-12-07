import readlinesync = require("readline-sync")

const numeros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6)
let num1

num1 = readlinesync.questionInt("Digite o numero que voce deseja encontrar: \n")
let index = numeros.indexOf(num1)
if (numeros.includes(num1)) {
  console.log(
    `O número ${num1} está localizado na posição: ${numeros.indexOf(num1)}`
  )
} else console.log(`O número ${num1} não foi encontrado`)
