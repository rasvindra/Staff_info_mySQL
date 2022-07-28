SELECT *
FROM person_position
  INNER JOIN incharge
  ON person_position.empid = incharge.empid
  ORDER BY person_position.last_name
  

--   person_position.empid, person_position.first_name, person_position.last_name, person_position.title, person_position.salary, incharge.department, incharge.manager 