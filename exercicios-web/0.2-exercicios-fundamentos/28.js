function filtrarPorQuantidadeDeDigitos(array, qtdeDigitos) {
    const novoArray = [];
    let comparador = '1';
    for (let i = 0; i < qtdeDigitos; i++) {
        comparador = comparador.concat('0');
    }
    console.log(comparador);
    for (let i = 0; i < array.length; i++) {
        if (array[i] < comparador && array[i] >= comparador.substring(0, comparador.length - 1)) {
            novoArray.push(array[i]);
        }
    }
    return console.log(novoArray);
}

filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]
