"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
// Exemplos de tipos básicos
let idade = 30;
let ativo = true;
let nome = "Beltrano";
console.log(`${nome} tem ${idade} anos.`);
// Nova atribuição
idade = 31;
console.log(`${nome} agora tem ${idade} anos.`);
console.log(`Status: ${ativo ? "Ativo" : "Inativo"}`);
(0, modulos_1.separador)();
/* Sobre o tipo any (qualquer)
Tipo neutro, usado SOMENTE em situações de exceção em que não é possivel rapidamento identificar qual o tipo do valor (exemplo: refatoração complexa de um projeto com JS antigo e que deve migrar pra TS)
*/
let qualquerCoisa = "Pode ser qualquer coisa";
qualquerCoisa = 10;
qualquerCoisa = true;
console.log(`Qualquer coisa: ${qualquerCoisa}`);
