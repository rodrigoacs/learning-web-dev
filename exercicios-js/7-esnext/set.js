// nao aceita repetição e não é indexado
const times = new Set()
times.add('vasco')
times.add('sao paulo').add('palmeiras').add('atletico')
times.add('vasco')
console.log(times);
console.log(times.size);