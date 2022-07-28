INSERT INTO person_position (empid, title, first_name, last_name, salary)
VALUES
    (1,"Technician", "Fred", "Flinstone", 70000),
    (2,"Lead_Technician", "Wilma", "Flinstone", 82000),
    (3,"Product_Tester", "Bam Bam", "Rubble",48000),
    (4,"Design and Marketing", "Pebbles","Flinstone", 68000),
    (5,"Sales", "Betty", "Rubble", 90000),
    (6,"Gopher", "Barney", "Ruble", 68000),
    (7,"Accountant", "George", "Jetson", 66666),
    (8,"Account Manager", "Jane", "Jetson", 80000);

INSERT INTO incharge (empid, title, department, manager)
VALUES
    (1,"Technician", "Engineering","Conan the Barbarian"),
    (2,"Lead Technician", "Engineering","Conan the Barbarian"),
    (3,"Accountant", "Finance","Scrooge McDuck"),
    (4,"Sales", "Finance","Scrooge McDuck"),
    (5,"Account Manager", "Finance","Scrooge McDuck"),
    (6,"Product Tester", "Quality Assurance","Norville Rogers"),
    (7,"Design and Marketing", "Quality Assurance","Norville Rogers"),
    (8,"Gopher", "Facilities","Solomn Grundy");    