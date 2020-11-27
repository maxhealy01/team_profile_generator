const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const employees = []

const initializeProgram = () => {
  return inquirer
    .prompt([{
      type: 'text',
      name: 'name',
      message: "Enter the team manager's name."
    },
    {
      type: 'text',
      name: 'id',
      message: "Enter the team manager's employee ID."
    },
    {
      type: 'text',
      name: 'email',
      message: "Enter the team manager's email address."
    },
    {
      type: 'text',
      name: 'officeNumber',
      message: "Enter the team manager's office number."
    }])
    .then(({ name, id, email, officeNumber }) => {
      manager = new Manager(name, id, email, officeNumber);
      employees.push(manager)
      console.log(employees)
    })
}

initializeProgram();


// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
