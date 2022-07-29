
-- Query that displays departments in readable way for User. Works!!
SELECT department.id AS "Department ID", department.deptname AS "Department Name" FROM department;


-- MANAGER ID NOT DISPLAYING CORRECTLY. ONLY SHOWS 1 or 2
SELECT position.id , position.title, position.salary, department.deptname
FROM position
   JOIN department
   ON position.deptid = department.id;


-- MANAGER ID NOT DISPLAYING CORRECTLY. ONLY SHOWS 1 or 2
SELECT position.id, position.title, position.salary, department.deptname, employee.first_name, employee.last_name, employee.manager_id
FROM position 
JOIN department 
ON position.deptid = department.id
JOIN employee
ON employee.id = position.deptid

