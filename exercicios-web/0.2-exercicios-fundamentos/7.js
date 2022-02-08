function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if (inclusivo) {
        return numero <= maximo && numero >= minimo;
    }
    return numero < maximo && numero > minimo;
}

console.log(estaEntre(10, 100, 50));
console.log(estaEntre(16, 100, 160));
console.log(estaEntre(3, 150, 3));
console.log(estaEntre(3, 150, 3, true));