//exercicio02

/*
1) Crie uma interface para representar um produto com as propriedades nome, preço e garantia

2) Cria uma funçao que receba um objeto baseado na interface Produto e que mostre nome, preco e garantia.Obs.: o objeto deve ser desestruturado como parâmetros individuais.

3) Use a função pelo menos 2x produtos diferentes
const p1:Produto
const p2:Produto
 */

interface Produto {
  nome: string;
  preco: number;
  garantia: string;
}

function mostrarDetalhes({ nome, preco, garantia }: Produto) {
  console.log(`Nome: ${nome}`);
  console.log(`Preço: R$ ${preco}`);
  console.log(`Garantia: ${garantia}`);
}

const produto1: Produto = {
  nome: "Televisão",
  preco: 3200,
  garantia: "2 anos",
};

const produto2: Produto = {
  nome: "Celular",
  preco: 6200,
  garantia: "3 anos",
};

console.log(produto1);
console.log(produto2);
