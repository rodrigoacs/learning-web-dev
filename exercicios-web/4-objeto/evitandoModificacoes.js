// Object.preventExtensions (impede a adição de atributos)
const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag: 'promocao'
});
console.log('Extensível: ', Object.isExtensible(produto));

produto.nome = 'borracha';
produto.descricao = 'borracha escolar';
delete produto.tag;
console.log(produto);

// Object.seal (impede de adicionar e excluir atributos)
const pessoa = { nome: 'Rodrigo', idade: 18 };
Object.seal(pessoa);
console.log('Selado: ', Object.isSealed(pessoa));

pessoa.sobrenome = 'Soares';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);
