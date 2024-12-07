import readlinesync = require("readline-sync")

const numeros: Set<number> = new Set<number>()
let num1

for (let i = 0; i < 10; i++) {
  numeros.add(readlinesync.questionInt("Digite numeros nao repetidos: "))
}
let setOrdernado = Array.from(numeros).sort((a, b) => a - b)

console.log("Listar dados do set:")
for (let cont of setOrdernado) {
  console.log("" + cont + "")
}
