// A função define a estrutura do objeto gerado com o new
function Funcionario(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
}


console.log(typeof Funcionario);
console.log(typeof new Funcionario);

const funcionario1 = new Funcionario('Ana Silva', 'Analista de TI', 8400);
const funcionario2 = new Funcionario('Pedro Mesquita', 'Gerente', 15600);
const funcionario3 = new Funcionario('Rafael Souza', 'Contador', 10512.50);

console.log(funcionario1);
console.log(funcionario2);
console.log(funcionario3);