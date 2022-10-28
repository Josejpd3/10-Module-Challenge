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
  .then(function(answers) {
      const manager = new Manager.Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
      teamMembers.push(manager);
  });
  
}

managerPrompt()

// function for creating manager - inquirer questions
  // take those questions and create a new Manager with the user provided answers
  // push that new Manager to the team members array

  // follow the same pattern for each type of employee
  // build a function for them that uses inquirer


// STRUCTURING IT

// start with manager function, since every team needs a manager
// at the end of manager function, call a createTeam function

// this function would simply ask the user which type of employee they would like to add, based on their choice, run the correesponding function

// at the end, use fs to write file while sending the team array over to the function you brought in from page-template.js