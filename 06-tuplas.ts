export {};

/* Tuplas
São um tipo de array usada quando precisamos armazenar um conjunto fixo de emelementos de tipos diferentes.Obs.: se usar readonly, a tupla não poderá ser modificada (somente leitura).
*/
const usuario: /* readonly */ [string, number, boolean] = ["João", 12, true];
console.log(usuario[0]);
console.log(usuario[1] + "anos");
console.log(usuario[2] ? "ativo" : "inativo");

usuario[1] = 30;
console.log(usuario[1] + "anos.");
