const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];

const employeeOptions = [
  {
    type: 'list',
    message: 'Please select which option you would like to continue with:',
    name: 'options',
    choices: ['add an engineer', 'add an intern', 'finish building my team']
  },
  
];


function managerPrompt() {
  inquirer.prompt(Manager.managerQuestions)
  .then(function(answer) {
      const manager = new Manager.Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.officeNumber);
      teamMembers.push(manager);
      addEmployee();
  });
  
}

function addEmployee() {
  inquirer.prompt(employeeOptions)
  .then(function(answer) {
      switch (answer.options) {
          case 'add an engineer':
              promptEngineer();
              break;
          case 'add an intern':
              promptIntern();
              break;
          default:
              buildTeam();
      }
  });
}

function promptEngineer() {
  inquirer.prompt(Engineer.engineerQuestions)
  .then(function(answers) {
      const engineer = new Engineer.Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamMembers.push(engineer);
      addEmployee();
  });
}


managerPrompt()

// function for creating manager - inquirer questions
  // take those questions and create a new Manager with the user provided answer
  // push that new Manager to the team members array

  // follow the same pattern for each type of employee
  // build a function for them that uses inquirer


// STRUCTURING IT

// start with manager function, since every team needs a manager
// at the end of manager function, call a createTeam function

// this function would simply ask the user which type of employee they would like to add, based on their choice, run the correesponding function

// at the end, use fs to write file while sending the team array over to the function you brought in from page-template.js