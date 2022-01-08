const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar(); //conflito entre paradigma funcional e orientação a objeto

const falarDePessoa = pessoa.falar.bind(pessoa); // this passa a ser o parametro de bind
falarDePessoa();