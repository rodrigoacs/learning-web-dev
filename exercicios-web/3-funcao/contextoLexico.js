//a função carrega consigo o local onde foi declarada

const valor = 'Global';

function funcao() {
    console.log(valor);
}

function exec() {
    const valor = 'Local';
    funcao();
}

exec();