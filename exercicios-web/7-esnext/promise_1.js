let p = new Promise(function (resolve) {
    resolve(1)
})
p.then(function (valor) {
    console.log(valor);
})


let p2 = new Promise(function (resolve) {
    resolve({
        x: 2,
        y: 3
    })
})
p2.then(function (valor) {
    console.log(valor.x);
    console.log(valor.y);
})


let p3 = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
p3
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))
