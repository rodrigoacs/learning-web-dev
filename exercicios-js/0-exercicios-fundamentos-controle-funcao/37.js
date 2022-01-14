function PA(n, a1, r) {
    let pa = [];
    let paSoma = 0;
    for (let i = 0; i < n; i++) {
        pa[i] = a1 + (i) * r;
    }
    console.log(pa);
    for (let i = 0; i < pa.length; i++) {
        paSoma += pa[i];
    }
    console.log(paSoma);
    return;
}

function PG(n, a1, r) {
    let pg = [];
    let pgSoma = 0;
    for (let i = 0; i < n; i++) {
        pg[i] = a1 * Math.pow(r, i);
    }
    console.log(pg);
    for (let i = 0; i < pg.length; i++) {
        pgSoma += pg[i];
    }
    console.log(pgSoma);
    return;
}

PA(10, 1, 5);
PG(10, 1, 2);