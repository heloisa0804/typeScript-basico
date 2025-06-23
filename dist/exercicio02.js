"use strict";
function mostrarDetalhes({ nome, preco, garantia }) {
    console.log(`Nome: ${nome}`);
    console.log(`Preço: R$ ${preco}`);
    console.log(`Garantia: ${garantia}`);
}
const produto1 = {
    nome: "Televisão",
    preco: 3200,
    garantia: "2 anos",
};
const produto2 = {
    nome: "Celular",
    preco: 6200,
    garantia: "3 anos",
};
console.log(produto1);
console.log(produto2);
