function removerPropriedade(objeto, remover) {
    const obj = Object.assign(objeto);
    delete obj[remover];
    return obj;
};

console.log(removerPropriedade({ a: 1, b: 2 }, "a"));
console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao"));