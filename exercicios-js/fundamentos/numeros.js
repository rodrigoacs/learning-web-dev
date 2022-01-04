const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));


const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));  //arredonda casa decimal
console.log(media.toString());  //number para string
console.log(media.toString(2)); //number para binario

let string = media.toFixed(2).toString(); //arredonda e transforma em string
console.log(string, typeof string);

console.log(7 / 0);       //infinity
console.log("10" / 2);    //5
console.log("Teste" * 2); //NaN
console.log(0.1 + 0.7);   //!= 0.8