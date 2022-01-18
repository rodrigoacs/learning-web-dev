class Lancamento {
    constructor(nome = "Genérico", valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancementos = [];
    }

    addLancementos(...lancementos) {
        lancementos.forEach(l => this.lancementos.push(l));
    }

    sumario() {
        let valorConsolidado = 0;
        this.lancementos.forEach(l => { valorConsolidado += l.valor });
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salario', 45000);
const contaDeLuz = new Lancamento('Luz', -220);

const contas = new CicloFinanceiro(6, 2018);
contas.addLancementos(salario, contaDeLuz);
console.log(contas.sumario());