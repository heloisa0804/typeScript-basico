export {};

/* Enums são uma maneira de definir um conjunto de constantes nomeadas.Úteis para definir: status, categorias, grupos de valores relacionados etc */

enum DiasdaSemana {
  Domingo = "Domingo",
  Segunda = "Segunda-Feira",
  Terça = "Terça- feira",
  Quarta = "Quarta-feira",
}

const diaAtual: DiasdaSemana = DiasdaSemana.Quarta;
console.log(diaAtual);
