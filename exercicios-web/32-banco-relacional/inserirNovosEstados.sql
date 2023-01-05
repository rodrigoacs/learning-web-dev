INSERT INTO
    estados (id, nome, sigla, regiao, populacao)
VALUES
    (1000, 'Novo', 'NV', 'Sul', 2.54);

INSERT INTO
    estados (nome, sigla, regiao, populacao)
VALUES
    ('Mais Novo', 'MN', 'Norte', 2.51);

-- Mais novo recebe o ID 1001
-- o ID é incrementado com base no maior ID da tabela
SELECT
    *
FROM
    `estados`