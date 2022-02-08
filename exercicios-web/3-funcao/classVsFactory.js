class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('rodrigo');
p1.falar();

const pessoa = nome => {
    return {
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = pessoa('pedro');
p2.falar();