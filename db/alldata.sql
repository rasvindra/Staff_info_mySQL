
-- Query that displays departments in readable way for User. Works!!
SELECT department.id AS "Department ID", department.deptname AS "Department Name" FROM department;


-- Supposed to display job title, empid, deprtment, and salary. NOT WORING DISPLAYS 4 LINES
SELECT employee.position_id, department.deptname, position.title, position.salary
FROM department
   JOIN position
   ON department.id = position.id
   Join employee
   ON employee.id = position.id;


-- Query that displays all emplayee data. DOES NOT WORK only showing 4 lines
SELECT position.id, position.title, position.salary, employee.first_name, employee.last_name, employee.manager_id, department.deptname
FROM department JOIN position ON department.id = position.id
Join employee ON employee.id = position.id;

