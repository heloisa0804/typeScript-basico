import { separador } from "./modulos";

export {};

function saudacao(nome: string): string {
  return `Olá ${nome}!`;
}

console.log(saudacao("Heloisa"));
//console.log(saudacao(10)); // erro, é passado number
//console.log(saudacao(true)); // erro, é passado bolean

separador();

// Uso de parâmetro opcional com flag? após o nome do parâmetro
function saudacaoCompleta(
  nome: string,
  anoLetivo: number = 2025,
  curso?: string
) {
  if (curso) {
    return `OLá ${nome}, você está estudando ${curso}. Ano letivo: ${anoLetivo}`;
  }
  return `OLá ${nome}, sei lá o que você está fazendo... Ano: ${anoLetivo}`;
}

console.log(saudacaoCompleta("João Pedro", 2021));

console.log(saudacaoCompleta("Paulo"));

separador();
