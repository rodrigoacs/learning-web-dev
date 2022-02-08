//break e continue fun
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let x in num) {
    if (x == 5) {
        break; //chega no 5 e para
    }
    console.log(`${x} = ${num[x]}`);
}

for (let y in num) {
    if (y == 5) {
        continue; //chega no 5 pula o 6 e continua
    }
    console.log(`${y} = ${num[y]}`);
}

externo:
for (a in num) {
    for (b in num) {
        if (a == 2 && b == 3) {
            break externo;
        }
        console.log(`Par = ${a},${b}`);
    }
}