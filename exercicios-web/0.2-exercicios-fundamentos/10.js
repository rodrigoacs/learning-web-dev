function stringMais(valor) {
    let retorno = '';
    for (let i = 0; i < valor; i++) {
        retorno = retorno.concat('+');
    }
    return retorno;
}

console.log(stringMais(2));
console.log(stringMais(4));