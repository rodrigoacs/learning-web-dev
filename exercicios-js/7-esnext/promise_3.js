function gerarNumerosEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min + 1))
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 10)
    .then(num => num * 10)
    .then(numX10 => `o número ${numX10 / 10} multiplicado por 10 é ${numX10} `)
    .then(console.log)