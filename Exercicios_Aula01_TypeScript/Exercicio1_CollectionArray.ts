import readlinesync = require("readline-sync")

const cores: Array<string> = new Array<string>()

for (let i = 0; i < 5; i++) {
  cores.push(readlinesync.question("Digite uma cor: \n"))
}

console.log("Cores adicionadas: \n")

for (let cor of cores) {
  console.log(cor + "")
}

console.log("Ordenar as cores: \n")
cores.sort()

for (let cor of cores) {
  console.log(cor + "")
}
