-- criando tabela Estado
CREATE TABLE estados (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR (45) NOT NULL,
    sigla VARCHAR (2),
    regiao enum (
        'Norte',
        'Nordeste',
        'Sul',
        'Centro Oeste',
        'Sudeste'
    ),
    populacao DECIMAL (5, 2) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (nome),
    UNIQUE KEY (sigla)
);