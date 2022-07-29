DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  deptname VARCHAR(30) NOT NULL
);

CREATE TABLE position (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  deptid INT NOT NULL,
  CONSTRAINT fk_department FOREIGN KEY(deptid) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  position_id INT NULL,
  manager_id INT,
 FOREIGN KEY (position_id) REFERENCES position (id) ON DELETE SET NULL,
 FOREIGN KEY (manager_id) REFERENCES employee (id) ON DELETE SET NULL
);
 