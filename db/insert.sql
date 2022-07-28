INSERT INTO department (deptname)
VALUES
    ("Engineering"),
    ("Finance"),
    ("Quality Assurance"),
    ("Facilities");

INSERT INTO position (title, salary, deptid)
VALUES
    ("Technician",70000.00,1),
    ("Lead_Technician",82000.00,1),
    ("Sales",90000.00,2),
    ("Accountant",66666.66,2),
    ("Account Manager",80000.00,2),
    ("Design and Marketing",68000.00,3),
    ("Product_Tester",48000.00,3),
    ("Gopher",68000.00,4);    

--  INSERT INTO employee (first_name, last_name, position_id, manager_id)
VALUES
    ("Fred", "Flinstone", 1, 1),
     ("Wilma", "Flinstone", 2, 1),
     ("Bam Bam", "Rubble", 3, 2),
     ("Pebbles","Flinstone", 4, 2),
    ("Betty", "Rubble", 5, 2),
    ("Barney", "Ruble", 6, 3),
    ("George", "Jetson", 7, 3),
    ("Jane", "Jetson", 8, 4);