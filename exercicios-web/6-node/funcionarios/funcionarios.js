const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const filtrarChina = e => e.pais == 'China';
const filtrarMulheres = e => e.genero == 'F';
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
}

axios.get(url).then(response => {
    const funcionarios = response.data;
    const func = funcionarios.filter(filtrarChina).filter(filtrarMulheres).reduce(menorSalario);
    console.log(func);

    /* gambiarra q eu usei pra resolver
    let filtrado = funcionarios.filter(filtrarChina).filter(filtrarMulheres);
    let idMenor = 0;
    let menor = funcionarios.filter(filtrarChina).filter(filtrarMulheres)[0].salario;
    filtrado.forEach(element => {
        if (element.salario < menor) {
            idMenor = element.id;
        }
    });
    filtrado.forEach(element => {
        if (element.id == idMenor) {
            console.log(element);
        }
    }); */
});

