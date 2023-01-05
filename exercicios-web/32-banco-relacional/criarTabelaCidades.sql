CREATE TABLE IF NOT EXISTS cidades (
    id int UNSIGNED NOT NULL AUTO_INCREMENT,
    nome varchar(255) NOT NULL,
    estado_id int UNSIGNED NOT NULL,
    area decimal(10, 2),
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) REFERENCES estados(id)
);