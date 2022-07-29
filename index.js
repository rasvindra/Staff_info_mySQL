const mysql = require("mysql");
const inquirer = require('inquirer');
const consoleTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_tracker_db",
});



const start = ()=>{
inquirer.prompt ([  
    { 
        type: "list",
        name: "chocies",
        message: "What would you like to do?",
        choices: [
            "View all the Departments",
            "View all Employee Roles",
            "View all Employees Data",
            "Add a New Department",
            "Add a New Employee Role",
            "Add a New Employee",
            "Update an Employee's Role"],

},

]).then ((res) => {
  switch (res.choices) {
    case 'View all Departments':
      viewAllDepartments();
      break;
    case 'View all Employee Roles':
      viewAllRoles();
      break;
    case 'View all Employee Data':
      viewAllEmployee();
      break;
    case 'Add a NEW Department':
      addDepartment();
      break;
    case "Add a New Employee Role":
      addRole();
      break;
    case "Update an Employee's Role":
      updateEmployeeRole();
      break;
    case "Add a New Employee":
      totalUtilizedBudget();
      break;
    default:
      throw new Error('You messed up!');
  }
});

};

connection.connect((err) => {
  if (err) throw err;
  console.table('Welcome to Employee Tracker');
  start();
});