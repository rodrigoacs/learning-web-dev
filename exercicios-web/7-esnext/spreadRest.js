// operador ... rest(juntar)/spread(espalhar)
// usar rest como parametro de função

// usar spread como objeto
const funcionario = { nome: 'maria', salario: 1299.99 }
const clone = { ativo: true, ...funcionario }
console.log(funcionario);
console.log(clone);

// usar spread como array
const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['maria', ...grupoA, 'ana']
console.log(grupoA);
console.log(grupoFinal);