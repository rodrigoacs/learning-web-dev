const notas = [4, 12, 2, 62, 23, 61, 35];

for (let i in notas) {
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'rodrigo',
    sobrenome: 'acs',
    idade: 18,
    peso: 100
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}