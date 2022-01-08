//cidadão de primeira classe é quando a linguagem trata a função como dado
//first-class object(citizen)

//criar função de forma literal
function funcao(parametros) {
    //bloco ou corpo da função
};

//armazenar em uma variável
const funcao2 = function () { };

//armazenar em array
const array = [function (a, b) { return a + b; }, funcao, funcao2];
console.log(array[0](1, 2));

//armazenar em atributo de objeto
const obj = {};
obj.falar = function () { return 'texto' };
console.log(obj.falar());

//passar funcao como parametro
function run(fun) {
    fun();
}
run(function () { console.log('executando...'); });

//retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}
soma(2, 3)(4);
const cincoMais = soma(2, 3);
cincoMais(4);