function tratarErroELancar(erro) {
    throw new Error('...');
    throw 10;
    throw true;
    throw 'mensagem';
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { //dentro de try um erro potencial pode ser gerado
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (error) { //caso ocorra o erro catch é executado
        tratarErroELancar(error);
    } finally { //finally é executado por ultimo independente do erro
        console.log('final');
    }

}

const obj = { nome: 'Rodrigo' };
imprimirNomeGritado(obj);