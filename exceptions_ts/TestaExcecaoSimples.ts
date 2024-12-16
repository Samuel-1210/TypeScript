import readline = require("readline-sync");
import { excecaoSimples } from "./excecaoSimples";

let resultado: number | null;
let loop: boolean = true;

do {
  try {
    let numero1: number = readline.questionFloat("Digite o primeiro numero: ");
    let numero2: number = readline.questionFloat("Digite o segundo numero: ");

    resultado = dividir(numero1, numero2);

    console.log(`${numero1} / ${numero2} = ${resultado}`);

    loop = false;
  } catch (error: any) {
    if (error instanceof excecaoSimples) {
      console.error(error.name);
      console.error(error.message);
      console.error("Tente novamente!");
    } else console.error("Erro inesperado");
  }
} while (loop);

function dividir(numero1: number, numero2: number): number | null {
  if (numero2 == 0) throw new excecaoSimples("Não existe divisão por zero!");

  return numero1 / numero2;
}
