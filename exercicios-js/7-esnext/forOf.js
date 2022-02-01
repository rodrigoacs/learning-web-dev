for (let letra of 'Cod3r') {
    //console.log(letra);
}

const assuntosEcma = ['map', 'set', 'promise']
for (let i in assuntosEcma) {
    console.log(i);
}
for (let i of assuntosEcma) {
    console.log(i);
}

const assuntosMap = new Map([
    ['map', { abordado: true }],
    ['set', { abordado: true }],
    ['promise', { abordado: false }],
])

for (let assunto of assuntosMap) {
    console.log(assunto);
}
for (let chave of assuntosMap.keys()) {
    console.log(chave);
}
for (let valor of assuntosMap.entries()) {
    console.log(valor);
}
for (let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor);
}