DROP DATABASE IF EXISTS burger_sequelized;

CREATE DATABASE burger_sequelized;
USE burger_sequelized;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NULL,
    customer VARCHAR(100) NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY(id)
);