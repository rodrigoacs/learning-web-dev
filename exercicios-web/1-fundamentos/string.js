const nome = "rodrigo";

console.log(nome.charAt(4));        //indice 4 = letra i
console.log(nome.charCodeAt(4));    //indice 4 na tabela unicode
console.log(nome.indexOf('i'));     //retorna o indice do char i
console.log(nome.substring(2, 5));  //retorna uma parte da string

console.log('nome: '.concat(nome).concat("!")); //concatena strings
console.log('nome: ' + nome + "!"); //mesma coisa da de cima

console.log(nome.replace('o', 'x')); //troca o por x na string

console.log('rodrigo,augusto,correa,soares'.split(',')); //separa pelas virgula e coloca num array