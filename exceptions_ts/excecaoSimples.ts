export class excecaoSimples extends Error {
  constructor(message: string) {
    super();
    this.name = "Excecao Simples";
    this.message = message;
  }
}
