export abstract class Pessoa {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  public get nome() {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

    public abstract cansou():void;
  public visualizar() {
    console.log("========================================");
    console.log("            Dados do Atleta");
    console.log("========================================");
    console.log(`Nome do Atleta: ${this._nome}`);
  }
}
