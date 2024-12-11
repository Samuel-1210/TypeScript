import readlinesync = require("readline-sync")
import { Queue } from "./Queue"

const fila = new Queue<string>()
let opcao, nome

while (opcao != 0) {
  console.log("\n========== MENU ==========")
  console.log("1. Adicionar Cliente na Fila")
  console.log("2. Listar todos os Clientes")
  console.log("3. Retirar Cliente da Fila")
  console.log("0. Sair")
  console.log("==========================")
  console.log("Escolha uma opção: ")

  opcao = readlinesync.questionInt("Digite a opcao desejada: ")
  switch (opcao) {
    case 1:
      fila.enqueue(readlinesync.question("Digite o nome do cliente: "))
      console.log("Cliente adicionado!")
      break
    case 2:
      console.log("Lista de Clientes na Fila:")
      fila.printQueue()
      break
    case 3:
      console.log("Cliente removido da Fila:")
      fila.dequeue()
      fila.printQueue()
      break
    case 0:
      console.log("Você escolheu sair")
      break
  }
}
