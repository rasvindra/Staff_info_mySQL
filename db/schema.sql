DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE person_position (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary INT NOT NULL
);

CREATE TABLE incharge (
    id INT NOT NULL,
    department VARCHAR(30) NOT NULL,
    manager VARCHAR(30)
);
