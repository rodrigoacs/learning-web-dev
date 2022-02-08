function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve()
        }, tempo);
    })
}

//esperarPor(2000)
//    .then(() => console.log('executando promise'))
//    .then(esperarPor)
//    .then(() => console.log('executando promise'))
//    .then(esperarPor)
//    .then(() => console.log('executando promise'))

async function executar() {
    await esperarPor(500)
    console.log('executar');
    await esperarPor(500)
    console.log('executar');
    await esperarPor(500)
    console.log('executar');
}

executar()