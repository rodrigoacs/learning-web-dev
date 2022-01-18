const quaseArray = {
    0: 'rodrigo',
    1: 'ana',
    2: 'rafael',
}

console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
});

console.log(quaseArray[0]);

const array = ['rodrigo', 'ana', 'rafael'];
console.log(quaseArray.toString(), array);