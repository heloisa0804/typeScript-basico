import { separador } from "./modulos";
export {};

// Sintaxe 1
const bandas: Array<string> = ["Metalica", "Slayer", "Iron Maiden"];
//bandas.push(10); //erro
bandas.push("NightWhish");
console.log(bandas);

// Sintaxe 2
const artista: string[] = ["Jon Oliva", "Sting", "David Gilmour"];
artista.push("Neil Peart");
console.log(artista);

separador();

// Arrays com tipos mistos ou combinados
const pessoas: (string | number)[] = ["Tiago", 28, "Maria", 45];
console.log(pessoas);

separador();

const linguagens: string[][] = [
  ["JS", "TS"],
  ["HTML", "CSS", "Bootstrap"],
];

console.log(linguagens[0][0]);
console.log(linguagens[1][0]);

separador();

// Mini-exercício
// 1) Crie um array de números
// 2) Calcule a soma de todos os elementos.
// 3) Mostre o resultado da soma.

const numeros: number[] = [10, 50, 10];

const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(soma);
