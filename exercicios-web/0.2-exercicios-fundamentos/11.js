function primeiroEUltimo(array) {
    const novoArray = [];
    novoArray[0] = array[0];
    novoArray[1] = array[array.length - 1];
    return novoArray;
}

console.log(primeiroEUltimo([7, 14, 'olá']));
console.log(primeiroEUltimo([-100, 'aplicativo', 16]));