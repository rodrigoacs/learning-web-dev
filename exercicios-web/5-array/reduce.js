const alunos = [
    { nome: 'joao', nota: 7.3, bolsista: false },
    { nome: 'maria', nota: 9.2, bolsista: true },
    { nome: 'pedro', nota: 9.8, bolsista: false },
    { nome: 'ana', nota: 8.7, bolsista: true },
];

const valorInicial = 10;

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
}, valorInicial);
console.log(resultado);

