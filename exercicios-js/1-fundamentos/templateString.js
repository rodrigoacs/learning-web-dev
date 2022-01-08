const nome = 'Rodrigo';
const concatenacao = 'Ola ' + nome + '!';
const template = `Olá ${nome}!`; //template string

console.log(concatenacao);
console.log(template);

const up = texto => texto.toUpperCase();

console.log(`Ei... ${up('cuidado')}`); //função dentro do template string