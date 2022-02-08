/* Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`meu nome é ${this.nome}`);
    }
}*/

function criaPessoa(nome) {
    this.nome = nome;
    this.falar = function () {
        console.log(`meu nome é ${this.nome}`);
    }
}

const r = new criaPessoa('rodrigo');
r.falar();