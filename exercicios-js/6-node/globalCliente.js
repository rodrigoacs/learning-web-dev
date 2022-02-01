require('./global');
console.log(minhaApp.saudacao());

minhaApp.nome = 'mudou'; //colocar o Object.freeze no global.js
console.log(minhaApp.nome);