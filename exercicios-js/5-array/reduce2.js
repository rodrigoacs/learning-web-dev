const alunos = [
    { nome: 'joao', nota: 7.3, bolsista: false },
    { nome: 'maria', nota: 9.2, bolsista: true },
    { nome: 'pedro', nota: 9.8, bolsista: false },
    { nome: 'ana', nota: 8.7, bolsista: true },
];

const todosBolsistas = (acumulador, atual) => acumulador && atual;

const algumBolsista = (acumulador, atual) => acumulador || atual;

console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));

