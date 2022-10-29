const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// Paths
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');
// HTML builder
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

function promptIntern() {
  inquirer.prompt(Intern.internQuestions)
  .then(function(answers) {
      const intern = new Intern.Intern(answers.internName, answers.internId, answers.internEmail, answers.internGithub);
      teamMembers.push(intern);
      addEmployee();
  });
}

function buildTeam() {
  fs.appendFile(distPath, render(teamMembers), (err) => err ? console.error(err) : console.log(`Your team's page has been generated in ${DIST_DIR}/team.html`));
}
// Starts application by asking for manager information
managerPrompt()