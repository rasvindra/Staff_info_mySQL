
-- Query that displays departments in readable way for User. Works!!
SELECT department.id AS "Department ID", department.deptname AS "Department Name" FROM department;


-- Query that displays position, its ID, salary the the department assosiated. WORKS!
SELECT position.id , position.title, position.salary, department.deptname
FROM position
   JOIN department
   ON position.deptid = department.id;


-- Query that displays employees and all associated data for employee. WORKS!
SELECT position.id, position.title, position.salary, department.deptname, employee.first_name, employee.last_name, employee.manager_id
FROM position 
JOIN department 
ON position.deptid = department.id
JOIN employee
ON position.id = employee.id

