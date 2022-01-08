const valores = [7.7, 8.2, 4.1, 9.3];
console.log(valores[1], valores[3], valores[4]);

valores[4] = 10; //insere o 10 no indice 4
console.log(valores);
console.log(valores.length);

/* valores[10] = 20; //insere o 20 no indice 10 mas deixa 5 espaços vazios
console.log(valores);
console.log(valores.length); */

valores.push(true, null, 'texto'); //insere diversos valores no array
console.log(valores);

console.log(valores.pop()); //remove o ultimo elemento e retorna o elemento removido
console.log(valores);
delete valores[0]; //deleta o elemento de um indice especifico
console.log(valores);