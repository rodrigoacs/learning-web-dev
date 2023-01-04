-- SELECT * FROM estados
-- SELECT nome AS "Nome do Estado", sigla AS "Sigla" FROM `estados` WHERE regiao = 'Sul';
SELECT
    nome AS "Nome do Estado",
    sigla AS "Sigla",
    populacao AS "Número de Habitantes"
FROM
    `estados`
WHERE
    populacao >= 10
ORDER BY
    populacao DESC