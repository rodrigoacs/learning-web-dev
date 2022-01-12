function pow(base, expoente) {
    let baseAux = base;
    for (let i = 1; i < expoente; i++) {
        base *= baseAux;
    }
    return base;
}

console.log(pow(2, 5));