function filtrarNumeros(array) {
    const novoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == typeof 1) {
            novoArray.push(array[i]);
        }
    }
    return novoArray;
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]));
console.log(filtrarNumeros(["a", "c"]));
