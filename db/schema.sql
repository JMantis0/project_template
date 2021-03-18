DROP DATABASE IF EXISTS project_template;
CREATE DATABASE project_template;
USE project_template;
CREATE TABLE TestData (
text VARCHAR(15000) NOT NULL,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id)
);