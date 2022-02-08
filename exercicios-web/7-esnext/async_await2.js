function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1))
        if (numerosProibidos.includes(aleatorio)) {
            reject('numero repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros // resolver a promise
    } catch (e) {
        if (tentativas > 100) {
            throw "falhou" // rejeitar a promise
        } else {
            gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }

}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)