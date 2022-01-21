function menorNumero(array) {
    let menor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (menor > array[i]) {
            menor = array[i];
        }
    }
    return menor;
}

// retornará 5
// retornará -15

console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([5, -15, 50, 3]));