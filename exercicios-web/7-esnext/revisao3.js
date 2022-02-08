// ES8: Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// melhorias na notação literal
const nome = 'ana'
const pessoa = {
    nome,
    ola() {
        return 'ola pessoal'
    }
}
console.log(pessoa.nome, pessoa.ola());

// class
class Animal { }
class Cachorro extends Animal {
    falar() {
        return 'au au'
    }
}
console.log(new Cachorro().falar());