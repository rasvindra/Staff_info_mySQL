const mysql = require("mysql")


const viewAllDepartments = () => {
    const query = "SELECT department.id AS 'Department ID', department.deptname AS 'Department Name' FROM department;";
    connection.query(
      query,
      (err, results) => {
        if (err) throw err;
        console.log('\n');
        console.table(results);
        start();
    })
}


const viewAllRoles = () => {
    const query = "SELECT position.id , position.title, position.salary, department.deptname FROM position JOIN department ON position.deptid = department.id;";
    connection.query(
      query,
      (err, results) => {
        if (err) throw err;
        console.log('\n');
        console.table(results);
        start();
    })
}


const viewAllEmployees = () => {
    const query = "SELECT position.id, position.title, position.salary, department.deptname, employee.first_name, employee.last_name, employee.manager_id FROM position JOIN department ON position.deptid = department.id JOIN employee ON position.id = employee.id";
    connection.query(
      query,
      (err, results) => {
        if (err) throw err;
        console.log('\n');
        console.table(results);
        start();
    })
}


const addNewDepartment = async () => {
    const response = await inquirer.prompt([
        {
          name: "newDepartment",
          type: "input",
          message: "What is the new department name?"
        }
      ])
      
      connection.query(
        "INSERT INTO employees_tracker_db.department SET ?",
        {
          name: response.newDepartment,
        },
        (err) => {
          if (err) throw err;
          console.log("New department added successfully!")
          start();
    })
}


const addNewEmployeeRole = async () => {
    const departments = await viewAllDepartments();
    const responses = await inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "Please enter a New Role? ",
      },
      {
        name: "salary",
        type: "decimal",
        message: "What is the Salary for the New Role?",
      },
      {
        name: "department",
        type: "list",
        choices: departments.map(department => department.deptname),
        message: "What Department is the New Role in?"
      }
    ])
    departments.forEach(department => {
      if (department.deptname === responses.department) {
        responses.department = department.id;
      }
    });
    connection.query(
      "INSERT INTO employees_tracker_db.position SET ?",
      {
        title: responses.title,
        salary: responses.salary,
        department_id: responses.department,
      },
      (err) => {
        if (err) throw err;
        console.log("New role added successfully!")
        start();
    })
  }

  const updateEmployeeRole = async () => {
    connection.query('Select * FROM employee', async (err, employees) => {
        if (err) throw err;
      const employeeSelected = await inquirer
          .prompt([
            {
              name: "employee_id",
              type: "list",
              choices: employees.map(employee => ({name:employee.first_name + " " + employee.last_name, value: employee.id})),
              message: "Which Employee Role would you like to Update? ",
            }
          ])
      
        connection.query("Select * FROM position", async (err, roles) => {
          if (err) throw err;
    
          const roleSelected = await inquirer
            .prompt([
              {
                name: "position_id",
                type: "list",
                choices: roles.map(role => ({name:position.title, value: position.id})),
                message: "What is the Employee's new role? ",
              }
            ])
    
          connection.query(
            'UPDATE employees_db.employee SET ? WHERE ?',
            [
              {
                position_id: roleSelected.position_id,
              },
              {
                id: employeeSelected.employee_id, 
              }
            ],
            (err) => {
              if (err) throw err;
              console.log("Employee role updated successfully!")
              start();
            }
          )
        })
      })
    }


const addNewEmployee = async () => {
  connection.query("Select * FROM position, async (err, positions)") => {
      if (err) throw err; 
      connection.query('Select * FROM employee WHERE manager_id IS NULL', async (err, managers) => {
        if (err) throw err; 
  
      managers = managers.map(manager => ({name:manager.first_name + " " + manager.last_name, value: manager.id}));
      managers.push({name:"None"});
  
      const responses = await inquirer
        .prompt([
          {
            type: "input",
            message: "What is the employee's first name? ",
            name: "first_name"
          },
          {
            type: "input",
            message: "What is the employee's last name? ",
            name: "last_name"
          },
          {
            type: "list",
            message: "What is the employee's role? ",
            choices: roles.map(role => ({name:role.title, value: role.id})),
            name: "role_id"
          },
          {
            type: "list",
            message: "Who is the employee's manager? ",
            choices: managers,
            name: "manager_id"
          }
        ])
      
        if (responses.manager_id === "None") {
          responses.manager_id = null;
        }

      connection.query(
          'INSERT INTO employee SET ?',
          {
            first_name: responses.first_name,
            last_name: responses.last_name,
            role_id: responses.role_id,
            manager_id: responses.manager_id
          },
          (err, res) => {
            if (err) throw err;
            console.log("New employee added.\n");
            start();
          }
      )
    })
}

  module.exports = viewAllDepartments;
  module.exports = viewAllRoles;
  module.exports = viewAllEmployees;
  module.exports = addNewDepartment;
  module.exports = addNewEmployeeRole;
  module.exports = addNewEmployee;
  module.exports = updateEmployeeRole;