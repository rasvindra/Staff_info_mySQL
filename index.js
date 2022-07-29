const fs = require('fs')
const inquirer = require('inquirer');

function init(){
inquirer.prompt ([  
    { 
        type: "list",
        name: "loadchocies",
        message: "What would you like to do?",
        choices: [
            "View all the Departments",
            "View all Employee Roles",
            "View all Employees Data",
            "Add a New Department",
            "Add a New Employee Role",
            "Add a New Employee",
            "Update an Employee's Role"]
},

]).then ((ans) => {
    console.log(ans["loadchoices"]);
    }
)}

init()
/* if user selected choices needs to be used in another function
function ask() {
    var questions = [{
      type: 'list',
      name: 'theList',
      message: "Message",
      choices: listArray
    }]
  
    inquirer.prompt(questions).then(answers => {
    let itemInQuestion = (answers['loadchoices']);
  
     function isPicked(item) { 
      return item.name === itemInQuestion;
  }
  
    let picked = (["View all the Departments","View all Employee Roles","View all Employees Data","Add a New Department","Add a New Employee Role","Add a New Employee","Update an Employee's Role"].find(isPicked));
    ifneededFunction(picked);
    })
  
  }
  */