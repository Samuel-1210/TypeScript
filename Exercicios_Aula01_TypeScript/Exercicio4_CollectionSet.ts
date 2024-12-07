import readlinesync = require("readline-sync")

const numeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6])
let num1

do {
  num1 = readlinesync.questionInt("Digite o numero que deseja encontrar: \n")
  if (numeros.has(num1)) {
    console.log(`O número ${num1} foi encontrado!`)
  } else {
    console.log(`O número ${num1} não foi encontrado!`)
  }
} while (!numeros.has(num1))
