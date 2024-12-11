import readlinesync = require("readline-sync")

import { Stack } from "./Stack"

const pilha = new Stack<string>()

let opcao

while (opcao != 0) {
  console.log("\n========== MENU ==========")
  console.log("1. Adicionar Livro na pilha")
  console.log("2. Listar todos os Livros")
  console.log("3. Retirar Livro da pilha")
  console.log("0. Sair")
  console.log("==========================")
  console.log("Escolha uma opção: ")

  opcao = readlinesync.questionInt("Digite a opcao desejada: ")
  switch (opcao) {
    case 1:
      pilha.push(readlinesync.question("Digite o nome do Livro: "))
      console.log("Pilha")
      pilha.printStack()
      console.log("Livro adicionado!")
      break
    case 2:
      console.log("Pilha:")

      pilha.printStack()
      break
    case 3:
      pilha.pop()
      console.log("Pilha:")
      pilha.printStack()
      console.log("Um livro foi retirado da pilha:")

      break
    case 0:
      console.log("Você escolheu sair")
      break
    default:
      console.log("Digite um opção valida!")
  }
}
