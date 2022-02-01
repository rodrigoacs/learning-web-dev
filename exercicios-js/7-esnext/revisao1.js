// let e const
{
    var a = 2
    let b = 3
}
console.log(a);
//console.log(b);

// template string
const produto = 'ipad'
console.log(`${produto} é caro`);

// destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras);

const [x, y] = [1, 2, 3]
console.log(x, y);

const { idade, nome } = { nome: 'ana', idade: 19 }
console.log(nome, idade);