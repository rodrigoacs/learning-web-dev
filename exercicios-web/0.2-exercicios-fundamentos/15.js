function receberSomenteOsParesDeIndicesPares(array) {
    const novoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0 && i % 2 == 0) {
            novoArray.push(array[i]);
        }
    }
    return novoArray;
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]));
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]));