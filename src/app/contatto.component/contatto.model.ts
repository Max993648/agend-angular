export class Contatto {
  nome: string;
  cognome: string;
  mail: string;
  cell: string;
  nrStelle: number;

  constructor(
    nome: string,
    cognome: string,
    mail: string,
    cell: string,
    nrStelle: number
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.mail = mail;
    this.cell = cell;
    this.nrStelle = nrStelle;
  }

  getNomeCompleto(): string{
    return this.nome + " " + this.cognome;
  }

  getFullContatto(): string{
    return this.getNomeCompleto() + " " + this.mail + " " + this.cell + " " + this.nrStelle;
  }

  isPreferito(){
    return this.nrStelle == 5;
  }

  setPreferito(){
    this.nrStelle=5;
  }
}

  
