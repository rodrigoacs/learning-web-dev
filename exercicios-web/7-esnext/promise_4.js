function gerarNumerosEntre(min, max, tempo) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const aleatorio = parseInt(Math.random() * (max - min + 1))
            resolve(aleatorio)
        }, tempo);
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
    ])
}

// só retorna quando todos os valores estiverem prontos
gerarVariosNumeros().then(numeros => console.log(numeros))