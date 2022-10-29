const Employee = require("./Employee");

// Intern Class

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

// Intern Prompt Questions

const internQuestions = [
    {
        type: 'input',
        message: 'What is your interns name?',
        name: 'internName',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
       },  
       {
        type: 'input',
        message: 'What is the interns employee ID number?',
        name: 'internId',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
       }, 
       {
        type: 'input',
        message: 'What is the interns email?',
        name: 'internEmail',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
      }, 
      {
        type: 'input',
        message: 'What is the interns school?',
        name: 'internSchool',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
      },
]

// Exports

module.exports = {
    Intern,
    internQuestions
}