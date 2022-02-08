function mediaAluno(codigo, nota1, nota2, nota3) {
    let media;
    let situacao;
    if (nota1 > nota2 && nota1 > nota3) {
        media = (nota1 * 4 + nota2 * 3 + nota3 * 3) / 10;
    }
    if (nota2 > nota1 && nota2 > nota3) {
        media = (nota2 * 4 + nota1 * 3 + nota3 * 3) / 10;
    }
    if (nota3 > nota1 && nota3 > nota2) {
        media = (nota3 * 4 + nota2 * 3 + nota1 * 3) / 10;
    }
    if (media >= 5) {
        situacao = 'aprovado'
    } else {
        situacao = 'reprovado'
    }
    console.log(`${codigo}: nota1: ${nota1} nota2: ${nota2} nota3: ${nota3} media: ${media} ${situacao}`);
    return;
}

mediaAluno('001', 7, 4, 2);