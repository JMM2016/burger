CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id int (10) NOT NULL AUTO_INCREMENT,
    burger_name varchar (255) not null,
    devoured boolean not null,
    date timestamp,
    PRIMARY KEY (id)
);

