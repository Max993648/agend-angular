class Contatto {
  nome: string;
  cognome: string;
  mail: string;
  cell: string;
  nStelle: number;

  constructor(nome: string, cognome: string, mail: string, cell: string, nStelle: number){
    this.nome=nome;
    this.cognome=cognome;
    this.mail=mail;
    this.cell=cell;
    this.nStelle=nStelle;
  }

  getNomeCompleto():string{
    return this.nome + ' ' + this.cognome;

  }
}