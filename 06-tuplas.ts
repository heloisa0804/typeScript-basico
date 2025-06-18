import { separador } from "./modulos";

export {};

/* Tuplas
São um tipo de array usada quando precisamos armazenar um conjunto fixo de emelementos de tipos diferentes.Obs.: se usar readonly, a tupla não poderá ser modificada (somente leitura).
*/
const usuario: /* readonly */ [string, number, boolean] = ["João", 12, true];
console.log(usuario[0]);
console.log(usuario[1] + "anos");
console.log(usuario[2] ? "ativo" : "inativo");

usuario[1] = 30; // atualizando um valor da tupla (desde que não seja readonly)
console.log(usuario[1] + "anos.");

separador();

// Criando uma tupla como tipo
type Produto = [string, number];

const produtoA: Produto = ["Camiseta", 29.99];
//const produtoB:Produto = [100, "calça"];//erro, pois esta fora do padrão da tupla
const produtoC: Produto = ["TV", 1000];

console.log(produtoA);
console.log(produtoC);

separador();

// Usando tupla no retorno de função
/*function verificarOperacao(sucesso: boolean): [number, string] {
  if (sucesso) {
    return [200, "Operação realizada com sucesso"];
  }
  return [500, "Erro inesperado no servidor"];
}

let resultadoOperacao = verificarOperacao(true);
console.log(resultadoOperacao);*/

// Mini-exericio
// 1) Estraia a tupla do retorno da função para novo type
//2) Desestruture o resultadoOperação e mostre somente a mensagem console

type resultadoOperacao = [number, string];

function verificarOperacao(sucesso: boolean): resultadoOperacao {
  return sucesso
    ? [200, "Operação realizada com sucesso"]
    : [500, "Erro inesperado no servidor"];
}
const [, mensagem] = verificarOperacao(false);
console.log(mensagem);

separador();
