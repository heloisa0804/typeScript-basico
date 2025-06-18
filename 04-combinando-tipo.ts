import { separador } from "./modulos";

export {};

/* Union Types */

// União de tipos literais
let direcao: "esquerda" | "direita";
direcao = "esquerda";
console.log(direcao);

direcao = "direita";
console.log(direcao);

separador();

// Criando um tipo combinado outros tipos existentes
type NumberOuTexto = number | string;
let exemploA: NumberOuTexto = 2112;
let exemploB: NumberOuTexto = "Senac";
console.log("Exemplo A: " + exemploA);
console.log("Exemplo B: " + exemploB);

separador();

// Criando um novo type com tipos literais
type Status = "ativo" | "inativo" | "pendente";
let situacaoAluno1: Status = "ativo";
let situacaoAluno2: Status = "inativo";
let situacaoAluno3: Status = "pendente";
console.log("Situação:" + situacaoAluno1);

console.log("Situação:" + situacaoAluno1);
console.log("Situação:" + situacaoAluno2);
console.log("Situação:" + situacaoAluno3);

separador();

type DiasdaSemana =
  | "Domingo"
  | "Segunda-Feira"
  | "Terça- feira"
  | "Quarta-feira";

const diaAtual: DiasdaSemana = "Quarta-feira";
console.log(diaAtual);

separador();

/* Interseção de Tipos */
type Pessoa = { nome: string; idade: number };
type Funcionario = { salario: number };

const programador: Pessoa & Funcionario = {
  nome: "Lucas",
  idade: 18,
  salario: 5000,
};

console.log(programador);
