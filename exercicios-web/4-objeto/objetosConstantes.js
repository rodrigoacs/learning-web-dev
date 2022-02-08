// pessoa -> 0x123 -> {...}
const pessoa = { nome: 'Joao' };
pessoa.nome = 'Pedro';
console.log(pessoa.nome);

// pessoa -> 0x456 -> {...}
//pessoa = { nome: 'Ana' }; ERRO

Object.freeze(pessoa);
pessoa.nome = 'Maria';
pessoa.endereco = 'Rua São Luiz';
delete pessoa.nome;
console.log(pessoa);