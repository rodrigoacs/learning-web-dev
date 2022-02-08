function fatorial(numero) {
    let fatorial = 1;
    while (numero) {
        fatorial *= numero;
        numero--;
    }
    return fatorial;
}

console.log(fatorial(10));