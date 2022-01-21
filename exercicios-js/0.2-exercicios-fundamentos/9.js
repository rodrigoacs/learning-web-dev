function repetir(valor, repeticoes) {
    const array = [];
    for (let i = 0; i < repeticoes; i++) {
        array.push(valor);
    }
    return array;
}

console.log(repetir('código', 2));
console.log(repetir(7, 3));