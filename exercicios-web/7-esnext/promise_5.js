function funcionaOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('ocorreu um erro')
        } else {
            resolve(valor)
        }
    })
}

for (let i = 0; i < 10; i++) {
    funcionaOuNao('testando', i / 10).then(console.log).catch(console.log)
}