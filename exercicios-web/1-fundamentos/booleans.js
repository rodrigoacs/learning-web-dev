let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!isAtivo, !!isAtivo);
/*
//retornam true
console.log(!!3);
console.log(!!-1);
console.log(!!'string');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

//retornam false
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));
*/

let nome = '';
/* o operador OU vai retornar o valor verdadeiro,
   como não há nada em nome retornará "nome não informado" */
console.log(nome || 'Nome não informado');
