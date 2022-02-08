function objetoParaArray(objeto) {
    const array = [];
    Object.entries(objeto).forEach(([chave, valor]) => {
        array.push([chave, valor]);
    });
    return array;
}

// irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
// irá retornar [["codigo", 11111], ["preco", 12000]]

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}));
console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
}));