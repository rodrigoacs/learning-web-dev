const filhas = ['ana', 'bia'];
const filhos = ['pedro', 'jose'];

const todos = filhas.concat(filhos, 'fulano');
console.log(filhas, filhos, todos);

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));