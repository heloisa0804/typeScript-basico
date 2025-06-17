//Exercício

/* 
1) Crie uma função chamada "exibirCor" que aceite:
-nome da pessoa (obrigatório)
- cor preferida da pessoa (opcional)

o parâmetro cor deve ser do tipo Cor e somente 5 cores.

2) Chame a funçaõ pelo menos 2x:
- Na primeira, passe o nome e cor (das possíveis)
- Na segunda, passe somente o nome
*/

type Cores = "vermelho" | "azul" | "violeta" | "laranja" | "verde";

function exibirCor(nome: string, cor?: Cores): string {
  if (cor) {
    return `${nome} gosta da cor ${cor}.`;
  }
  return `${nome} não informou uma cor preferida.`;
}

const mensagem1 = exibirCor("Paulo", "azul");
const mensagem2 = exibirCor("João");

console.log(mensagem1);
console.log(mensagem2);
