const saudacao = "olá" //contexto léxico 1

function exec() {
    const saudacao = "salve" //contexto léxico 2
    return saudacao;
}

//objetos são grupos aninhados de pares nome/valor

const client = {
    nome: 'Rodrigo',
    idade: 18,
    peso: 100,
    endereco: {
        rua: 'São Luiz',
        numero: 109,
    }
}

console.log(saudacao);
console.log(exec());
console.log(client);