const autores = ['Clarke', 'Gibson', 'Asimov', 'Scalzi'];
console.log(autores);

autores.pop(); // remove o último elemento
console.log(autores);

autores.push('Pullman'); // adiciona um elemento no final
console.log(autores);

autores.shift(autores); // remove o primeiro elemento
console.log(autores);

autores.unshift('Orwell'); // adiciona um elemento no inicio
console.log(autores);

// splice pode remover e adicionar elementos
// adcionar
autores.splice(2, 0, 'Herbert', 'King');
console.log(autores);
// remover
autores.splice(3, 1);
console.log(autores);

const algunsAutores = autores.slice(2); // cria array novo
console.log(algunsAutores);

const algunsAutores2 = autores.slice(1, 3);
console.log(algunsAutores2);