// o array é dinâmico aumenta e diminui de tamanho

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['bia', 'carlos', 'ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); //undefined

aprovados[3] = 'paulo';
console.log(aprovados[3]);

aprovados.push('rodrigo');
console.log(aprovados.length);

aprovados[9] = 'rafael';
console.log(aprovados.length);
console.log(aprovados);
console.log(aprovados[5] === undefined);

aprovados.sort();
console.log(aprovados);

delete aprovados[1];
console.log(aprovados[1] === undefined);

aprovados = ['bia', 'carlos', 'ana'];
aprovados.splice(1, 2, 'elemento adicionado');
console.log(aprovados); // exclui 2 a partir do elemento 1 e adiciona um elemento
