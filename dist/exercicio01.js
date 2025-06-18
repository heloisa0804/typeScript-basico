"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
function exibirCor(nome, cor) {
    if (cor) {
        return `${nome} gosta da cor ${cor}.`;
    }
    return `${nome} não informou uma cor preferida.`;
}
const mensagem1 = exibirCor("Paulo", "azul");
const mensagem2 = exibirCor("João");
console.log(mensagem1);
console.log(mensagem2);
(0, modulos_1.separador)();
