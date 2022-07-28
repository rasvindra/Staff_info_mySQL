const fs = require('fs')
const inquirer = require('inquirer');

function init(){
inquirer.prompt ([  
    { 
        type: "list",
        name: "loadchocies",
        meesage: "What would you like to do?",
        choices: ["View all the Departments","View all Employee Roles","View all Employees Data","Add a New Department","Add a New Employee Role","Add a New Employee","Update an Employee's Role"]

},
]).then ((ans) => {
    console.log(ans)
    }
)}

init()
