-- Supposed to display job title, empid, deprtment, and salary. NOT WORING DISPLAYS 32 LINES
SELECT DISTINCT person_position.empid, person_position.title, incharge.department, person_position.salary
FROM person_position
  INNER JOIN incharge;

-- Query that displays departments without duplicates. WORKS!!
SELECT DISTINCT incharge.department, incharge.id FROM incharge;

-- Query that displays all emplayee data with no duplicates. DOES NOT WORK BECAUSE COLUMS FROM TWO TABLES DO NOT MATCH
SELECT person_position.empid, person_position.first_name, person_position.last_name, person_position.title, person_position.salary
FROM person_position AS info
LEFT JOIN incharge AS bossinfo
ON person_position.title = incharge.title

-- incharge.department, incharge.manager 