DROP DATABASE IF EXISTS eatDaBurger_db;

CREATE DATABASE eatDaBurger_db;
USE eatDaBurger_db;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY(id)
);