const pessoa = {
    nome: 'Rodrigo',
    idade: 18,
    peso: 100,
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
});

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '14/05/2003'
});

pessoa.dataNascimento = '00/00/0000';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Objetct.assign (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);

Object.freeze(obj);
obj.c = 1234;
console.log(obj);