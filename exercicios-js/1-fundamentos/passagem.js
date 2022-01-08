//passagem por referência
//é modificado o conteúdo no endereço que obj e objAux apontam
let obj = { nome: 'Rodrigo' };
console.log(obj);

let objAux = obj;
console.log(obj, objAux);

objAux.nome = 'Augusto';
console.log(obj, objAux);

//passagem por valor
//é modificado o conteúdo da variável em si
let num = 10;
console.log(num);

let numAux = num;
console.log(num, numAux);

numAux = 20;
console.log(num, numAux);