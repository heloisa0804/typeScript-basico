"use strict";
function exibirCor(nome, cor) {
    if (cor) {
        return `${nome} gosta da cor ${cor}.`;
    }
    return `${nome} não informou uma cor preferida.`;
}
console.log(exibirCor("paulo", "azul"));
console.log(exibirCor("pauloooo"));
