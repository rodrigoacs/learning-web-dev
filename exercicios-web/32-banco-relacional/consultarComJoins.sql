SELECT
    c.id AS ID_C,
    c.nome AS Cidade,
    c.estado_id AS ID_Estado,
    c.area AS Area,
    p.id AS ID_P,
    p.nome AS Prefeito,
    p.cidade_id AS ID_Cidade
FROM
    cidades c
    INNER JOIN prefeitos p ON c.id = p.cidade_id;

SELECT
    c.id AS ID_C,
    c.nome AS Cidade,
    c.estado_id AS ID_Estado,
    c.area AS Area,
    p.id AS ID_P,
    p.nome AS Prefeito,
    p.cidade_id AS ID_Cidade
FROM
    cidades c
    LEFT JOIN prefeitos p ON c.id = p.cidade_id;

SELECT
    c.id AS ID_C,
    c.nome AS Cidade,
    c.estado_id AS ID_Estado,
    c.area AS Area,
    p.id AS ID_P,
    p.nome AS Prefeito,
    p.cidade_id AS ID_Cidade
FROM
    cidades c
    RIGHT JOIN prefeitos p ON c.id = p.cidade_id;